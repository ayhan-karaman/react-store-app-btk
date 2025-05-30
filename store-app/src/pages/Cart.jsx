/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import requests from "../api/apiClient";
import Loading from "../components/Loading";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { currencyTRY } from "../utilities/tools/tools";
import { Delete  } from '@mui/icons-material'
import { useCartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useCartContext();

  if (!cart || cart.cartItems.length <= 0) return <Typography component='h4' color="warning" gutterBottom >Sepette Ürün Bulunamadı</Typography>
  const handleDeleteItem = () => {
       
  }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth:650}}>
        <TableHead>
          <TableRow>
            <TableCell sx={{width: 100 }}></TableCell>
            <TableCell>Ürün</TableCell>
            <TableCell sx={{ width: 120 }}>Fiyat</TableCell>
            <TableCell sx={{ width: 120 }}>Adet </TableCell>
            <TableCell sx={{ width: 120 }}>Toplam </TableCell>
            <TableCell sx={{ width: 50 }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            cart.cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell> 
                    <img style={{width:'100%'}} src={`http://localhost:5000/images/${item.product.image}`} alt="" />
                </TableCell>
                <TableCell>{item.product.title}</TableCell>
                <TableCell> {currencyTRY.format(item.product.price)} </TableCell>
                <TableCell> {item.product.quantity} </TableCell>
                <TableCell> {currencyTRY.format(item.product.price * item.product.quantity)} </TableCell>
                <TableCell>
                  <IconButton color="error">
                     <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartPage