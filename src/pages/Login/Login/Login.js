import React, { useRef } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import loginpic from '../../../picture/6343845.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

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



      // event hendeler 
      const signinForm = (event) => {
            event.preventDefault()
            const email = emailRef.current.value
            const password = passwordRef.current.value
            signInWithEmailAndPassword(email, password)


      }
      // forgate password 
      const forgatePassword = () => {
            const email = emailRef.current.value
            if (email) {
                  sendPasswordResetEmail(email)

            }
            else {
                  alert('enter Your email address')
            }
      }

      if (error) {
            errorMassage = <p className='text-danger'>{error?.message}</p>
      }
      if (user) {
            navigiate('/')
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

                                          <form onClick={signinForm}>

                                                <div className="input-text">
                                                      <input ref={emailRef} type="email" placeholder='Enter your email' name="email" id="" />
                                                      <br />
                                                      <input ref={passwordRef} placeholder='Enter your password' type="password" name="password" id="" />
                                                      <br />
                                                      {errorMassage}
                                                      <input className='primary-btn' type="submit" value="Signin" />
                                                      <p onClick={forgatePassword} className='text-primary mt-1 text-end'>Forgate password?</p>
                                                </div>
                                          </form>
                                          <SocialLogin></SocialLogin>
                                          <p className='clcik-link text-dark mt-2'>Gym Center new member? <span><Link to='/signup'>Please Signup</Link></span></p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;