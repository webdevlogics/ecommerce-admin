'use client'

import { useEffect, useState } from "react"

import { StoreModal } from "@/components/modals/store-modal"

// Insure no hydration errors

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <StoreModal />
    </>
  )
}
