import React from 'react'
import pic1 from './pic1.jpg'
import i1 from './i1.jpg'
import i2 from './i2.jpg'
import i3 from './i3.jpg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CardData2 = [
  {
    img: pic1,
    title: 'MAC Lipstick Nude Edition ',
    description: <Box component="span" sx={{ p: 2, ml: 2, border: '0px solid' }}>
      25%discount<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button>

    </Box>
  },

  {
    img: i1,
    title: 'MAC Strobe Cream Shade ',
    description: <Box component="span" sx={{ p: 2, ml: 2, border: '0px solid' }}>
      20%discount<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button>

    </Box>
  },
  {
    img: i2,
    title: 'Lakeme 9to5 Weightless Lipstick ',
    description: <Box component="span" sx={{ p: 2, ml: 2, border: '0px solid' }}>
      35%discount<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button>

    </Box>

  },
  {
    img: i3,
    title: 'LAKEME Eyeconic Liquid ',
    description: <Box component="span" sx={{ p: 2, ml: 2, border: '0px solid' }}>
      30%discount<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button>

    </Box>

  },
];


export default CardData2;
