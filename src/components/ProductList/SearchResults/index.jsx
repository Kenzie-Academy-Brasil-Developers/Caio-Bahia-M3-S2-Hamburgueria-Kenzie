import React from "react"
import { DivSearchResults } from "./style"

export const SearchResults = ({ search }) => {
  return (
    <DivSearchResults>
      <h3>Resultados para:</h3>
      <p>{search}</p>
    </DivSearchResults>
  )
}
