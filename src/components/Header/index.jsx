import React, { useState } from "react"
import { SearchInput } from "./SearchInput"
import { HeaderStyled } from "./style"
import Logo from "/src/assets/logo.svg"

export const Header = ({ setSearch }) => {
  return (
    <HeaderStyled>
      <img src={Logo} alt="Logo Burguer Kenzie" />
      <SearchInput setSearch={setSearch}></SearchInput>
    </HeaderStyled>
  )
}
