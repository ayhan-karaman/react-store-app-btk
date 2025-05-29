import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ProductItem from '../components/ProductItem';
import Loading from '../components/Loading';
import requests from '../api/apiClient';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const getByProductById = async () => {
      try {
        
        const data = await requests.products.details(id);
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