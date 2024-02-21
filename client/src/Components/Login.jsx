import React from 'react'
import { useNavigate } from "react-router-dom";



function Login() {

  let navigate = useNavigate();

  function onClickDean(e) {
    e.preventDefault();
    navigate("/apnahospital/dean");
  }
  function onClickDoctor(e) {
    e.preventDefault();
    navigate("/apnahospital/doctor");
  }
  function onClickReceptionist(e) {
    e.preventDefault();
    navigate("/apnahospital/receptionist");
  }
  return (
    <>
      <img src='image4.png' style={{ marginLeft: "-30px", width: '500px', height: '300px' }} />
      <br /><br />
      <h3>
        For Adminstration Login
      </h3>
      <button onClick={onClickDean}>Dean Login</button>
      <button onClick={onClickDoctor}>Doctor Login</button>
      <button onClick={onClickReceptionist}>Receptionist Login</button>

    </>
  )
}

export default Login