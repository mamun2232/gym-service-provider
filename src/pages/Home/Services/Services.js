import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
      const [servicess, setServices] = useState([])
      useEffect(() => {
            fetch('http://localhost:5000/service')
                  .then(res => res.json())
                  .then(data => setServices(data))
      }, [])
      const services = servicess.slice(0 , 6)
      return (
            <div className="  services-section">
                  <div className="container">
                        <h3 className='text-center my-5'>Our Services</h3>
                        <div className="services">
                              {
                                    services.map(service => <Service
                                          key={service.id}
                                          service={service}

                                    >

                                    </Service>)
                              }

                        </div>


                  </div>

            </div>
      );
};

export default Services;