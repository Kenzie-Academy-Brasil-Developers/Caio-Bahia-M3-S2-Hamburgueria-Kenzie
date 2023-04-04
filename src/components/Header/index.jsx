import React, { useState } from "react"
import { SearchInput } from "./SearchInput"

export const Header = ({ setSearch }) => {
  return (
    <>
      <h3>LOGO!</h3>
      <SearchInput setSearch={setSearch}></SearchInput>
    </>
  )
}
