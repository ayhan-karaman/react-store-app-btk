/* eslint-disable no-unused-vars */
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CircularProgress, IconButton, Typography } from '@mui/material'
import { data, Link } from 'react-router'
import { currencyTRY } from '../utilities/tools/tools'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import requests from '../api/apiClient'
import { useCartContext } from '../context/CartContext';
import { baseURIs } from '../api/urls';

const ProductCard = ({ product }) => {
    const [loading, setLoading] = useState(false);
    const {setCart } = useCartContext(); 

    const handleAddItem = (productId) =>{
         setLoading(true)
         requests.cart.addItem(productId)
         .then(data => setCart(data))
         .catch(error => console.log(error))
         .finally(() => setLoading(false));
       
    }


    return (
        <Card>
            <CardActionArea component={Link} to={`/products/${product.id}`} >
                <CardMedia sx={{height:160, backgroundSize:'contain'}} image={`${baseURIs.codespace}images/${product.image}`}/>
                <CardContent>
                    <Typography color='primary.dark' variant='h6' component={'h2'} gutterBottom>
                        {product.title}
                    </Typography>
                    <Typography color='primary.dark' variant='body1'>
                        {currencyTRY.format(product.price)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
                <IconButton>
                    {/* <FavoriteIcon /> */}
                    <FavoriteBorderIcon />
                </IconButton>
                <Button onClick={() => handleAddItem(product.id)} >
                    {
                        loading ? <CircularProgress size={'20px'} /> : "Sepete Ekle"
                    }
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard