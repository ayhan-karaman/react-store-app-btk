/* eslint-disable no-unused-vars */

import { useEffect } from 'react'
import { useParams } from 'react-router';
import ProductItem from '../components/ProductItem';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './cart/cartSlice';
import { fetchProductById, selectProductById } from './catalog/catalogSlice';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { cart, status } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProductById(state, id));
  const { status:loading } = useSelector((state) => state.catalog);

  const cartItem = cart?.cartItems.find(
    (i) => i.product.productId == product?.id
  );

  function handleAddItem(productId) {
    dispatch(addItemToCart({ productId: productId }));
  }

  useEffect(() => {
    if (!product && id) {
      dispatch(fetchProductById(id));
    }
    console.log(id)
  }, [id, product]);


  if (loading === "pendingFetchProductById" || !product)
    return <Loading message="Yükleniyor..." />;

  return <ProductItem product={product} handleAddItem={handleAddItem} loading={status === `addItemToCart${product.id}`}
 cartItem={cartItem} />
}

export default ProductDetailsPage