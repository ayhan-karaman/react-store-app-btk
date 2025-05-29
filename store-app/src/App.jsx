import { createBrowserRouter, RouterProvider } from 'react-router'
import routes from './utilities/routers/router'
import { useEffect } from 'react'
import requests from './api/apiClient'


export const router = createBrowserRouter(routes)


function App() {
 useEffect(() =>{
  requests.carts.getCart()
  .then((cart) => console.log(cart))
  .catch(error => console.log(error))
 },[])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
