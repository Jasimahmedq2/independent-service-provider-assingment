import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Registerd.css'

const Registerd = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error, 
  ] = useCreateUserWithEmailAndPassword(auth);

  
  const handleEmail = event => {
    setEmail(event.target.value);
  }
  const handlePassword = event => {
    setPassword(event.target.value)
  }
const handleName = event => {
  setName(event.target.value)
}
  const handleSubmiteForm = event => {
    event.preventDefault()

    createUserWithEmailAndPassword(email, password)
  }

  const handleLogin = () => {
    navigate('/login')
  }
  
  let errorElement; 
 if(error){
   errorElement = <p className='text-danger text-center'>error: {error?.message}</p>
 }
  return (

    <form onSubmit={handleSubmiteForm}>
      {errorElement}
     
      <div className='w-50 mx-auto mt-5'>
      <div className="mb-3">
       
       <input onBlur={handleName} type="password" className="form-control" id="exampleInputPassword1" placeholder='enter your name'/>
       </div>
      <div className="mb-3">
      <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your email'/>
    </div>
    <div className="mb-3">
       
      <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder='password'/>
      </div>
      
       <p>already have a account? <span className='registerd-btn text-danger' onClick={handleLogin}>log in</span></p>
      <button className='btn btn-primary'>Login</button>
      </div>
      </form>
  
  );
};
export default Registerd