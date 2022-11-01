import React, { useEffect, useState } from 'react'

import User from "./user"
import axios from 'axios'



function UserList() {

  const [users, setUsers]=useState([])
  useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>{console.log(res)
                  setUsers(res.data)
                  
              })
      .catch(err=>{console.log(err)})
  },[])
  
console.log(users)

//   const [users, setUsers] = useState([])
//   const getUsers=async()=>{
//       try {
//           const response=await axios.get("https://jsonplaceholder.typicode.com/users")
//           setUsers(response.data)  
//       } catch (error) {
//           console.log(error)
//       }
//       }

//   useEffect(() => {
// getUsers() 
//   }, [])

  return (
    <div>
    <h1>List of Users</h1>
   
    
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
    {users.map(el=><User key={el.id} el={el}/>)}
       


    </div>
    </div>
  )
}

export default UserList