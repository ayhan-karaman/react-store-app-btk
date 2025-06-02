/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchAllProducts, selectAllProducts } from './catalog/catalogSlice';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const loadedProducts = useSelector(selectAllProducts)
  const { status, isLoading } = useSelector(state => state.catalog)

  useEffect(() => {
     if(!isLoading)
       dispatch(fetchAllProducts())
  }, [isLoading])


  if(status === "pendingFetchProducts") return <Loading message='Yükleniyor...' />
  return (
    <ProductList products={loadedProducts} />
  )
}

export default ProductsPage