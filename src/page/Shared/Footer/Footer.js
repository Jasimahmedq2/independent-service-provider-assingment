import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div>
    <footer className='footer-container'>
   <h3 className='text-center'>Photographylia</h3>

    <div  className='d-flex justify-content-between mx-5'>
     
        <div> 
           <h4>contact</h4>
           <p>email: some@gmail.com</p>
           <p>phone: 01721111111</p>  
        </div>
        <div className='footer-section-2'>
           <h4>contact with scial media</h4>
           <a href="facebook.com">facebook</a>
           <br />
           <a href="youtube.com">youtube</a>
        </div>
        </div>
        <p className='text-center'>Copyright@</p>
      </footer>
      </div>
   
    
  );
};

export default Footer;