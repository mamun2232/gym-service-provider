import { signOut } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import {useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Footer from '../Footer/Footer';

const Chackout = () => {
      const navigate = useNavigate()
      const nameRef = useRef('')
      const emailRef = useRef('')
      const passwordRef = useRef('')
      const confrimPassRef = useRef('')
      const serviceRef = useRef('')
      const priceRef = useRef('')
      const numberRef = useRef('')
      const addressRef = useRef('')
      const [user] = useAuthState(auth)
      const { id } = useParams()
      console.log(id);

      const [chackout, setChackout] = useState([])
      useEffect(() => {
            fetch(`http://localhost:5000/service/${id}`)
                  .then(res => res.json())
                  .then(data => setChackout(data))
      }, [])

      const fromHendeler = event => {
            event.preventDefault()
            const name = nameRef.current.value
            const email = emailRef.current.value
            const service = serviceRef.current.value
            const price = priceRef.current.value
            const number = numberRef.current.value
            const address = addressRef.current.value
            const booking = {
                  name: name,
                  email: email,
                  service: service,
                  price: price,
                  number: number,
                  address: address,
            }

            console.log(name, email, service, price, number, address);
            fetch('http://localhost:5000/booking', {
                  method: 'POST',
                  body: JSON.stringify(booking),
                  headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
                  },
            })
                  .then((res) => {
                        if(res.status === 401 || res.status === 403){
                              signOut(auth)
                              localStorage.removeItem('AccessToken')
                              navigate('/login')
                        }

                        return res.json()}
                        )
                  .then((data) => {
                        console.log(data);
                        toast.success(data.message)
                        
                  });
      }



      return (
            <div className="checkout-section">
                  <div className="container">
                        <div className="login-section bg-light p-5">

                              <div className='from-container'>
                                    <h3 className='my-5 text-center' >Please Provide Chacking Infromation</h3>
                                    <p>{id}</p>

                                    <form onSubmit={fromHendeler}>

                                          <div className="input-text">

                                                <input ref={nameRef} type="text" value={user?.displayName} name="email" id="" required />
                                                <br />
                                                <input ref={emailRef} type="email" placeholder='Enter your email' value={user?.email} readOnly name="email" id="" required />
                                                <br />
                                                <input ref={serviceRef} type="text" value={chackout?.name} name="email" id="" required />
                                                <br />
                                                <input ref={priceRef} value={chackout?.price} type="text" name="address" id="" required />
                                                <br />
                                                <input ref={numberRef} placeholder='Enter your Number' type="number" name="address" id="" required />
                                                <br />

                                                <input ref={addressRef} placeholder='Enter your Address' type="text" name="address" id="" required />
                                                <br />


                                                <br />



                                                <input className='primary-btn' type="submit" value="Checkout" />
                                          </div>
                                    </form>


                              </div>
                        </div>
                  </div>
                  <Footer></Footer>
            </div>
      );
};

export default Chackout;