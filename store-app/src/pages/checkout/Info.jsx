import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import { baseURL } from '../../api/urls';
import { currencyTRY } from '../../utilities/tools/tools';

const Info = () => {
  const { cart } = useSelector((state) => state.shoppingCart);

  const subTotal = cart?.cartItems.reduce((total, item) =>
    total + item.product.price * item.product.quantity, 0);

  const tax = subTotal * 0.2;
  const total = subTotal + tax;

  return (
    <>
      <Typography variant='h6' fontStyle={'italic'} textAlign='center' >Sepetiniz</Typography>
      <List>
        {
          cart?.cartItems.map((item, index) => (
            <ListItem key={index} sx={{ py: 1, px: 0 }}>
              <ListItemAvatar>
                <Avatar variant='square' src={`${baseURL}images/${item.product.image}`} />
              </ListItemAvatar>
              <ListItemText primary={item.product.title} secondary={`X.${item.product.quantity}`} />
              <Typography> {currencyTRY.format(item.product.price)} </Typography>
            </ListItem>
          ))
        }
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, pt:2 }}>
        <Typography variant="h5" fontWeight={'bold'} color={{ color: "text.secondary" }}>
          Toplam:
        </Typography>
        <Typography variant="h5" color={{color:'text.secondary'}} gutterBottom>
          {currencyTRY.format(total)}
        </Typography>
      </Box>
    </>
  )
}

export default Info
