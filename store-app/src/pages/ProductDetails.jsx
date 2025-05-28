import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ProductItem from '../components/ProductItem';
import Loading from '../components/Loading';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const getByProductById = async () => {
      try {
        const response = await fetch(`https://ominous-couscous-9ww9q9556772wg-5000.app.github.dev/products/${id}`)
        const data = await response.json();
        setProduct(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }



    getByProductById();


  }, [id])

  if(loading) return <Loading message='Yükleniyor...' />
  return <ProductItem product={product} />
}

export default ProductDetailsPage