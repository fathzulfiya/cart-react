import React from 'react'
import { Typography } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
    const footer = {
        backgroundColor: 'black',
        padding: '70px',
        color: 'white'
    }
    return (
        <>
            <div style={footer}>
                <div style={{ display: 'flex' }}>
                    <div>
                        <LocalMallIcon sx={{ ml: 15, width: '60px', height: '60px' }} />
                        <Typography variant='h4' fontWeight='bold' sx={{ ml: 10 }}>Naturals</Typography>
                    </div>
                    <div style={{ marginLeft: '160px' }}>
                        <Typography variant='h5' gutterBottom fontWeight='bold'>ABOUT US</Typography>
                        <Typography variant='subtitle1'>Contact us</Typography>
                        <Typography variant='subtitle1'>FAQ</Typography>
                        <Typography variant='subtitle1'>Terms & Conditions</Typography>
                        <Typography variant='subtitle1'>Privacy Policy</Typography>
                    </div>
                    <div style={{ marginLeft: '160px' }}>
                        <Typography variant='h5' gutterBottom fontWeight='bold'>GET IN TOUCH</Typography>
                        <Typography variant='subtitle1' style={{ marginLeft: '80px' }}><FacebookIcon /></Typography>
                        <Typography variant='subtitle1' style={{ marginLeft: '80px' }}><InstagramIcon /></Typography>
                        <Typography variant='subtitle1' style={{ marginLeft: '80px' }}><TelegramIcon /></Typography>
                    </div>
                    <div style={{ marginLeft: '160px' }}>
                        <Typography variant='h5' gutterBottom fontWeight='bold'>MENU</Typography>
                        <Typography variant='subtitle1'>Home</Typography>
                        <Typography variant='subtitle1'>Shop</Typography>
                        <Typography variant='subtitle1'>Blogs</Typography>
                    </div>

                </div>
                <br />
                <hr />
                <br />
                <div >
                    <Typography variant='subtitle1' ><CopyrightIcon sx={{ ml: 60, width: '19px', height: '15px' }} />2022 Copyright:All Rights are Reserved</Typography>
                </div>
            </div>
        </>
    )
}
