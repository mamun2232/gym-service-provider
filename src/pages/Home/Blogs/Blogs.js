import React from 'react';
import { Accordion } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Blogs.css'

const Blogs = () => {
      return (
            <div className="blog-section mt-5">
                  <div className="container">
                        <h4>Ouer Blogs Question</h4>
                        <Accordion defaultActiveKey="0">
                              <Accordion.Item eventKey="0">
                                    <Accordion.Header>Authentication or Authorization পার্থক্য কি?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                          <span className='
                                          '>Authentication এমন একটি সিষ্টেম অথবা পোগ্রাম যার মাধ্যমে ইউজারকে ভেরিফাই করা যায়। অর্থাৎ কাউকে, কোনো কিছু, কারো কোনো তথ্য,যা সঠিক বলে দাবী করা হচ্ছে প্রকৃতিপক্ষে তা সত্য কিনা নির্ণয় করার প্রক্রিয়া।</span>
                                          <span>এটি করার ফলে ইউজার ওয়েব সাইটে থাকা রিসোস খুব সহজে এক্সসেপ্ট করতে পারে। রিড করতে পারে।</span>
                                          <span>Authorization এর মাধ্যমে কাউকে কোনো কাজ করার জন্য বা কোনো resource ব্যবহার করতে পারার permission দেওয়ার প্রক্রিয়া। এই parmision দেওয়া ফলে একজন ইউজার ওয়েভ সাইয়ের সব তর্থ্য দেখতে পারবে যা সমাধান ইউজার থাকা অবস্থায় দেখা অসম্ভব।</span>





                                    </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="1">
                                    <Accordion.Header>firebase কেন ব্যবহার করবো? এর বিকল্প কি কি রয়েছে?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                          <span>  google firebase আমরা নানা কারণে ব্যবহার করতে পারি। তার মধ্যে একটি হলো ইউজার Authentication. এটির ফলে ইউজার কে ভেরিফাই করা যায় খুব সহজে। ফলে ইউজার এর ইমেল firebase এ জমা থাকে। পরবর্তীতে কোনো কারণে সেই ইউজার কে ওয়েব সাইট থেকে ডিলেট রিমুভ ও করা যায়।</span>
                                          <span>firebase er বিকল্প গুলো হলোঃ</span>
                                          <li>Mongo DB</li>
                                          <li>AuthO</li>
                                          <li>Okta</li>






                                    </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="3">
                                    <Accordion.Header>Authentication ছাড়া ফাইয়ারবেস এ কি কি করা যায়?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                          <span>authentication ছাড়াও ফাইয়ারবেসে আরো বিশেষ বিশেষ কাজ করা যায়।
                                                তা মধ্যে হলোঃ</span>
                                          <li>firestore database</li>
                                          <span>এখানে আমরা ইউজার এর ইনফরমেশন গুলো সেইভ করে রাখতে পারি।</span>
                                          <li>firebase hosting</li>
                                          <span>ফাইয়ারবেস এ হোস্টিং করা যায়।</span>
                                          <li>firebase storage</li>
                                          <span>ডাটা সেইভ করা হয়।</span>

                                    </Accordion.Body>
                              </Accordion.Item>
                        </Accordion>
                  </div>
                  <Footer></Footer>
            </div>
      );
};

export default Blogs;