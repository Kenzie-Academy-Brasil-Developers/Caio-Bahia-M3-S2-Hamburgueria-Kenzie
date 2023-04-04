import React from "react"

export const SearchResults = ({ search }) => {
  return (
    <div>
      <h3>Resultados para:</h3>
      <p>{search}</p>
    </div>
  )
}
