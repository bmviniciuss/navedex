import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useToast
} from '@chakra-ui/core'
import React, { useRef } from 'react'
import { useMutation, queryCache } from 'react-query'

import { deleteNaver } from '../../external/api'
import { Naver } from '../../types'

interface Props {
  naver: Naver
  isOpen: boolean
  onClose():void
}

const DeleteNaverPopup:React.FC<Props> = ({ isOpen, naver, onClose }) => {
  const toast = useToast()
  const [mutate, { isLoading }] = useMutation(deleteNaver, {
    onSuccess: () => {
      queryCache.invalidateQueries('navers')
    }
  })

  async function handleMutation () {
    try {
      await mutate(naver.id)
      onClose()
      toast({
        title: 'Succeso',
        description: 'Naver Removido',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right'
      })
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao remover o Naver.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right'
      })
    }
  }

  const cancelRef = useRef<HTMLButtonElement | null>(null)
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Excluir Naver
        </AlertDialogHeader>

        <AlertDialogBody>
          Você deseja excluir <span className="font-bold">{naver.name}</span> ?
        </AlertDialogBody>

        <AlertDialogFooter>
          <Button isDisabled={isLoading} className="focus:outline-none" ref={cancelRef} onClick={onClose}>Cancel</Button>
          <Button isDisabled={isLoading} isLoading={isLoading} className="focus:outline-none" variantColor="red" onClick={() => handleMutation()} ml={3}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteNaverPopup
