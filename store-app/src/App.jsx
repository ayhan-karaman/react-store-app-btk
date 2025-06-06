/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from 'react-router'
import routes from './utilities/routers/router'
import { useEffect } from 'react'
import requests from './api/apiClient'
import { useDispatch } from 'react-redux'
import { setCart } from './pages/cart/cartSlice'
import { logout, setUser } from './pages/account/accountSlice'

export const router = createBrowserRouter(routes)


function App() {
  //const { setCart } = useCartContext();
 const dispatch  = useDispatch();


 useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem('user'))))
    requests.account.getUser()
    .then((user) => {
       console.log(user);
       localStorage.setItem('user', JSON.stringify(user))
       setUser(user)
    })
    .catch(err => {
      console.log(err)
      dispatch(logout())
    });



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
