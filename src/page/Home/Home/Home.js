import React, { useEffect, useState } from 'react';
import './Home.css'
import banner from '../../../page/image/soccer-fans-sitting-row-taking-selfie-bar (1).jpg'
import Services from '../Service/Services';

const Home = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div>
      <img className='w-100 mt-2' src={banner} alt="" />

      <h3 className='text-center mt-5'>my Services: {services.length} </h3>

     <div className='services-container container'>
     {
        services.map(service => <Services key={service.id}
        service={service}
        ></Services>)
      }
     </div>

    </div>
  );
};

export default Home;