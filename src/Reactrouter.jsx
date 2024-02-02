
import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Aboutus from './MUI/AboutUs/Aboutus';
import DiscountView from './MUI/DiscountView/DiscountView';
import Home from './MUI/HomePage/Home';
import ProductContext from './MUI/HomePage/ProductContext';
import Login from './MUI/Login/Login';
import Header from './MUI/Navbar/Header'
import Selection from './MUI/Navbar/Selection';
import Card from './MUI/Shop/Card';
import Card2 from './MUI/Shop/Card2';
import CardData from './MUI/Shop/CardData';
import CardData1 from './MUI/Shop/CardData1';
import CardData2 from './MUI/Shop/CardData2';
import Shop from './MUI/Shop/Shop';
import ShopNow from './MUI/Shop/ShopNow';
import ShopNow1 from './MUI/Shop/ShopNow1';


import Signup from './MUI/Signup/Signup';
import { Register } from './Register';


export default function Reactrouter() {
  return (
    <>
      <div>
        <HashRouter>
          <Routes>

            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/navbar' element={<Header />}></Route>
            <Route exact path='/Login' element={< Login />}></Route>
            <Route exact path='/Signup' element={< Signup />}></Route>
            <Route exact path='/Shop' element={< Shop />}></Route>
            <Route exact path='/Card' element={< Card />}></Route>
            <Route exact path='/ShopNow' element={< ShopNow />}></Route>
            <Route exact path='/ShopNow1' element={< ShopNow1 />}></Route>
            <Route exact path='/CardData' element={< CardData />}></Route>
            <Route exact path='/Selection' element={< Selection />}></Route>
            <Route exact path='/CardData1' element={< CardData1 />}></Route>
            <Route exact path='/DiscountView' element={< DiscountView />}></Route>
            <Route exact path='/Aboutus' element={< Aboutus />}></Route>
            <Route exact path='/ProductContext' element={< ProductContext />}></Route>
            <Route exact path='/Card2' element={<Card2 />}></Route>
            <Route exact path='/CardData2' element={<CardData2 />}></Route>

          </Routes>
        </HashRouter>
      </div>
    </>
  )
}
