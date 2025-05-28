import { Grid } from '@mui/material'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {
        products.map((product) => (
          <Grid sx={{backgroundColor:'primary.light'}} key={product.id} size={{ xs: 6, md: 4, lg: 3 }} >
             <ProductCard product={product} />
          </Grid>
        ))
      }
    </Grid>
  )

}

export default ProductList