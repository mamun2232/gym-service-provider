import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseAdmin from '../../Hook/UseAdmin';
import Loadding from '../../Utilitis/Loadding/Loadding';

const RequireAdmin = ({children}) => {
      const [user , loading] = useAuthState(auth)
      let location = useLocation();
      const [admin , adminLoading] = UseAdmin(user)

      if(loading){
            return <Loadding></Loadding>
      }
      if (!user) {
            
            return <Navigate to="/login" state={{ from: location }} replace />;
      }
      return children;
};

export default RequireAdmin;