import { useEffect, useState } from "react";

const UseAdmin = (user) => {
      const [admin , setAdmin] = useState(false)
      const [adminLoading , setAdminLoading] = useState(true)
      useEffect(()=>{
            const email = user?.email
            if(email){
                  fetch(`http://localhost:5000/admin/${email}`)
                  .then(res => res.json())
                  .then(data => {
                        setAdmin(data.admin)
                  setAdminLoading(false)})
            }
      },[admin , adminLoading])

      return [admin , adminLoading]
      
};

export default UseAdmin;