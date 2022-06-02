import React, { useRef } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import loginpic from '../../../picture/6343845.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loadding from '../../Utilitis/Loadding/Loadding';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../Hook/useToken';

const Login = () => {
      let errorMassage;
      // state ---------
      const emailRef = useRef('')
      const passwordRef = useRef('')
      


      // hooks ----------
      const [
            signInWithEmailAndPassword,
            users,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);
      const [user] = useAuthState(auth)
      const navigiate = useNavigate('')
      const [sendPasswordResetEmail, sending, errors] = useSendPasswordResetEmail(
            auth
      );
      const [token] = useToken(users)
      console.log(token);

      let location = useLocation();
      let from = location.state?.from?.pathname || "/";



      // event hendeler 
      const signinForm = (event) => {
            event.preventDefault()
            const email = emailRef.current.value
            const password = passwordRef.current.value
            signInWithEmailAndPassword(email, password)
    
          


      }
      // forgate password 
      const forgatePassword = async () => {
            const email = emailRef.current.value
            if (email) {
                  await sendPasswordResetEmail(email)
                  toast('Send Email')
                  

            }
            else {
                  toast('Please Provite Email')
            }
      }
            
      if(loading){
        <Loadding></Loadding>
      }

      if (error) {
            errorMassage = <p className='text-danger'>{error?.message}</p>
      }
      if (token) {
            navigiate(from, { replace: true })
      }


      return (
            <div className="container">
                  <div className="row">
                        <div className="col-lg-6">
                              <div className="login-image">
                                    <img src={loginpic} alt="" />
                              </div>
                        </div>
                        <div className="col-lg-6">

                              <div className="login-section">


                                    <div className='from-container'>
                                          <h3 className='my-5 text-center' >login</h3>

                                          <form onSubmit={signinForm}>

                                                <div className="input-text">
                                                      <input ref={emailRef} type="email" placeholder='Enter your email' name="email" id="" />
                                                      <br />
                                                      <input ref={passwordRef} placeholder='Enter your password' type="password" name="password" id="" />
                                                      <br />
                                                      {errorMassage}
                                                      <input className='primary-btn' type="submit" value="Login" />
                                                      <p onClick={forgatePassword} className='text-primary mt-1 text-end forgatepass'>Forgate password?</p>
                                                </div>
                                          </form>
                                          <SocialLogin></SocialLogin>
                                          <p className='clcik-link text-dark mt-2'>Gym Center new member? <span><Link to='/signup'>Please Register</Link></span></p>
                                          <ToastContainer></ToastContainer>
                                          
                                         
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;