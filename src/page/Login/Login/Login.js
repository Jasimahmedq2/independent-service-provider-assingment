import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
 const [  
   signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  
  const handleEmail = event => {
    setEmail(event.target.value);
  }
  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleSubmiteForm = event => {
    event.preventDefault()

    signInWithEmailAndPassword(email, password)
  }
  const navigateRegisterd = () => {
    navigate('/registerd')
  }

  if(user){
     navigate(from, {replace: true})
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
      <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your email'/>
    </div>
    <div className="mb-3">
    <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder='Confirm password'/>
       </div>
       <p className='text-center'>create a new account?  <span className='login-button text-primary'  onClick={navigateRegisterd}>create account</span></p>

      <button className='btn btn-primary'>login</button>

      </div>
      </form>
  
  );
};

export default Login;