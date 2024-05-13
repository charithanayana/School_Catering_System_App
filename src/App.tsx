import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ParentRegister from './pages/Guardian/guardianRegister';
import DoctorAdmin from './pages/consultant/ConsultantPage';
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
import PaymentMethod from './pages/Guardian/PaymentMethod';
import UserProfile from './pages/Guardian/UserProfile';
import StudentList from './pages/Guardian/StudentList';
import OrderRegistration from './pages/Guardian/OrderRegistration';
import MenuList from './pages/menu/MenuList';
import StudentOrder from './pages/Guardian/StudentOrder';
import MenuDetail from './pages/menu/MenuDetail';
import BMIdetailGuardian from './pages/Guardian/BMIdetailGuardian';
import Home from './pages/Home/Home'
import AddMenu from './pages/cateringManager/AddMenu';
import AddMenuItem from './pages/cateringManager/AddMenuItem';
import ConsultantRegistration from './pages/consultant/ConsultantRegistration';
import ConsultantList from './pages/consultant/ConsultantList';
import NotificationList from './pages/notification/NotificationList';
import CateringManagerRegistration from './pages/catering/CateringManagerRegistration';
import CateringtManagerList from './pages/catering/CateringtManagerList';
import BMIdetailConsultant from './pages/consultant/BMIdetailConsultant';
import NutritionAdjustment from './pages/consultant/NutritionAdjustment';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/consultantPage" element={<DoctorAdmin />} />
          <Route path='/consultantPage/bmi/details' element={<BMIdetailConsultant />} />
          <Route path='/consultantPage/nutrition-adjustment' element={<NutritionAdjustment />} />
          <Route path='/guardian' element={<GuardianAdmin />} />
          <Route path='/guardian/register' element={<ParentRegister />} />
          <Route path='/cateringAdmin' element={<CateringAdmin />} />
          <Route path='/schoolAdmin' element={<SchoolAdmin />} />
          <Route path='/schoolAdmin/bmi/details' element={<BMIdetail />} />
          <Route path='/schoolAdmin/bmi/register' element={<BMIRegistration />} />
          <Route path='/schoolAdmin/guardian-detail' element={<GuardianDetail />} />
          <Route path='/schoolAdmin/consultant/register' element={<ConsultantRegistration/>}/>
          <Route path='/schoolAdmin/consultant/list' element={<ConsultantList/>}/>
          <Route path='/schoolAdmin/catering/register' element={<CateringManagerRegistration/>}/>
          <Route path='/schoolAdmin/catering/list' element={<CateringtManagerList/>}/>
          <Route path='/schoolAdmin/feedback' element={<Feedback />} />
          <Route path='/guardian/foodDetail' element={<GuardianCardDetail />} />
          <Route path='/guardian/student-register' element={<StudentRegistration />} />
          <Route path='/guardian/students' element={<StudentList />} />
          <Route path='/guardian/order-register' element={<OrderRegistration />} />
          <Route path='/guardian/bmi/details' element={<BMIdetailGuardian />} />
          <Route path='/menu' element={<MenuList />} />
          <Route path='/menu/:menuId' element={<MenuDetail />} />
          <Route path='/guardian/orders' element={<StudentOrder />} />
          {/* <Route path='/guardian/bmaiChart' element={<BmiChart/>}/> */}
          <Route path='/guardian/paymentMethod' element={<PaymentMethod />} />
          <Route path='/guardian/userProfile' element={<UserProfile />} />
          {/* Catering Manager */}
          <Route path='/catering-manager' element={<CateringManagerPage />} />
          <Route path='/catering-manager/addMenu' element={<AddMenu />} />
          <Route path='/catering-manager/addMenuItems' element={<AddMenuItem />} />
          <Route path='/notification' element={<NotificationList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
