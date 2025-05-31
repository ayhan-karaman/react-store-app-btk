
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ProductItem from '../components/ProductItem';
import Loading from '../components/Loading';
import requests from '../api/apiClient';
import { useCartContext } from '../context/CartContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addLoading, setAddLoading] = useState(false);
  const {cart, setCart} = useCartContext();
  
  const cartItem = cart?.cartItems.find(c => c.product.productId == product?.id )

  const handleAddItem = (productId) => {
       setAddLoading(true);
       requests.cart.addItem(productId)
       .then((data) =>  setCart(data))
       .catch((error) => console.log(error))
       .finally(() => setAddLoading(false))
  }


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
  return <ProductItem product={product} handleAddItem={handleAddItem} loading={addLoading} cartItem={cartItem} />
}

export default ProductDetailsPage