import * as React from 'react';
import s1 from './s1.jpeg'
import s2 from './s2.jpeg'
import s3 from './s3.jpeg'
import s4 from './s4.jpeg'
import s5 from './s5.jpeg'
import s6 from './sk6.jpeg'
import s7 from './s7.jpeg'
import pic8 from './pic8.jpeg'
import pic9 from './pic9.jpeg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react'
import Rating from '@mui/material/Rating';
import ReplyIcon from '@mui/icons-material/Reply';













const CardData1 = [
  {
    img: s4,
    title: 'TJORI Women Face Serum',
    description:
      <>
        <div>
          <Box component="span" sx={{ p: 2, border: '2px solid' }}>
            ₹649<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>
          <ShoppingCartIcon sx={{ ml: 2, mt: 4 }} />
          <ReplyIcon />
        </div>
      </>

  },

  {
    img: s2,
    title: 'WOW AloeVera face cream',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1500<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>
        <ShoppingCartIcon sx={{ ml: 2, mt: 4 }} />
        <ReplyIcon />
      </div>
    </>
  },
  {
    img: s3,
    title: 'WOW AloeVera facewash',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1500<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>
        <ShoppingCartIcon sx={{ ml: 2, mt: 4 }} />
        <ReplyIcon />
      </div>
    </>

  },
  {
    img: s6,
    title: 'caffeine',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1500<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>
        <ShoppingCartIcon sx={{ ml: 2, mt: 4 }} />
        <ReplyIcon />
      </div>
    </>
  },
  {
    img: s1,
    title: 'mamaearth vitamin C',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1500<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>
        <ShoppingCartIcon sx={{ ml: 2, mt: 4 }} />
        <ReplyIcon />
      </div>
    </>
  },
  {
    img: s6,
    title: 'caffeine',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1500<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>
        <ShoppingCartIcon sx={{ ml: 2, mt: 4 }} />
        <ReplyIcon />
      </div>
    </>
  },
  {
    img: s2,
    title: 'WOW AloeVera face cream',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1500<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>
        <ShoppingCartIcon sx={{ ml: 2, mt: 4 }} />
        <ReplyIcon />
      </div>
    </>


  },
  {
    img: s1,
    title: 'mamaearth vitamin C ',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1500<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>
        <ShoppingCartIcon sx={{ ml: 2, mt: 4 }} />
        <ReplyIcon />
      </div>
    </>
  },
  {
    img: s5,
    title: 'COFFEE COCUNUT SCRUB',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1500<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>
        <ShoppingCartIcon sx={{ ml: 2, mt: 4 }} />
        <ReplyIcon />
      </div>

    </>
  },

];

export default CardData1;
