import React from 'react';
import './Footer.css'
import warkpic from '../../../picture/gum.jpg'
import { AiFillRightCircle } from 'react-icons/ai';
const Footer = () => {
      return (
            <div className="footer-section bg-dark mt-5">
                  <div className="container">
                      <div className="row">
                            <div className="col-lg-4">
                                  <div className="subscribe my-3">
                                        <h5 className='text-center'>Subscribe us</h5>
                                        <input type="email" name="" className='form-control' placeholder='Enter Your Email' id="" />
                                       <div className='text-center mt-2'>
                                       <button className='primary-btn'>Get Notified <AiFillRightCircle ></AiFillRightCircle></button>
                                       </div>
                                  </div>
                            </div>
                            <div className="col-lg-4 ">
                                  <div className="opening-time my-3">
                                        <h4 className='text-center'>Opening Hours</h4>
                                        <div className='d-flex justify-content-between px-5'>
                                              <span>Sunday</span> <span>10pm - 10pm</span>
                                        </div>
                                        <div className='d-flex justify-content-between px-5'>
                                              <span>Mondday</span> <span>10Am - 10pm</span>
                                        </div>
                                        <div className='d-flex justify-content-between px-5'>
                                              <span>Wednesday</span> <span>10Am - 10pm</span>
                                        </div>
                                        <div className='d-flex justify-content-between px-5'>
                                              <span>Friday</span> <span>10Am - 10pm</span>
                                        </div>
                                  </div>
                            </div>
                            <div className="col-lg-4 my-3">
                                  <h4 className='text-center'>Recent Wark</h4>
                                <div className='text-center'>
                                <img className='img-fulid rounded' src={warkpic} alt="" />
                                </div>
                            </div>
                            <hr />
                            <div className="footers d-flex justify-content-lg-between">
                                  <div className="px-4">
                                      <p>©Copyright 2022 gym center| All Rights Reserved</p>

                                  </div>
                                  <div className="px-4">
                                        <p>Trems & Conditons API Use Policy Privacy </p>
                                  </div>
                            </div>
                      </div>

                        </div>

                  </div>
          

      );
};

export default Footer;