import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import ParentRegister from './pages/Guardian/guardianRegister';
import DoctorAdmin from './pages/ConsultantPage';
import GuardianAdmin from './pages/Guardian/GuardianHomePage';
import SignIn from './pages/Login';
import SchoolAdmin from './pages/schoolAdministration/SchoolAdmin';
import CateringAdmin from './pages/cateringManager/CateringManagePage';
import BMIdetail from './pages/schoolAdministration/BMIdetail';
import BMIRegistration from './pages/schoolAdministration/BMIRegistration';
import GuardianDetail from './pages/schoolAdministration/GuardianDetail';
import Feedback from './pages/schoolAdministration/Feedback';
import GuardianCardDetail from './pages/Guardian/GuardianCardDetail';
import StudentRegistration from './pages/Guardian/StudentRegistration';
import CateringManagerPage from './pages/cateringManager/CateringManagePage';
import AddMenuPage from './pages/cateringManager/AddMenuPage';
import AddMenuItems from './pages/cateringManager/AddMenuItems';
import BmiChart from './pages/Guardian/BmiChart';
import PaymentMethod from './pages/Guardian/PaymentMethod';
import UserProfile from './pages/Guardian/UserProfile';
import StudentList from './pages/Guardian/StudentList';
import OrderRegistration from './pages/Guardian/OrderRegistration';
import MenuList from './pages/menu/MenuList';
import StudentOrder from './pages/Guardian/StudentOrder';
import MenuDetail from './pages/menu/MenuDetail';

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
          <Route path='/schoolAdmin/bmi/details' element={<BMIdetail/>}/>
          <Route path='/schoolAdmin/bmi/register' element={<BMIRegistration/>}/>
          <Route path='/schoolAdmin/guardian-detail' element={<GuardianDetail/>}/>
          <Route path='/schoolAdmin/feedback' element={<Feedback/>}/>
          <Route path='/guardian/foodDetail' element={<GuardianCardDetail/>}/>
          <Route path='/guardian/student-register' element={<StudentRegistration/>}/>
          <Route path='/guardian/students' element={<StudentList/>}/>
          <Route path='/guardian/order-register' element={<OrderRegistration/>}/>
          <Route path='/menu' element={<MenuList/>}/>
          <Route path='/menu/:menuId' element={<MenuDetail/>}/>
          <Route path='/guardian/orders' element={<StudentOrder/>}/>
          <Route path='/guardian/bmaiChart' element={<BmiChart/>}/>
          <Route path='/guardian/paymentMethod' element={<PaymentMethod/>}/>
          <Route path='/guardian/userProfile' element={<UserProfile/>}/>
          {/* Catering Manager */}
          <Route path='/catering-manager' element={<CateringManagerPage/>}/>          
          <Route path='/catering-manager/addMenu' element={<AddMenuPage/>}/>          
          <Route path='/catering-manager/addMenuItems' element={<AddMenuItems/>}/>          
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
