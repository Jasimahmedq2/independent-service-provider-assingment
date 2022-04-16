import React from 'react';
import './Home.css'
import banner from '../../../page/image/soccer-fans-sitting-row-taking-selfie-bar (1).jpg'

const Home = () => {
  return (
    <div>
      <img className='w-100 mt-2' src={banner} alt="" />

      <h3 className='text-center mt-5'>Our Services</h3>
    </div>
  );
};

export default Home;