import React from "react"
import { SearchResults } from "./SearchResults"
import { CardProductList } from "./Card-ProductList"
import { UlProductListStyled } from "./style"

export const ProducList = ({ search, searchOnList, addToCart, setSearch }) => {
  return (
    <>
      {search !== "" ? <SearchResults search={search}></SearchResults> : false}
      <UlProductListStyled>
        {searchOnList.map((product) => (
          <CardProductList
            key={product.id}
            product={product}
            addToCart={addToCart}
            setSearch={setSearch}
          ></CardProductList>
        ))}
      </UlProductListStyled>
    </>
  )
}
