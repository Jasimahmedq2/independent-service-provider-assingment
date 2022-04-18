import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './Googlesingin.css'

const GoogleSingin = () => {
  const navigate = useNavigate()
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
 
  if(user){
    navigate('/home')
  }
  if(loading){
    return <p>loading...</p>
  }
  let errorFind;
  if(error){
  errorFind = <p className='text-center text-danger'>error: {error?.message}</p>
  }
  return (
    <div className='w-50 mx-auto mt-3'>
      <button className='bg-info  style-btn' onClick={() => signInWithGoogle()}>google singup</button>
      {errorFind}
    </div>
  );
};

export default GoogleSingin