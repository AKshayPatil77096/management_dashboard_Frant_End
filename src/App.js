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
function App() {
  return (
     <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path ='/User_login/login' element={<Login/>}/>
      <Route path ='/User_login/create' element={<Create/>}/>
      <Route path ='/Forget' element={<Forget/>}/>
      <Route path ='/Logout' element={<Logout/>}/>
      <Route path ='/Activity' element={<Activity/>}/>
      <Route path ='/Profile' element={<Profile/>}/>
      <Route path ='/Userlist' element={<Userlist/>}/>
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
