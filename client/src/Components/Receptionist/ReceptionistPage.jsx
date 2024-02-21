import React from 'react'
import { useNavigate } from 'react-router-dom'

function ReceptionistPage() {
  let navigate = useNavigate()

  function onChangeHandler1(e) {
    e.preventDefault();
    const selectedValue = e.target.value;

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
        <h2 className='deanName'>Receptionist</h2>
        <br/>
        <ul>
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

export default ReceptionistPage