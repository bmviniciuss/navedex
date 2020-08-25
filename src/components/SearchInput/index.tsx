import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Icon,
  IconButton
} from '@chakra-ui/core'
import React, { useState, memo } from 'react'

interface Props {
  handleSubmit: (value:string) => void
  placeholder?: string
  className?: string
}

const SearchInput:React.FC<Props> = ({ handleSubmit, placeholder, className }) => {
  const [value, setValue] = useState('')

  function onSubmit (e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    handleSubmit(value)
  }

  function handleClear () {
    setValue('')
    handleSubmit('')
  }

  function handleChange (e:React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if (!value) {
      setValue(e.target.value)
      handleSubmit('')
    } else {
      setValue(e.target.value)
    }
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      <InputGroup>
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {value && (
          <InputRightElement width="4.5rem">
            <IconButton icon="small-close" isRound aria-label="limpar-filtro" size="xs" onClick={() => handleClear()} />
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  )
}

export default memo(SearchInput)
