import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = ({service}) => {
      const navigate = useNavigate('')
      const {name, img , price} = service
      return (
            <div className=" service-container">
                  <div className="service-image">
                        <img src={img} alt="" />

                  </div>
                  <div className="service-info text-center my-2">
                        <h4>{name}</h4>
                        <h3>${price}</h3>
                        <button onClick={() => navigate('/chackout')} className='primary-btn'>Chackout</button>

                  </div>
            </div>
      );
};

export default Service;