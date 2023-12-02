import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Profile() {
  const[users, setUsers]= useState([]);

  async function fetchUsers_4(){
    const result_4 = await axios.get('http://localhost:5000/users')
    setUsers(result_4.data);

  }

  useEffect(()=>{
    fetchUsers_4();
  },[])
  return (
    <>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>User_Id</th>
          <th>Designation</th>
          <th>Role</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Country</th>
          <th>Street Address</th>
          <th>Pin Code</th>
          <th>Home City</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(record_4=>{
            return (
              <tr>
                <td>{record_4.name}</td>
                <td>{record_4.Last_name}</td>
                <td>{record_4.user_id}</td>
                <td>{record_4.desig}</td>
                <td>{record_4.role}</td>
                <td>{record_4.phone}</td>
                <td>{record_4.email}</td>
                <td>{record_4.country}</td>
                <td>{record_4.st_add}</td>
                <td>{record_4.pin}</td>
                <td>{record_4.city}</td>
              </tr>
            )
          })
        }
      </tbody>

    </table>
    </>
  )
}

export default Profile