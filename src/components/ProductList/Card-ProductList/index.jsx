import React from "react"
import { DivImgContainerStyled, DivTextContainer, LiCardProductListStyled } from "./style"

export const CardProductList = ({ product, addToCart, setSearch }) => {
  return (
    <LiCardProductListStyled>
      <DivImgContainerStyled>
        <img src={product.img} alt={product.name} />
      </DivImgContainerStyled>
      <DivTextContainer>
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
      </DivTextContainer>
    </LiCardProductListStyled>
  )
}
