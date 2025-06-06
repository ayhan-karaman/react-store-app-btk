import MainLayout from '../../layouts/MainLayout'
import LoginPage from '../../pages/account/Login';
import RegisterPage from '../../pages/account/Register';
import CartPage from '../../pages/cart/Cart';
import ErrorPage from '../../pages/errors/Error';
import NotFoundPage from '../../pages/errors/NotFound';
import ServerErrorPage from '../../pages/errors/ServerError';
import HomePage from '../../pages/Home';
import ProductDetailsPage from '../../pages/ProductDetails';
import ProductsPage from '../../pages/Products';

const routes = [

  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      {
        path: 'products',
        children: [
          { index: true, element: <ProductsPage /> },
          { path: ':id', element: <ProductDetailsPage /> }
        ]
      },
      { path: 'cart', element: <CartPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      {
        path: 'errors',
        children: [
          { index: true, element: <ErrorPage /> },
          { path: 'server-error', element: <ServerErrorPage /> },
          { path: 'not-found', element: <NotFoundPage /> },
        ]
      },
      
      { path: '*', element: <NotFoundPage /> }
    ]
  },


]

export default routes;