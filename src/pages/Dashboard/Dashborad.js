import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../Hook/UseAdmin';

const Dashborad = () => {
      const navigate = useNavigate()
      const [user] = useAuthState(auth)
      const [admin] = UseAdmin(user)
      return (
            <div className="dashboard-section">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-4">
                                    <div className="dashboard-side-nav">
                                          <h5 onClick={() => navigate('/Dashboard/mybooking')}>My Booking</h5>
                                          <h5 onClick={() => navigate('/Dashboard/review')}>My Review</h5>

                                          {
                                                admin && <h5 onClick={() => navigate('/Dashboard/user')}>All user</h5>
                                          }
                                          

                                    </div>
                              </div>
                              <div className="col-lg-8">
                                    <h2>Welcome Our DashBoard</h2>
                                    <Outlet />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Dashborad;