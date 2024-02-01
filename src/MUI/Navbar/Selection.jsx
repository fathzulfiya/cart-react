import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';


export default function Selection() {
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
      <div >
        <Button

          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <div style={{ marginTop: "44px" }}>CATEGORY</div>
        </Button>
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
          <MenuItem value={20} style={{ textDecoration: 'none', color: 'black' }}>
            <Button style={{ textDecoration: 'none', color: 'black' }}><Link to='ShopNow1/' style={{ textDecoration: 'none', color: 'black' }}>SKINCARE PRODUCT</Link></Button></MenuItem>
          <MenuItem value={10} style={{ textDecoration: 'none', color: 'black' }}>
            <Button style={{ textDecoration: 'none', color: 'black' }}><Link to='ShopNow/' style={{ textDecoration: 'none', color: 'black' }}>MAKEUP PRODUCT</Link></Button></MenuItem>
        </Menu>


      </div>
    </>
  )
}
