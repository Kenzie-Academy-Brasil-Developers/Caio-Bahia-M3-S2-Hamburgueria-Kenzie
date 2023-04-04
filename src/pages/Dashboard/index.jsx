import React, { useEffect, useState } from "react"
import { api } from "../../services/api"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ProducList } from "../../components/ProductList"
import { Header } from "../../components/Header"
import { ShopCart } from "../../components/Cart"

export const Dashboard = () => {
  const [products, setProducts] = useState([])

  const [search, setSearch] = useState("")

  const localStorageShopCart = localStorage.getItem("@BurguerKenzie")

  const [cart, setCart] = useState(localStorageShopCart ? JSON.parse(localStorageShopCart) : [])

  useEffect(() => {
    async function allProduct() {
      try {
        const response = await api.get("products")
        setProducts(response.data)
      } catch (error) {
        toast.error(error)
      }
    }
    allProduct()
  }, [])

  useEffect(() => {
    localStorage.setItem("@BurguerKenzie", JSON.stringify(cart))
  }, [cart])

  const searchOnList = products.filter((product) => {
    return search === ""
      ? true
      : product.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
          product.category.toLowerCase().includes(search.toLocaleLowerCase())
  })

  const addToCart = (CurrentProduct) => {
    if (cart.some((product) => product.id === CurrentProduct.id)) {
      toast.error("Este produto já se encontra na sua lista!", { position: "top-center" })
    } else {
      setCart([...cart, CurrentProduct])
      toast.success("Produto adicionado ao carrinho! 👌", {
        position: "top-center",
        autoClose: 3000
      })
    }
  }
  const removeFromCart = (productID) => {
    const newCart = cart.filter((product) => product.id !== productID)
    setCart(newCart)
    toast.error("Produto removido com sucesso!")
  }

  return (
    <>
      <Header setSearch={setSearch}></Header>
      <main>
        <div>
          <ProducList
            searchOnList={searchOnList}
            addToCart={addToCart}
            setSearch={setSearch}
            search={search}
          ></ProducList>
        </div>
        <aside>
          <ShopCart cart={cart} setCart={setCart} removeFromCart={removeFromCart}></ShopCart>
        </aside>
      </main>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  )
}
