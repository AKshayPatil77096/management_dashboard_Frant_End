import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Activity() {
  const [users, setUsers]= useState([]);

  async function fetchUsers_1(){
    const result_1 = await axios.get('http://localhost:5000/users');
    setUsers(result_1.data);
    
  }

  useEffect(()=>{
    fetchUsers_1();
  },[])
  return (
   
    <>
    <table className ="table table-striped">
      <thead>
        <tr>
          <th>Designation</th>
          <th>User Id</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(record_1=>{
            return(
              <tr>
                <td>{record_1.desig}</td>
                <td>{record_1.user_id}</td>
                <td>{record_1.role}</td>
              </tr>
            )
          }

          )
        }
      </tbody>
    </table>
   
    </>
  )
}

export default Activity