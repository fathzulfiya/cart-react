import React from 'react'
import pic1 from './pic1.jpg'
import i1 from './i1.jpg'
import i2 from './i2.jpg'
import i3 from './i3.jpg'
import i4 from './i4.jpg'
import i7 from './i7.jpg'
import pic3 from './pic3.jpeg'
import pic4 from './pic4.jpeg'
import pic5 from './pic5.jpeg'
import pic6 from './pic6.jpeg'
import pic7 from './pic7.jpeg'
import pic8 from './pic8.jpeg'
import pic9 from './pic9.jpeg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReplyIcon from '@mui/icons-material/Reply';





const CardData = [
  {
    img: pic1,
    title: 'MAC Lipstick Nude Edition h-U-A Quality Long Lasting Beauty Lipstick',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1800<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>

      </div>
    </>
  },

  {
    img: i1,
    title: 'MAC Strobe Cream Shade name: Goldlite Disclaimer',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1510<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>

      </div>
    </>
  },
  {
    img: i2,
    title: 'Cetaphil Restoraderm Skin Restoring Body Moisturizer',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1570<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>

      </div>
    </>

  },
  {
    img: pic4,
    title: 'Sebamed Active moisturizing complex supports the Natural Moisturizing Factors of our skin ',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1570<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>

      </div>
    </>

  },
  {
    img: pic5,
    title: 'LAKMÉ MOISTURE PEACH MILK MOISTURIZER - 200ML',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1600<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>

      </div>
    </>
  },
  {
    img: pic6,
    title: 'Ponds SUITABLE FOR WHICH SKIN TYPE Ideal for all skin types',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1030<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>

      </div>
    </>
  },
  {
    img: i3,
    title: 'Neutrogena The Neutrogena bright boost gel cream will give you a brighter more even-toned skin in just 1 week ',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1540<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>

      </div>
    </>
  },
  {
    img: pic7,
    title: 'Neutrogena Dual-action exfoliation Dual. ',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1340<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>

      </div>
    </>
  },
  {
    img: pic9,
    title: 'Lakeme Lipbalm Get soft lips ',
    description: <>
      <div>
        <Box component="span" sx={{ p: 2, border: '2px solid' }}>
          ₹1400<Button variant="contained" style={{ marginLeft: '20px', padding: '2px' }} color='primary'> BUY</Button></Box>

      </div>
    </>
  }
];


export default CardData;
