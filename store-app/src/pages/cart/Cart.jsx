/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import requests from "../../api/apiClient";
import Loading from "../../components/Loading";
import { Box, Button, CircularProgress, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { currencyTRY } from "../../utilities/tools/tools";
import { Delete } from '@mui/icons-material'
import { useCartContext } from "../../context/CartContext";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { baseURL } from "../../api/urls";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, deleteItemFromCart, setCart } from "./cartSlice";
import { Link } from "react-router";




const CartPage = () => {
  const { cart, status } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();



  const subTotal = cart?.cartItems.reduce((total, item) =>
    total + item.product.price * item.product.quantity, 0);

  const tax = subTotal * 0.2;
  const total = subTotal + tax;

  if (!cart || cart.cartItems.length <= 0) return <Typography component='h4' color="warning" gutterBottom >Sepette Ürün Bulunamadı</Typography>

  const handleAddItem = (productId) => {
    dispatch(addItemToCart({ productId: productId }))
  }
  const handleDeleteItem = (productId, key, quantity = 1) => {
    dispatch(deleteItemFromCart({ productId: productId, quantity: quantity, key: key }))

  }



  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 100 }}></TableCell>
              <TableCell>Ürün</TableCell>
              <TableCell sx={{ width: 120 }}>Fiyat</TableCell>
              <TableCell sx={{ width: 170 }}>Adet </TableCell>
              <TableCell sx={{ width: 120 }}>Toplam </TableCell>
              <TableCell sx={{ width: 50 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              cart.cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img style={{ width: '100%' }} src={`${baseURL}images/${item.product.image}`} alt="" />
                  </TableCell>
                  <TableCell>{item.product.title}</TableCell>
                  <TableCell> {currencyTRY.format(item.product.price)} </TableCell>
                  <TableCell>
                    <Button onClick={() => handleDeleteItem(item.product.productId, "single")} color="primary">
                      {
                        status === "pendingDeleteItem" + item.product.productId + "single"
                          ? (<CircularProgress size={"20px"} />)
                          : (<RemoveCircleOutlineIcon />)
                      }
                    </Button>
                    {item.product.quantity}
                    <Button color="primary" onClick={() => handleAddItem(item.product.productId)}>
                      {
                        status === "pendingAddItem" + item.product.productId
                          ? (<CircularProgress size={"20px"} />)
                          : (<AddCircleOutlineIcon />)
                      }
                    </Button>
                  </TableCell>
                  <TableCell> {currencyTRY.format(item.product.price * item.product.quantity)} </TableCell>
                  <TableCell>
                    <Button onClick={() => handleDeleteItem(item.product.productId, "all", item.product.quantity)} color="error">
                      {
                        status === "pendingDeleteItem" + item.product.productId + "all"
                          ? (<CircularProgress color="error" size={"20px"} />)
                          : (<Delete />)
                      }
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            }
            <TableRow>
              <TableCell align="right" colSpan={5}>
                Ara Toplam:
              </TableCell>
              <TableCell>{currencyTRY.format(subTotal)} </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" colSpan={5}>
                Vergi:
              </TableCell>
              <TableCell>{currencyTRY.format(tax)} </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" colSpan={5}>
                Toplam:
              </TableCell>
              <TableCell>{currencyTRY.format(total)} </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{display:'flex', justifyContent:'space-between', my:3 }}>
          <Button 
           component={Link} to='/products' 
           variant="contained"
           color="primary"
          >
              Alış verişe devam et
          </Button>
          <Button 
           component={Link} to='/checkout' 
           variant="contained"
           color="secondary"
          >
              Sepeti Onayla
          </Button>
      </Box>
    </>
  )
}

export default CartPage