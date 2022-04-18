import React from 'react';
import notFound from '../../../page/image/2704891.jpg'

const NotFoud = () => {
  return (
    <div>
      <h4 className='text-center text-primary mt-5'>Page not found </h4>
      <img className='w-100 ' src={notFound} alt="" />
    </div>
  );
};

export default NotFoud;