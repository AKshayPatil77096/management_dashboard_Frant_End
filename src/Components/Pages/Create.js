import axios from 'axios';
import React from 'react'
import {useForm} from 'react-hook-form';
function Create() {
  const {register,handleSubmit}= useForm();

    function SaveData(data){
      axios.post('http://localhost:5000/users',data);
      alert('Retrive Data')
    }
  return (
    <>
    <br/>
    <div className = 'container'>
  <form onSubmit={handleSubmit(SaveData)} className='mt-5'>
    <h1><center>Personal Information</center></h1>
  <div className="row g-3 align-items-center"/>
   <div className="col-auto">
    <label for="fn" className="col-form-label"><b> First Name -: </b></label>
   </div>
   <div className="col-auto">
    <input type="text" id="fn" className='form-control'
    {...register('name')}/>
  </div>
  <br/> <br/>
  <div className="row g-3 align-items-center"/>
   <div className="col-auto">
    <label for="ln" className="col-form-label"><b> Last Name -: </b></label>
   </div>
   <div className="col-auto">
    <input type="text" id="ln" className='form-control'
    {...register('Last_name')}/>
  </div>
  <br/> <br/>
  <div className="row g-3 align-items-center"/>
   <div className="col-auto">
    <label for="ui" className="col-form-label"><b> Choise Your User_Id -: </b></label>
   </div>
   <div className="col-auto">
    <input type="text" id="ui" className='form-control'
    {...register('user_id')}/>
  </div>
  <br/> <br/>
  <div className="row g-3 align-items-center"/>
   <div className="col-auto">
    <label for="dg" className="col-form-label"><b> Designation -: </b></label>
   </div>
   <div className="col-auto">
    <input type="text" id="dg" className='form-control'
    {...register('desig')}/>
  </div>
  <br/><br/>
  <div className="row g-3 align-items-center"/>
   <div className="col-auto">
    <label for="rl" className="col-form-label"><b> Role -: </b></label>
   </div>
   <div className="col-auto">
    <input type="text" id="rl" className='form-control'
    {...register('role')}/>
  </div>
  <br/><br/>
  <div className="row g-3 align-items-center"/>
   <div className="col-auto">
    <label for="ph" className="col-form-label"><b> Phone Number -: </b></label>
   </div>
   <div className="col-auto">
    <input type="number" id="ph" className='form-control'
    {...register('phone')}/>
  </div>
  <br/><br/>
  <div className="row g-3 align-items-center"/>
   <div className="col-auto">
    <label for="el" className="col-form-label"><b> Email Address -: </b></label>
   </div>
   <div className="col-auto">
  <input type="email" id="el" className='form-control'
  {...register('email')}/>
  </div>
<br/><br/>
  <h1><center>Address Details</center></h1>
  <div className="row g-3 align-items-center"/>
   <div className="col-auto">
    <label for="co" className="col-form-label"><b>Country -: </b></label>
   </div>
   <div className="col-auto">
  <input type="text" id="co" className='form-control'
  {...register('country')}/>
  </div>
 <br/><br/>
 <div className="row g-3 align-items-center"/>
   <div className="col-auto">
    <label for="st" className="col-form-label"><b> Street Address -: </b></label>
   </div>
   <div className="col-auto">
  <input type="text" id="st" className='form-control'
  {...register('st_add')}/>
  </div>
  <br/><br/>
 <div className="row g-3 align-items-center"/>
   <div className="col-auto">
    <label for="pn" className="col-form-label"><b> Pin Code -: </b></label>
   </div>
   <div className="col-auto">
  <input type="number" id="pn" className='form-control'
  {...register('pin')}/>
  </div>
  <br/><br/>
 <div className="row g-3 align-items-center"/>
   <div className="col-auto">
    <label for="cs" className="col-form-label"><b> Mension Your Home City Here. -: </b></label>
   </div>
   <div className="col-auto">
  <input type="text" id="cs" className='form-control'
  {...register('city')}/>
  </div>
  <br/><br/>
   
  <input type='submit' value={'Submit Your Information here.'}/>
  <br/><br/>
  <br/><br/>
  

        

      </form>
    </div>
    </>
  )
}

export default Create;