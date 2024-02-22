import React from 'react'
import { useNavigate } from 'react-router-dom'

function DeanPage() {
  let navigate = useNavigate()

  function onChangeHandler1(e) {
    e.preventDefault();
    const selectedValue = e.target.value;
    if (selectedValue === "Doctor SignUp") {
      navigate("/apnahospital/dean/dashboard/doctorsignup");
    }
    if (selectedValue === "All Doctor Data") {
      navigate("/apnahospital/dean/dashboard/all_doctor");
    }
    if (selectedValue === "Receptionist SignUp") {
      navigate("/apnahospital/dean/dashboard/receptionistsignup");
    }
    if (selectedValue === "All Receptionist Data") {
      navigate("/apnahospital/dean/dashboard/all_receptionist");
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
      <div className="nav_items1">


        <h2 className='deanName'>Mr/Mrs Dean</h2>
        <br />
        <ul>
          <li>Doctor :
            <select onChange={onChangeHandler1} >
              <option value="SignUp">Select</option>
              <option value="Doctor SignUp">Doctor SignUp</option>
              <option value="All Doctor Data">Doctor</option>

            </select>
          </li>
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

export default DeanPage