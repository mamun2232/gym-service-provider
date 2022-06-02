import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyBookin = () => {
      const [mybooking , setMybooking] = useState([])
      const [user] = useAuthState(auth)
      useEffect(()=>{
            const email = user?.email
            if(email){
                  console.log(email);
                  fetch(`http://localhost:5000/mybooking?email=${email}`)
                  .then(res => res.json())
                  .then(data => setMybooking(data))
            }

      },[user])
      console.log(mybooking);
      return (
            <div>
                  <h5>My Booking list</h5>
                  <Table striped bordered hover>
                        <thead>
                              <tr>
                                    <th>No</th>
                                    <th>Service</th>
                                    <th>Price</th>
                                    <th>Phone</th>
                                    <th>remove</th>
                              </tr>
                        </thead>
                        <tbody>
                             {
                                   mybooking.map((book , index) => 
                                    <tr>
                                    <td>{index + 1}</td>
                                    <td>{book.service}</td>
                                    <td>{book.price}</td>
                                    <td>{book.number}</td>
                                    <td><button className='btn btn-primary'>Remove</button></td>
                              </tr>
                                   )
                             }
                            
                              
                        </tbody>
                  </Table>
            </div>
      );
};

export default MyBookin;