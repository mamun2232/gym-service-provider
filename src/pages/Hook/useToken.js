import { EmailAuthCredential } from "firebase/auth";
import { useEffect, useState } from "react";


const useToken = (user) => {
      const [token, setToken] = useState('')
      
     
     useEffect(()=>{
      const email = user?.user?.email
      const carrentUser = email
      if (email) {
            fetch(`http://localhost:5000/user/${email}` , {
                  method: 'PUT',
                  body: JSON.stringify({
                       carrentUser
                  }),
                  headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                  },
            })
                  .then((response) => response.json())
                  .then((data) => {
                        const accessToken = data.token
                              setToken(token)
                              localStorage.setItem('AccessToken' , accessToken)
                  
                        
                       }
                        );
      }
     },[user])

      return [token]

};

export default useToken;