import React from 'react';
import './SocialLogin.css'
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const SocialLogin = () => {
      return (
            <div className="social-log-in">
                  <div className="social">
                        <div className="social-icon"></div>
                        <p>or</p>
                        <div className="social-icon"></div>
                  </div>
                  <div className="social-login my-3">
                        <div className="socials">

                              <FcGoogle className='google'></FcGoogle>
                              <BsFacebook className='facebook'></BsFacebook>
                              <BsGithub className='github'></BsGithub>

                        </div>
                      

                  </div>
            </div>


      );
};

export default SocialLogin;