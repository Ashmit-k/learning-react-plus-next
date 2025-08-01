import React from 'react';
import Button from '../Button/button';


const Card = ({ title, desc, imageUrl }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{desc}</p>
      <img src={imageUrl} alt={title} style={{ width: '100px', height: '100px' }} />
      <Button/>
    </>
  );
};

export default Card;
