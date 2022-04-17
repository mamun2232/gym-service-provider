import React, { useRef, useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Signup.css'

import signup from '../../../picture/signup.jpg'
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Signup = () => {
      const nameRef = useRef('')
      const emailRef = useRef('')
      const passwordRef = useRef('')
      const confrimPassRef = useRef('')
      const [error1, setError] = useState('')
      let errorMassage;
      const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth);

      const formSubmit = (event) =>{
            event.preventDefault()
            const name = nameRef.current.value
            const email = emailRef.current.value
            const password = passwordRef.current.value
            const confrimPass = confrimPassRef.current.value
            console.log(name, email, password, confrimPass);
            if(password !== confrimPass){
                  setError('Your Password Dont Match')
                  return
            }
            setError('')
            createUserWithEmailAndPassword(email, password)
            
      }
      // error massage 
      if(error){
            errorMassage = <p className='text-danger'>{error?.message}</p>
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

                                                      <input ref={nameRef} type="text" placeholder='Enter your name' name="email" id="" />
                                                      <br />
                                                      <input ref={emailRef} type="email" placeholder='Enter your email' name="email" id="" />
                                                      <br />
                                                      <input ref={passwordRef} placeholder='Enter your password' type="password" name="password" id="" />
                                                      <br />
                                                      <input ref={confrimPassRef}  placeholder='Enter your confrim password' type="password" name="password" id="" />
                                                     
                                                      <br />
                                                      {errorMassage || <p className='text-danger'>{error1}</p>}
                                                      <div className=''>
                                                      <input className='chackbox' type="checkbox" name="" id="" />
                                                       <label className='mx-2' htmlFor="chackbox">Accept Red onion Terms and Conditions</label>
                                                      </div>
                                                       <br />
                                                     
                                                      <input className='' type="submit" value="Login" />
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