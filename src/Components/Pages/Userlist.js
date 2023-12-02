import React,{ useEffect, useState} from 'react'
import axios from 'axios'


function Userlist() {
  const [users,setUsers]= useState();
  async function fetchUsers_2(){
    const result_2 = await axios.get('http://localhost:5000/users');
  }

  useEffect(()=>{
    fetchUsers_2();
  },[])
  return (

   <>
   <table className ='table table-striped'>
    <thead>
      <th>Designation</th>
      <th>User Id</th>
      <th>Email Id</th>
      <th>Home State</th>
    </thead>

    <tbody>
      {users.map(record_2=>{
        return(
          <tr>
          <td>{record_2.desig}</td>
          <td>{record_2.user_id}</td>
          <td>{record_2.email}</td>
          <td>{record_2.city}</td>
          </tr>
        )
      })}
      
    </tbody>

   </table>
   </>
  )
}

export default Userlist