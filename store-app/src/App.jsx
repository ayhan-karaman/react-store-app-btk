/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from 'react-router'
import routes from './utilities/routers/router'
import { useEffect } from 'react'
import requests from './api/apiClient'
import { useDispatch } from 'react-redux'
import { setCart } from './pages/cart/cartSlice'

export const router = createBrowserRouter(routes)


function App() {
  //const { setCart } = useCartContext();
 const dispatch  = useDispatch();
 useEffect(() => {
    requests.cart
      .getCart()
      .then((cart) => dispatch(setCart(cart)))
      .catch((error) => console.log(error));
  }, []);



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
