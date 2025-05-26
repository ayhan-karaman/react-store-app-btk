import React from 'react'

const ProductList = ({products}) => {
  return <div> {products.map((product) => product.title) } </div>
  
}

export default ProductList