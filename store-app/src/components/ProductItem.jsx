import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <Grid container spacing={2}>
        <Grid size={{lg:4, md:5, sm:6, xs:12}}>
            <Paper variant='outlined' sx={{p:3}}>
                 <img style={{width:'100%'}} src={`http://localhost:5000/images/${product.image}`} />
            </Paper>
        </Grid>
        <Grid size={{lg:8, md:7, sm:6, xs:12}}>
            <Paper variant='outlined' sx={{p:3}}>
                <Typography component={'h1'} variant='h4' color='primary.dark'>
                    {product.title}
                </Typography>
                <Typography variant='body1'>
                    {product.description}
                </Typography>
            </Paper>
        </Grid>
    </Grid>
  )
}

export default ProductItem