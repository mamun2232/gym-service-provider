import React from 'react';
import { useNavigate,} from 'react-router-dom';
import './service.css'
import { BsFillCartCheckFill } from 'react-icons/bs';


const Service = ({service}) => {
      const navigate = useNavigate('')
      

      const {_id, name, img , price , category} = service
      return (
            <div className=" service-container">
                  <div className="service-image">
                        <img src={img} alt="" />

                  </div>
                  <div className="service-info text-center my-3">
                        <h4>{name}</h4>
                        <span className='text-muted my-2'>{category}</span>
                        <h3 className='mt-2'>${price}</h3>
                        <button onClick={() => navigate(`/chackout/${_id}`)} className='primary-btn'>Checkout <BsFillCartCheckFill></BsFillCartCheckFill></button>

                  </div>
            </div>
      );
};

export default Service;