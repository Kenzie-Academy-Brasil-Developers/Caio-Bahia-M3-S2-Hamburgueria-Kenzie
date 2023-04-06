import React from "react"
import { DivTotalMoney, DivTotalMoneyTexts } from "./style"

export const TotalValue = ({ cart, setCart }) => {
  const totalValue = cart.map((value) => value.price)
  const totalSum = totalValue.reduce(
    (accumulator, currentValue) => accumulator + parseFloat(currentValue),
    0
  )

  return (
    <DivTotalMoney>
      <DivTotalMoneyTexts>
        <small>Total:</small>
        <p>R${totalSum.toFixed(2)}</p>
      </DivTotalMoneyTexts>
      <button onClick={() => setCart([])}>Remover Todos</button>
    </DivTotalMoney>
  )
}
