import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
      const [services, setServices] = useState([])
      useEffect(() => {
            fetch('data.json')
                  .then(res => res.json())
                  .then(data => setServices(data))
      }, [])
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