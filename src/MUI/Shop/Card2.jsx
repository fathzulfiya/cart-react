import React from 'react';
import pic1 from './pic1.jpg'

const Card2 = (props) => {
  return (
    <>

      {props.details.map((value, index) => (
        <div className='card2' key={index}>
          <div className='card2-image1'>
            <img src={value.img} />
          </div>
          <p className='card2-title1'>{value.title}</p>
          <p className='description1'>{value.description}</p></div>
      ))};
    </>
  );
};

export default Card2;
