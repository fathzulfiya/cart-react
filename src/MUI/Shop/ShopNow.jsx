import React from 'react'
import Card from './Card'
import CardData from './CardData';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../Navbar/Header';
import Typography from '@mui/material/Typography';


const ShopNow = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='container' >
        <div>
          <Typography variant="h2" gutterBottom textAlign="center"> GLOW WITH ME</Typography>

          <div className='home-cards'>
            <Card details={CardData} />
          </div>
        </div>

      </div>
    </>
  );
};
export default ShopNow
