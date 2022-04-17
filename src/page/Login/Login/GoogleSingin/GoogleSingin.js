import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

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
    <div>
      <button className='btn btn-primary' onClick={() => signInWithGoogle()}>google singup</button>
      {errorFind}
    </div>
  );
};

export default GoogleSingin