import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AllUser = () => {
      const [totalUser, setTotaluser] = useState([])
      useEffect(() => {
            fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setTotaluser(data))

      }, [totalUser])

      const adminHeneler = (email) =>{
            console.log(email);
            fetch(`http://localhost:5000/user/admin/${email}` , {
                  method: "PUT" ,
                  headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
                  }
            })
            .then( res => {
                  if(res.status === 403){
                        toast.error("Faild  To Make An Admin")
                  }
            return res.json()
            })
            .then(data => {
                  if(data.modifiedCount > 0){
                        toast.success('Make Admin Successfull!')
                        console.log(data);

             }})
      }
      return (
            <div>
                  <h5>Our All user </h5>
                  <Table striped bordered hover>
                        <thead>
                              <tr>
                                    <th>No</th>
                                    <th>User Email</th>
                                    <th>Make Admin</th>
                                    <th>Remove</th>
                              </tr>
                        </thead>
                        <tbody>
                             {
                                   totalUser.map((user , index) =>
                                
                                    <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.email}</td>
                                    {user.role !== 'admin' ?
                                    <td><button onClick={() => adminHeneler(user.email)} className='btn btn-primary'>Admin</button></td> : <td>
                                          <span className='text-danger'>All Ready Admin</span>
                                    </td>
                                    
                                    }
                                    <td><button className='btn btn-primary'>Remove</button></td>
                                    
                              </tr>
                                   
                                 )
                             }
                             
                        </tbody>
                  </Table>
            </div>
      );
};

export default AllUser;