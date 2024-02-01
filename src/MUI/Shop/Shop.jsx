import React from 'react';


const Shop = (props) => {
  return (
    <>

      {props.details.map((value, index) => (
        <div className='card' key={index}>
          <div className='card-image'>
            <img src={value.img} />
          </div>
          <p className='card-title'>{value.title}</p>
          <p className='description'>{value.description}</p></div>
      ))};
    </>
  );
};

export default Shop;
