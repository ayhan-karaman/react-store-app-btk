/* eslint-disable no-unused-vars */

import { AppBar, Badge, Box, Button, IconButton, Toolbar } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link, NavLink } from 'react-router';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCartContext } from '../context/CartContext';


const links = [
  { title: "Home", to: '/home' },
  { title: "Products", to: '/products' },
  { title: "Errors", to: '/errors' },
];

const authLinks = [
  { title: "Login", to: '/Login' },
  { title: "Register", to: '/Register' },

]

export default function Navbar() {
const { cart } = useCartContext();
const itemCount = cart?.cartItems.reduce((total, item) => total + item.product.quantity,0)
  return (
    <AppBar position='static' sx={{backgroundColor:"primary.light"}} >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <IconButton color='inherit' component={NavLink} to="/">
            <StorefrontIcon />
          </IconButton>
          {
            links.map((link, index) => (
              <Button key={index} component={NavLink} to={link.to} color='inherit' >
                {link.title}
              </Button>
            ))
          }
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton 
          color='inherit'
          size='large'
          component={Link}
          to="/cart"
          edge="start"
          
          >
            <Badge color='primary' badgeContent={itemCount}>
              <ShoppingBagIcon />
            </Badge>
          </IconButton>
          {
            authLinks.map((link, index) => (
              <Button key={index} component={NavLink} to={link.to} color='inherit' >
                {link.title}
              </Button>
            ))
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
}