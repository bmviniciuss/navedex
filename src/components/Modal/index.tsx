import { Modal as ChakraModal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, IModal } from '@chakra-ui/core'
import React from 'react'

interface CustomProps {
  title: string
  footer?: React.ReactNode
}

type Props = CustomProps & IModal

const Modal:React.FC<Props> = ({ title, footer, children, closeOnOverlayClick = false, isCentered = true, ...rest }) => {
  return (
    <ChakraModal {...rest} closeOnOverlayClick={closeOnOverlayClick} isCentered={isCentered}>
      <ModalOverlay />
      <ModalContent className="text-gray-900">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton className="focus:outline-none" />
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
