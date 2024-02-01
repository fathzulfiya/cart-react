import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Selection from './Selection';

export default function Header() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpen = () => {
    setAnchorEl(false);
  };
  //.................
  const box = {

    backgroundColor: "pink",
    padding: "100px",
    height: '400px'

  }
  return (
    <>
      <div>
        <AppBar sx={{ backgroundColor: 'black' }}>

          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >

            </IconButton>
            <LocalMallIcon />
            <Typography variant='h5' sx={{ flexGrow: 1, ml: 3 }}><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Naturals</Link></Typography>

            <Box display='flex'>
              <Typography sx={{ ml: 3, mt: 3 }}><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>HOME</Link></Typography>
              <Typography sx={{ ml: 2, mt: -3.5 }}><Selection /></Typography>
              <Typography sx={{ ml: 3, mt: 3 }}><Link to='/ShopNow' style={{ textDecoration: 'none', color: 'white' }}>SHOP</Link></Typography>
              <Typography sx={{ ml: 3, mt: 3 }}><Link to='/Aboutus' style={{ textDecoration: 'none', color: 'white' }}>ABOUTUS</Link></Typography>


              {auth && (
                <div >
                  <IconButton

                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <div style={{ marginTop: "-1px" }}> <AccountCircle /></div>


                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onOpen={handleOpen}
                  >
                    <MenuItem onClick={handleOpen} ><Button style={{ textDecoration: "none" }}> <Login /></Button></MenuItem>
                    <MenuItem onClick={handleOpen}> <Button style={{ textDecoration: "none" }} ><Signup /></Button></MenuItem>
                  </Menu>
                </div>
              )}
            </Box>
          </Toolbar>
        </AppBar>

      </div>
    </>
  )
}
