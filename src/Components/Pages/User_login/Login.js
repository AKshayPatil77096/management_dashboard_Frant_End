import React from 'react'
import { useForm } from 'react-hook-form';

function Login(){
  const{register,handleSubmit } = useForm()

    function saveData(data){
      alert(data);

    }
  return (
  
    <>
    <form onSubmit={handleSubmit(saveData)} className='mt-5'>    
    <br/>
    <br/>
    <h1><center>Login Here</center></h1>
     <div className='Container'>
  <form>  
    <br/><br/>
  <div className="row g-3 align-items-center">
   <div className="col-auto">
    <label for="User" className="col-form-label"><b> UserName -: </b></label>
   </div>
   <div className="col-auto">
    <input type="text" id="User" className="form-control" 
    {...register('username')}/>
  </div>
</div>
<br/><br/>
<div className="row g-3 align-items-center">
  <div className="col-auto">
    <label for="inputPassword6" className="col-form-label"><b> Password -: </b></label>
  </div>
  <div className="col-auto">
  <input type="password" id="inputPassword6" className="form-control"
  {...register('password')}/>
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>

<br/><br/>

<input type='submit' value={'Click here for Login'}/>
       </form>
     </div>
    <div>
      <h1><center>Don't Have an Account</center></h1>
    </div>
  </form>

    </>
  )
}

export default Login;