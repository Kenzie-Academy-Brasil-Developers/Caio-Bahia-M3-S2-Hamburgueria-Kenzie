import React from "react"
import {
  DivCartRightSideStyled,
  DivCartleftSideStyled,
  DivImgCartContainer,
  DivTxtCartContainer,
  LiCartCard
} from "./style"

export const CardShopCart = ({ product, removeFromCart }) => {
  return (
    <LiCartCard>
      <DivCartleftSideStyled>
        <DivImgCartContainer>
          <img src={product.img} alt={product.name} />
        </DivImgCartContainer>
        <DivTxtCartContainer>
          <h3>{product.name}</h3>
          <small>{product.category}</small>
        </DivTxtCartContainer>
      </DivCartleftSideStyled>
      <DivCartRightSideStyled>
        <p onClick={() => removeFromCart(product.id)}>Remover</p>
      </DivCartRightSideStyled>
    </LiCartCard>
  )
}
