import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import ParentRegister from './pages/ParentRegister';
import DoctorAdmin from './pages/DoctorAdmin';
import GuardianAdmin from './pages/GuardianAdmin';
import SignIn from './pages/Login';
import SchoolAdmin from './pages/schoolAdministration/SchoolAdmin';
import CateringAdmin from './pages/CateringAdmin';
import BMIdetail from './pages/schoolAdministration/BMIdetail';
import GuardianDetail from './pages/schoolAdministration/GuardianDetail';
import Feedback from './pages/schoolAdministration/Feedback';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/doctor" element={<DoctorAdmin/>}/>
          <Route path='/guardian' element={<GuardianAdmin/>}/>
          <Route path='/guardian/register' element={<ParentRegister/>}/>
          <Route path='/cateringAdmin' element={<CateringAdmin/>}/>
          <Route path='/schoolAdmin' element={<SchoolAdmin/>}/>
          <Route path='/schoolAdmin/bmi-detail' element={<BMIdetail/>}/>
          <Route path='/schoolAdmin/guardian-detail' element={<GuardianDetail/>}/>
          <Route path='/schoolAdmin/feedback' element={<Feedback/>}/>
          
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
