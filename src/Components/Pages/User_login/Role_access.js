import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Role_access() {
  const [users, setUsers] =useState([]);

  async function fetchUsers(){
    const result = await axios.get('http://localhost:5000/users');
    setUsers(result.data);
  }
  useEffect(()=>{
    fetchUsers();
  },[])

  return (
    <>
    <table className="table table-striped">
     <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Role</th>
      </tr>
     </thead>
     <tbody>
      {
        users.map(record=>{
          return(
            <tr>
              <td>{record.name}</td>
              <td>{record.Last_name}</td>
              <td>{record.role}</td>

            </tr>
          )
        })}
     </tbody>
     </table>
    </>
  )
}

export default Role_access;