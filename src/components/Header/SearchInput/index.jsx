import React, { useState } from "react"
import { ButtonSubmitStyled, FormSearchStyled } from "./style"

export const SearchInput = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState("")

  const submit = (event) => {
    event.preventDefault()
    setSearch(inputValue)
    setSearch("")
  }
  setSearch(inputValue)
  return (
    <>
      <FormSearchStyled onSubmit={submit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Digite sua pesquisa..."
        />
        <ButtonSubmitStyled type="submit">Pesquisar</ButtonSubmitStyled>
      </FormSearchStyled>
    </>
  )
}
