import React from 'react';
import './service.css'

const Service = ({service}) => {
      const {name, img , price} = service
      return (
            <div className=" service-container">
                  <div className="service-image">
                        <img src={img} alt="" />

                  </div>
                  <div className="service-info text-center my-2">
                        <h4>{name}</h4>
                        <h3>${price}</h3>
                        <button className='btn btn-primary'>Chackout</button>

                  </div>
            </div>
      );
};

export default Service;