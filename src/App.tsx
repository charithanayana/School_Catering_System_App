import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import ParentRegister from './pages/Guardian/guardianRegister';
import DoctorAdmin from './pages/ConsultantPage';
import GuardianAdmin from './pages/Guardian/GuardianHomePage';
import SignIn from './pages/Login';
import SchoolAdmin from './pages/schoolAdministration/SchoolAdmin';
import CateringAdmin from './pages/CateringManagePage';
import BMIdetail from './pages/schoolAdministration/BMIdetail';
import GuardianDetail from './pages/schoolAdministration/GuardianDetail';
import Feedback from './pages/schoolAdministration/Feedback';
import GuardianCardDetail from './pages/Guardian/GuardianCardDetail';
import StudentRegistration from './pages/Guardian/StudentRegistration';

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
          <Route path='/guardian/foodDetail' element={<GuardianCardDetail/>}/>
          <Route path='/guardian/student-register' element={<StudentRegistration/>}/>
          
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
