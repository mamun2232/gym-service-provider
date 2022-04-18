import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Chackout = () => {
      const nameRef = useRef('')
      const emailRef = useRef('')
      const passwordRef = useRef('')
      const confrimPassRef = useRef('')
      const [user] = useAuthState(auth)
      
      return (
            <div className="checkout-section">
                  <div className="container">
                        <div className="login-section bg-light p-5">

                              <div className='from-container'>
                                    <h3 className='my-5 text-center' >Please Provide Chacking Infromation</h3>

                                    <form>

                                          <div className="input-text">

                                                <input ref={nameRef} type="text" placeholder='Enter your name' name="email" id="" required />
                                                <br />
                                                <input ref={emailRef} type="email" placeholder='Enter your email' value={user?.email} readOnly name="email" id="" required />
                                                <br />
                                                <input ref={passwordRef} placeholder='Enter your Address' type="text" name="address" id="" required />
                                                <br />
                                                <input ref={confrimPassRef} placeholder='Enter your Number' type="number" name="address" id="" required />

                                                <br />



                                                <input className='primary-btn' type="submit" value="Chackout" />
                                          </div>
                                    </form>


                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Chackout;