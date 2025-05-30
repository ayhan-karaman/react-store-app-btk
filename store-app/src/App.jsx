/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from 'react-router'
import routes from './utilities/routers/router'
import { useEffect } from 'react'
import requests from './api/apiClient'
import { useCartContext } from './context/CartContext'


export const router = createBrowserRouter(routes)


function App() {
  const { setCart } = useCartContext();

 useEffect(() => {
    requests.cart
      .getCart()
      .then((cart) => setCart(cart))
      .catch((error) => console.log(error));
  }, []);



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
