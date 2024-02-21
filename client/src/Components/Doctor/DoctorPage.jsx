import React from 'react'
import { useNavigate } from 'react-router-dom'


function DoctorPage() {
  let navigate = useNavigate()

  function onChangeHandler1(e) {
    e.preventDefault();
    const selectedValue = e.target.value;

    if (selectedValue === "Receptionist SignUp") {
      navigate("/apnahospital/doctor/dashboard/receptionistsignup");
    }
    if (selectedValue === "All Receptionist Data") {
      navigate("/apnahospital/doctor/dashboard/all_receptionist");
    }
    if (selectedValue === "Book Appointment") {
      navigate("/apnahospital/patient/register");
    }
    if (selectedValue === "All Patients Data") {
      navigate("/apnahospital/patient");
    }
  }
  return (
    <>
      <button type="button" className='logoutbtn' onClick={() => {
        localStorage.removeItem('token')
        navigate("/");
      }}>Log out</button>
      <div className="nav_items1">
        <h2 className='deanName'>Mr/Mrs Doctor</h2>
        <ul>
          <li>Receptionist:
            <select onChange={onChangeHandler1} >
              <option value="SignUp">Select</option>
              <option value="Receptionist SignUp">Receptionist SignUp</option>
              <option value="All Receptionist Data">Receptionist</option>
            </select>
          </li>
          <li>Patient:
            <select onChange={onChangeHandler1} >
              <option value="SignUp">Select</option>
              <option value="Book Appointment">Book Appointment</option>
              <option value="All Patients Data">Patients</option>
            </select>
          </li>
        </ul>
      </div>
    </>
  )
}

export default DoctorPage