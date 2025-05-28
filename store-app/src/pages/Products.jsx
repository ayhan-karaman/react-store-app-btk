import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';

const ProductsPage = () => {

  const [loadedProducts, setLoadedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {

        const response = await fetch('https://ominous-couscous-9ww9q9556772wg-5000.app.github.dev/products');
        const data = await response.json();
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