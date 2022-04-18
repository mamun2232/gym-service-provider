import React from 'react';
import './Banner.css'
import { AiFillRightCircle } from 'react-icons/ai';
const Banner = () => {
      return (
            <div className="banner-section">
                  <div className="container">
                        <div className="banner-title">
                              <div className="row">
                                    <div className="col-lg-6">
                                          <h1>SHAPE YOUR PARFECT BODY</h1>
                                          <p className='my-3'>A healthy body is needed to have a good mind. And to keep this healthy body healthy all the time you need to exercise regularly.
                                          </p>
                                          <button className='primary-btn'>Explore Now <AiFillRightCircle></AiFillRightCircle></button>
                                    </div>
                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default Banner;