import React from 'react';
import picture from '../../../picture/myimage2.jpeg'
import './About.css'

const About = () => {
      return (
            <div className="about-section mt-5">
                 <div className="container">
                 <div className="card bg-light">
                       <div className="row">
                             <div className="col-lg-6">
                             <div className="my-image">
                              <img className='' src={picture} alt="" />
                              
                        </div>

                             </div>
                             <div className="col-lg-6">
                             <div className="my-goal">
                              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae, eos repellat repudiandae dolore commodi incidunt sit dicta, provident minus cumque eveniet odio. At exercitationem nulla autem ipsum in voluptate dolor ducimus, labore et sint corporis consectetur. Nulla cum officiis beatae? Nihil praesentium ut adipisci provident tempore minus, dolorum magni reprehenderit eveniet, repudiandae laboriosam fugit? Explicabo sit quae earum porro voluptatum eius praesentium aspernatur non quia voluptate maxime iure officiis, dolorem nam perferendis tempora vitae maiores necessitatibus? Ut, itaque architecto accusamus non possimus sed reiciendis inventore illum voluptatem, aliquam, perferendis quos! Sunt, fuga beatae! Voluptatum, ea nihil! Excepturi quas ipsam impedit velit totam consequatur quo, tempore amet natus quaerat est sint eligendi asperiores nemo mollitia cumque aliquam aperiam dicta vero cupiditate. Explicabo placeat tenetur laborum aperiam rem eligendi asperiores, quas ipsum quos autem ullam, ea praesentium illum libero atque! Enim alias optio blanditiis totam! Rem praesentium quae, dicta laborum incidunt exercitationem quibusdam illum nesciunt itaque nobis molestiae excepturi impedit iusto odio officia ut qui suscipit veritatis similique libero sed quis alias quam! Exercitationem vero soluta aspernatur nulla laboriosam, reprehenderit, sit consectetur corrupti porro recusandae molestias obcaecati. Repudiandae consequatur quia quibusdam, rerum eveniet velit! Ipsum obcaecati architecto sunt ex, vero repellendus!</span>
                        </div>
                             </div>
                       </div>
                      
                  </div>
                 </div>
            </div>
      );
};

export default About;