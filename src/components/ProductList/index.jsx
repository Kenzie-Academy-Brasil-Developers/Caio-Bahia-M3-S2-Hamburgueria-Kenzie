import React from "react"
import { SearchResults } from "./SearchResults"
import { CardProductList } from "./Card-ProductList"

export const ProducList = ({ search, searchOnList, addToCart, setSearch }) => {
  return (
    <>
      <SearchResults search={search}></SearchResults>
      <ul>
        {searchOnList.map((product) => (
          <CardProductList
            key={product.id}
            product={product}
            addToCart={addToCart}
            setSearch={setSearch}
          ></CardProductList>
        ))}
      </ul>
    </>
  )
}
