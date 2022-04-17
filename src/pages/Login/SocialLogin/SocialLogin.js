import React from 'react';
import './SocialLogin.css'
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
      // hooks .............
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
      const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);

      // event hendeler ...............
                             
      

      return (
            <div className="social-log-in">
                  <div className="social">
                        <div className="social-icon"></div>
                        <p>or</p>
                        <div className="social-icon"></div>
                  </div>
                  <div className="social-login my-3">
                        <div className="socials">

                              <FcGoogle onClick={()=> signInWithGoogle()} className='google'></FcGoogle>
                              <BsFacebook onClick={() => signInWithFacebook()} className='facebook'></BsFacebook>
                              <BsGithub onClick={() => signInWithGithub() } className='github'></BsGithub>

                        </div>
                      

                  </div>
            </div>


      );
};

export default SocialLogin;