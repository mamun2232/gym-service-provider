import React from 'react';
import picture from '../../../picture/myimage2.jpeg'
import Footer from '../Footer/Footer';
import './About.css'

const About = () => {
      return (
            <div className="about-section mt-5">
                 <div className="container">
                    <h4>About Me</h4>   
                 <div className="card bg-light">
                       <div className="row">
                             <div className="col-lg-6">
                             <div className="my-image">
                              <img className='' src={picture} alt="" />
                              
                        </div>

                             </div>
                             <div className="col-lg-6">
                             <div className="my-goal h-100">
                              <span className=''>My name is Jubraj Islam Mamun. I live in Chittagong. I am a student. I studied at Hatazari Government College. I read in BBS. I do programming side by side with reading and listening. My goal is to be a good programmer. That's why I'm working hard all the time. And go. My goal now is to become a web developer in the next 5 months. In sha Allah's grace I will succeed.
</span>
                        </div>
                             </div>
                       </div>
                      
                  </div>
                 </div>
                 <Footer></Footer>
            </div>
      );
};

export default About;