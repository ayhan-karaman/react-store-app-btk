import { createBrowserRouter, RouterProvider } from 'react-router'
import routes from './utilities/routers/router'


export const router = createBrowserRouter(routes)


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
