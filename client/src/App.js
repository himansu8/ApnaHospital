import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Foooter from './Components/Foooter';
import DeanLogin from './Components/Dean/DeanLogin';
import DeanPage from './Components/Dean/DeanPage';
import DoctorLogin from './Components/Doctor/DoctorLogin';
import DoctorPage from './Components/Doctor/DoctorPage';
import ReceptionistLogin from './Components/Receptionist/ReceptionistLogin';
import ReceptionistPage from './Components/Receptionist/ReceptionistPage';
import DoctorSignUp from './Components/Doctor/DoctorSignUp';
import ReceptionistSignUp from './Components/Receptionist/ReceptionistSignUp';
import Patient from './Components/Patient';
import AllReceptionistData from './Components/Receptionist/AllReceptionistData';
import AllDoctorData from './Components/Doctor/AllDoctorData';
import PatientsData from './Components/PatientsData';
import ViewDoctor from './Components/Doctor/ViewDoctor';
import ViewReceptionist from './Components/Receptionist/ViewReceptionist';
import ViewPatient from './Components/ViewPatient';
import EditDoctor from './Components/Doctor/EditDoctor';
import EditReceptionist from './Components/Receptionist/EditReceptionist';
import EditPatient from './Components/EditPatient';
import DeanDashboardBar from './Components/Dean/DeanDashboardBar';
import DoctorDashboardBar from './Components/Doctor/DoctorDashboardBar';
import Privateroutes from './Components/Privaterouter';
function App() {
  const [alert, setAlert] = useState(null);




  const showAlert = (payload) => {
    setAlert({
      type: payload.type,
      msg: payload.msg
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<><Header /> <Body /> <Foooter /></>} />
        <Route path='/apnahospital/dean' element={<><Header /> <DeanLogin /> <Foooter /></>} />
        <Route path='/apnahospital/doctor' element={<><Header /> <DoctorLogin /> <Foooter /></>} />
        <Route path='/apnahospital/receptionist' element={<><Header /> <ReceptionistLogin /> <Foooter /></>} />


        <Route element={<Privateroutes />} >
          <Route path='/apnahospital/dean/dashboard' element={<><Header /> <DeanDashboardBar /> <DeanPage /> <Foooter /></>} />
          <Route path='/apnahospital/doctor/dashboard' element={<><Header /> <DoctorPage /> <Foooter /></>} />
          <Route path='/apnahospital/receptionist/dashboard' element={<><Header /> <ReceptionistPage /> <Foooter /></>} />
          {/* Dean Dashboard */}
          <Route path='/apnahospital/dean/dashboard/doctorsignup' element={<><Header /> <DeanDashboardBar /><DoctorSignUp /> <Foooter /></>} />
          <Route path='/apnahospital/dean/dashboard/all_doctor' element={<><Header /> <DeanDashboardBar />  <AllDoctorData /> <Foooter /></>} />
          <Route path='/apnahospital/dean/doctor/:doctorId' element={<><Header /> <DeanDashboardBar /> <ViewDoctor /> <Foooter /></>} />
          <Route path='/apnahospital/dean/doctor/edit/:_id' element={<><Header /> <DeanDashboardBar /> <EditDoctor /> <Foooter /></>} />
          <Route path='/apnahospital/dean/dashboard/receptionistsignup' element={<><Header /> <DeanDashboardBar /> <ReceptionistSignUp /> <Foooter /></>} />
          <Route path='/apnahospital/dean/dashboard/all_receptionist' element={<><Header /> <DeanDashboardBar /> <AllReceptionistData /> <Foooter /></>} />
          <Route path='/apnahospital/dean/edit/:referenceNo' element={<><Header /> <EditReceptionist /> <Foooter /></>} />
          <Route path='/apnahospital/receptionist/:referenceNo' element={<><Header /> <ViewReceptionist /> <Foooter /></>} />
          <Route path='/apnahospital/patient/register' element={<><Header /> <Patient /> <Foooter /></>} />
          <Route path='/apnahospital/patient' element={<><Header /> <PatientsData /> <Foooter /></>} />
          <Route path='/apnahospital/patient/:referenceNo' element={<><Header /> <ViewPatient /> <Foooter /></>} />
          <Route path='/apnahospital/patient/edit/:referenceNo' element={<><Header /> <EditPatient /> <Foooter /></>} />
          {/* Doctor Dashboard */}
          <Route path='/apnahospital/doctor/dashboard/receptionistsignup' element={<><Header /> <DoctorDashboardBar /> <ReceptionistSignUp /> <Foooter /></>} />
          <Route path='/apnahospital/doctor/dashboard/all_receptionist' element={<><Header /> <DoctorDashboardBar /> <AllReceptionistData /> <Foooter /></>} />
        </Route>


      </Routes>
    </div >
  );
}

export default App;
