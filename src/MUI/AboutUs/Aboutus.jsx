import React from 'react'
import Typography from '@mui/material/Typography';
import Header from '../Navbar/Header';

export default function Aboutus() {
  const box = {

    backgroundColor: "#FFB9B9",
    padding: "100px",
    height: '700px'

  }
  return (
    <>
      <div><Header /></div>

      <div style={box}>
        <div style={{ backgroundColor: "#F9F3F3", borderRadius: "50px", padding: '40px', display: 'flex' }}>
          <div style={{ margin: '100px 0px 0px 100px' }}>
            <Typography variant='h3' fontWeight='bold' align='center' gutterBottom>Naturals</Typography>

            <div>
              <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto atque nobis veritatis qui eius possimus maxime iste, quas, ipsa dolor iure explicabo assumenda ab, similique repellendus? A adipisci totam nisi!
              </Typography>
            </div>
          </div>
        </div>
      </div>






    </>
  )
}
