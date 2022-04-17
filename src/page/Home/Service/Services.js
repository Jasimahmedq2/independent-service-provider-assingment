import React from 'react';
import { useNavigate, } from 'react-router-dom';

const Services = ({service}) => {
const {name, about, image} = service;
const navigate = useNavigate()
const handleCheckout = () => {
  navigate('/requerauth')
}
  return (
    <div>
      <p>{name}</p>
      <p>{about}</p>
      <img src={image} alt="" />
      <button className='btn btn-primary' onClick={handleCheckout}>
       checkout</button>
    </div>
  );
};

export default Services;