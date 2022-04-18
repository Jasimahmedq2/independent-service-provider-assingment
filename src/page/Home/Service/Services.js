import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css'


const Services = ({service}) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/requerauth')
  }
  const {name, price, about,picture} = service;
  return (
    <div className='col-12 col-md-6 col-lg-4 g-5 bg-body rounded shadow-lg p-3  service-container'>
  <img className=' image-size' src={picture} alt="" />
      <p>{name}</p>
      <p>{about}</p>
      <p>{price}</p>
      <button  onClick={handleNavigate} className='btn btn-primary btn-service'>checkOut</button>
    </div>
  );
};

export default Services;