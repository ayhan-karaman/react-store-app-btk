import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';
import requests from '../api/apiClient';

const ProductsPage = () => {

  const [loadedProducts, setLoadedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {

        const data = await requests.products.list()
        setLoadedProducts(data)

      } catch (error) {
          console.log(error)
      }
      finally{
          setLoading(false)
      }
    }

    getProducts()

  }, [])


  if(loading) return <Loading message='Yükleniyor...' />
  return (
    <ProductList products={loadedProducts} />
  )
}

export default ProductsPage