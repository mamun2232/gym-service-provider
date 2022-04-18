import React from 'react';
import notPound from '../../../picture/notFound.jpg'
import'./PageNotFound.css'

const PageNotFound = () => {
      return (
            <div className="page-notFound">
                  <div className="container">
                        <img src={notPound} alt="" />

                  </div>
            </div>
      );
};

export default PageNotFound;