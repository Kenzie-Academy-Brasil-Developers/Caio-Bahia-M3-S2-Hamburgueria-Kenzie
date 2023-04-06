import React from "react"
import { LiCardProductListStyled } from "./style"

export const CardProductList = ({ product, addToCart, setSearch }) => {
  return (
    <LiCardProductListStyled>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <small>{product.category}</small>
        <p>R${product.price}</p>
        <button
          onClick={() => {
            addToCart(product)
            setSearch("")
          }}
        >
          Adicionar
        </button>
      </div>
    </LiCardProductListStyled>
  )
}
