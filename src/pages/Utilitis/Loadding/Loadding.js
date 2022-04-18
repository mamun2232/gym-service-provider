import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loadding = () => {
      return (

            <div style={{ height: '500px' }} className='w-100 d-flex justify-content-center align-items-center'>
                  {/* <Spinner animation="border" variant="info" /> */}
                  <Button variant="info" className='text-white font-weight-bold'>
                        <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                        />
                        Loading.....
                  </Button>

            </div>
      );
};

export default Loadding;