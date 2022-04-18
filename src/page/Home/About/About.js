import React from 'react';
import jasim from '../../../page/image/jasim.png'
import './About.css'

const About = () => {
  return (
    <div>
      <div className='w-50 mx-auto mb-5 img-container'><img  src={jasim} alt="" /></div>
      <div className='container'>
        <h3>
        Iam jasim
        Now Iam learn Front-end web development. My goal after 5-6 month become
        A full stack  web developer. Then I will join entern or job.I will Try hard work and my best giving this course.
        </h3>
        </div>
    </div>
  );
};

export default About;