import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import loginpic from '../../../picture/6343845.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
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

                                          <form>

                                                <div className="input-text">
                                                      <input type="email" placeholder='Enter your email' name="email" id="" />
                                                      <br />
                                                      <input placeholder='Enter your password' type="password" name="password" id="" />
                                                      <br />
                                                      <input type="submit" value="Signin" />
                                                      <p className='text-primary mt-0'>Forgate password?</p>
                                                </div>
                                          </form>
                                          <SocialLogin></SocialLogin>
                                          <p className='text-center text-primary mt-2'>Gum new member? <span><Link to='/signup'>Please Signup</Link></span></p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;