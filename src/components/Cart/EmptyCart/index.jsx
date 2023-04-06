import React from "react"
import { DivContainerEmptyCart } from "./style"

export const EmptyCart = () => {
  return (
    <DivContainerEmptyCart>
      <h2>Sua sacola está vazia</h2>
      <small>Adicione itens!</small>
    </DivContainerEmptyCart>
  )
}
