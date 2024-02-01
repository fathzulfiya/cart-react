import React from 'react'
import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'
import p11 from './p11.jpg'
import p10 from './p10.jpg'
import p1 from './p1.jpg'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CardData2 from '../Shop/CardData2';
import Card2 from '../Shop/Card2';
import '/forever18/src/App.css';

export default function Home() {
 
  const box2 = {
    backgroundImage: `url(${p11})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "300px",
    paddingBottom: "300px",
   }
  const box3 = {
    backgroundImage: `url(${p10})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "100px"

  }


  return (
    <>
      <div className='responsive'>

        <div>
          <Header />
        </div>
        <div style={box2}>
          <div style={{ marginLeft: "800px" }}>
            <Typography variant='h5' >LUXURY COSMETIC</Typography>
            <h1>THE BEST SKINCARE ESSENTIALS</h1>
            <Button variant="outlined" style={{ backgroundColor: "pink", color: "white", textDecoration: "none" }}><Link to='/ShopNow' style={{ textDecoration: 'none', color: 'black' }}>SHOP NOW</Link></Button>
          </div>
        </div>
        <div style={box3} >
          <div >
            <Typography variant='h4' sx={{ textAlign: "center", color: "black", mb: 11 }}>We care about your beauty and offer only
              natural and tested products</Typography>

          </div>
          <Button variant="outlined" style={{ border: "3px solid black", color: "black", marginTop: '300px', marginLeft: "500px" }} ><Link to='/ShopNow' style={{ textDecoration: 'none', color: 'black' }}>SHOP NOW</Link></Button>
        </div>
        <div style={{ backgroundColor: "#F9F3F3" }}>
          <div className='home1-cards1'><Card2 details={CardData2} /></div>
        </div>
        <div>
          <Footer />
        </div>
      </div>

    </>
  )
}
