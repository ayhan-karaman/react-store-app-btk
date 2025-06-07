import { createBrowserRouter, RouterProvider } from "react-router";
import { useEffect, useState } from "react";
import requests from "./api/apiClient";
import { getCart} from "./pages/cart/cartSlice";
import { useDispatch } from "react-redux";
import { getUser} from "./pages/account/accountSlice";
import routes from './utilities/routers/router'
import Loading from "./components/Loading";




export const router = createBrowserRouter(routes);

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const initApp = async() => {
      await dispatch(getUser());
      await dispatch(getCart())
  }
  useEffect(() => {
    initApp().then(() => setLoading(false));
   
  }, []);
  if(loading) return <Loading message="Uygulama başlatılıyor..." />
  return <RouterProvider router={router} />;
}

export default App;