import Navbar from "./Components/Layout/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from "./Components/Pages/User_login/Login";
import Create from "./Components/Pages/Create";
import Forget from "./Components/Pages/Forget";
import Logout from "./Components/Pages/Logout";
import Activity from "./Components/Pages/Activity";
import Profile from "./Components/Pages/Profile";
import Userlist from "./Components/Pages/Userlist";
import Role_access from "./Components/Pages/User_login/Role_access";
function App() {
  return (
     <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path ='/User_login/login' element={<Login/>}/>
      <Route path ='/User_login/create' element={<Create/>}/>
      <Route path ='/User_login/Role_access' element={<Role_access/>}/>
      <Route path ='/Forget' element={<Forget/>}/>
      <Route path ='/Logout' element={<Logout/>}/>
      <Route path ='/User_login/Activity' element={<Activity/>}/>
      <Route path ='/User_login/Profile' element={<Profile/>}/>
      <Route path ='/User_login/Userlist' element={<Userlist/>}/>
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
