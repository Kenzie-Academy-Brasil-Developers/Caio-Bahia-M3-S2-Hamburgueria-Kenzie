import React from "react"
import { EmptyCart } from "./EmptyCart"
import { CardShopCart } from "./Card-ShopCart"
import { TotalValue } from "./TotalValue"
import { DivCartContainer, DivCartDisplay, DivCartTitleContainer } from "./style"

export const ShopCart = ({ cart, removeFromCart, setCart }) => {
  return (
    <DivCartContainer>
      <DivCartTitleContainer>
        <h2>Carrinho de compras</h2>
      </DivCartTitleContainer>
      <DivCartDisplay>
        {cart.length === 0 ? (
          <EmptyCart></EmptyCart>
        ) : (
          <ul>
            {cart.map((product) => (
              <CardShopCart
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
              ></CardShopCart>
            ))}
            <TotalValue cart={cart} setCart={setCart}></TotalValue>
          </ul>
        )}
      </DivCartDisplay>
    </DivCartContainer>
  )
}
