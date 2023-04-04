import React from "react"

export const CardShopCart = ({ product, removeFromCart }) => {
  return (
    <li>
      <div>
        <div>
          <img src={product.img} alt={product.name} />
        </div>
        <div>
          <h3>{product.name}</h3>
          <small>{product.category}</small>
        </div>
      </div>
      <div>
        <p onClick={() => removeFromCart(product.id)}>Remover</p>
      </div>
    </li>
  )
}
