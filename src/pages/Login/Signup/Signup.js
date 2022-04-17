import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Signup.css'

import signup from '../../../picture/signup.jpg'
import { Link } from 'react-router-dom';


const Signup = () => {
      return (
            <div className="container">
                  <div className="row">
                        <div className="col-lg-6">
                              <div className="login-image">
                                    <img src={signup} alt="" />
                              </div>
                        </div>
                        <div className="col-lg-6">

                              <div className="login-sections">

                                    <div className='from-container'>
                                          <h3 className='my-5 text-center' >Signup</h3>

                                          <form>

                                                <div className="input-text">

                                                      <input type="text" placeholder='Enter your name' name="email" id="" />
                                                      <br />
                                                      <input type="email" placeholder='Enter your email' name="email" id="" />
                                                      <br />
                                                      <input placeholder='Enter your password' type="password" name="password" id="" />
                                                      <br />
                                                      <input placeholder='Enter your confrim password' type="password" name="password" id="" />
                                                      <br />
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