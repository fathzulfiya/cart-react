import React from 'react'
import Card from './Card'
import Header from '../Navbar/Header';
import CardData1 from './CardData1';
import { Typography } from '@mui/material';


const ShopNow1 = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='container'>
        <div>
          <Typography variant="h2" gutterBottom textAlign="center">SKINCARE PRODUCTS</Typography>

          <div className='home-cards'>
            <Card details={CardData1} />
          </div>
        </div>

      </div>
    </>
  );
};
export default ShopNow1
