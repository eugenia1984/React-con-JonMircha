import { useState } from 'react'

export const useModal = ({ initialValue = false }) => {
  // initialValue = false asi el modal empieza ocultado
  const [isOpen, setIsOpen] = useState(initialValue)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return [isOpen, openModal, closeModal]
}
