import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route,} from 'react-router-dom';
import Signin from './Sigin';
import Profile from './Reg_profile';
import Admin_Profile from './Admin_Profile';
import Admin_Addstu from './Admin_Addstudent';
import Admin_Addsub from './Admin_Addsubject';

import Reg_addsubject from './Reg_addsubject';
import Reg_changesubject from './Reg_changesubject';
import Reg_deletesubject from './Reg_deletesubject';
import Confirm_add from './cf_Reg_addsubject';
import Confirm_edit from './cf_Reg_changesubject';
import Confirm_del from './cf_Reg_deletesubject';
import Rest from './Reg_changepasswd';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  if(!user) {
    return <Signin />
  }

  return (
    <div className="wrapper">
        <Routes>
          <Route path="/profile" element={ user.isAdmin ? <Admin_Profile/> :<Profile/> }/>
          <Route path="/addstudent" element={ user.isAdmin ? <Admin_Addstu/> :<Signin/> }/>
          <Route path="/Aaddsubject" element={ user.isAdmin ? <Admin_Addsub/> :<Signin/> }/>


          <Route path='/addsubject' element={<Reg_addsubject/>}/>
          <Route path='/changesection' element={<Reg_changesubject/>}/>
          <Route path='/withdraw' element={<Reg_deletesubject/>}/>
          <Route path='/cfadd' element={<Confirm_add/>}/>
          <Route path='/cfedit' element={<Confirm_edit/>}/>
          <Route path='/cfdel' element={<Confirm_del/>}/>
          <Route path='/logout' element={<Signin/>}/>
          <Route path='/changepassword' element={<Rest/>}/>



        </Routes>
      
    </div>
  );
}

export default App;