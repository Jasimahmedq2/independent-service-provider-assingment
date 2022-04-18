import './Home.css'
import banner from '../../../page/image/banner.jpg'
import Services from '../Service/Services';
import { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
const Home = () => {
  const [servicesData, setServicesData] = useState([])

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setServicesData(data))
  },[])

  return (
    <div>
      <img className='w-100 mt-2' src={banner} alt="" />

      <h3 className='text-center mt-5'>my Services:{servicesData.length}</h3>
    
    <div className='row mx-2 mb-5'>
      {
        servicesData.map(service => <Services key={service.id} service={service}></Services>)
      }
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Home;