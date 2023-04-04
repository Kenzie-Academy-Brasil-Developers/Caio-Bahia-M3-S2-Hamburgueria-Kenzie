import React from "react"

export const CardProductList = ({ product, addToCart, setSearch }) => {
  return (
    <li>
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
    </li>
  )
}
