import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import ParentRegister from './pages/ParentRegister';
import DoctorAdmin from './pages/DoctorAdmin';
import GuardianAdmin from './pages/GuardianAdmin';
import SignIn from './pages/Login';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/doctor" element={<DoctorAdmin/>}/>
          <Route path='/guardian' element={<GuardianAdmin/>}/>
          <Route path='/guardian/register' element={<ParentRegister/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
