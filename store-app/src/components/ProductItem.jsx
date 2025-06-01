
import { Button, CircularProgress, Grid, Paper, Stack, Typography } from '@mui/material'
import { currencyTRY } from '../utilities/tools/tools'
import ReportIcon from '@mui/icons-material/Report';
import { baseURL } from '../api/urls';



const ProductItem = ({product, handleAddItem, loading, cartItem}) => {
  return (
    <Grid container spacing={2}>
        <Grid size={{lg:4, md:5, sm:6, xs:12}}>
            <Paper variant='outlined' sx={{p:3}}>
                 <img style={{width:'100%'}} src={`${baseURL}images/${product.image}`} />
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
                <Typography variant='h5' sx={{mt:3}}>
                     {currencyTRY.format(product.price)}
                </Typography>
                <Stack direction={'row'} display={'flex'} alignItems={'center'} gap={2} sx={{mt:3}} >
                     <Button onClick={() => handleAddItem(product.id)} variant='contained' color='primary' > Sepete Ekle</Button>
                     {
                         cartItem?.product.quantity > 0 && (
                             <Paper  sx={{display:'flex', alignItems:'center'}} variant='body2'>
                                 <ReportIcon color='primary' />
                                 Sepetinize 
                                 <Typography marginX={.7} fontWeight={'bold'}  >{cartItem.product.quantity}</Typography>
                                  adet ürün eklendi.
                             </Paper>
                         )
                     }
                     {
                         loading && <CircularProgress size={'20px'} color='primary' />
                     }
                </Stack>
            </Paper>
        </Grid>
    </Grid>
  )
}

export default ProductItem