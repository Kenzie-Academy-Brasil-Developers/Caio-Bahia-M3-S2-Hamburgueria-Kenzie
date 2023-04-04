import React, { useState } from "react"

export const SearchInput = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState("")

  const submit = (event) => {
    event.preventDefaut()
    setSearch(inputValue)
    setSearch("")
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Digite sua pesquisa..."
        />
        <button type="submit">Pesquisar</button>
        <h3>{inputValue}</h3>
      </form>
    </>
  )
}
