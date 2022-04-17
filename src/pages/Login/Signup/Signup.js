import React, { useRef, useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Signup.css'

import signup from '../../../picture/signup.jpg'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';


const Signup = () => {
      // state ------------
      const nameRef = useRef('')
      const emailRef = useRef('')
      const passwordRef = useRef('')
      const confrimPassRef = useRef('')
      const [error1, setError] = useState('')
      const [agree , serAgree] = useState(false)
      console.log(agree);
     
     let errorMassage;

      // hooks ----------
      const [user] = useAuthState(auth)
      const navigate = useNavigate('')
      const [
            createUserWithEmailAndPassword,
            users,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth);

          const [updateProfile, updating, errors] = useUpdateProfile(auth);

      // even Handeler ------------
      const formSubmit = async  (event) =>{
            event.preventDefault()
            const name = nameRef.current.value
            const email = emailRef.current.value
            const password = passwordRef.current.value
            const confrimPass = confrimPassRef.current.value
            console.log(name, email, password, confrimPass);
            if(password !== confrimPass){
                  setError('Your password dont match')
                  return
            }
            setError('')
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name })
            
      }
      // error massage 
      if(error){
            errorMassage = <p className='text-danger'>{error?.message}</p>
      }

      if(user){
            navigate('/')
      }
      

      return (
            <div className="container">
                  <div className="row">
                        <div className="col-lg-6">
                              <div className="login-image">
                                    <img src={signup} alt="" />
                              </div>
                        </div>
                        <div className="col-lg-6">

                              <div className="login-section">

                                    <div className='from-container'>
                                          <h3 className='my-5 text-center' >Signup</h3>

                                          <form onSubmit={formSubmit}>

                                                <div className="input-text">

                                                      <input ref={nameRef} type="text" placeholder='Enter your name' name="email" id="" required />
                                                      <br />
                                                      <input ref={emailRef} type="email" placeholder='Enter your email' name="email" id="" required />
                                                      <br />
                                                      <input ref={passwordRef} placeholder='Enter your password' type="password" name="password" id="" required />
                                                      <br />
                                                      <input ref={confrimPassRef}  placeholder='Enter your confrim password' type="password" name="password" id="" required />
                                                     
                                                      <br />
                                                      {errorMassage || <p className='text-danger'>{error1}</p>}
                                                      <div className=''>
                                                      <input onClick={() => serAgree(!agree)} className='chackbox' type="checkbox" name="" id="" />
                                                       <label className={`px-2 ${agree ? '' : 'text-danger'}`}htmlFor="chackbox">Accept Red onion Terms and Conditions</label>
                                                      </div>
                                                       <br />
                                                     
                                                      <input disabled={!agree} className='btn btn-primary' type="submit" value="Login" />
                                                </div>
                                          </form>
                                          <SocialLogin></SocialLogin>
                                          <p className='text-center text-primary mt-2'>Allready user? <span><Link to='/login'>Please login</Link></span></p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Signup;