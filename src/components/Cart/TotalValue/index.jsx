import React from "react"

export const TotalValue = ({ cart, setCart }) => {
  const totalValue = cart.map((value) => value.price)
  const totalSum = totalValue.reduce(
    (accumulator, currentValue) => accumulator + parseFloat(currentValue),
    0
  )

  return (
    <div>
      <div>
        <small>Total:</small>
        <p>R${totalSum.toFixed(2)}</p>
      </div>
      <button onClick={() => setCart([])}></button>
    </div>
  )
}
