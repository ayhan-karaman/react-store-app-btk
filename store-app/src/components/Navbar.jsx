/* eslint-disable no-unused-vars */

import { AppBar, Avatar, Badge, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link, NavLink } from 'react-router';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FaceIcon from '@mui/icons-material/Face';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { logout } from '../pages/account/accountSlice';

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
  // const { cart } = useCartContext();



  const { cart } = useSelector((state) => state.shoppingCart);
  const { user } = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const itemCount = cart?.cartItems.reduce((total, item) => total + item.product.quantity, 0)
  return (
    <AppBar position='static' sx={{ backgroundColor: "primary.light" }} >
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
            user ? (
              <Box sx={{ display: 'flex', alignItems: 'center', mr: '3em' }}>
                <Avatar sx={{ color: 'warning.light', mx: '2px', backgroundColor: 'transparent' }}>
                  <FaceIcon />
                </Avatar>
                <Typography variant='body3' >
                  {user.username}
                </Typography>
                <Tooltip title="Logout" arrow>
                  <Button sx={{ ml: '10px' }} onClick={() => dispatch(logout())} color='inherit'>
                    <ExitToAppIcon />
                  </Button>
                </Tooltip>
              </Box>
            ) : (
              <>
                {
                  authLinks.map((link, index) => (
                    <Button key={index} component={NavLink} to={link.to} color='inherit' >
                      {link.title}
                    </Button>
                  ))
                }
              </>
            )
          }


        </Box>
      </Toolbar>
    </AppBar >
  );
}