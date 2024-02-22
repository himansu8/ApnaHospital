import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function DoctorLogin() {
    let navigate=useNavigate()
    let [doctorData, setDoctorData] = useState({

        email: "",
        password: ""
    })

    const { email, password } = doctorData

    function onChangeHandler(e) {
        setDoctorData({
            ...doctorData,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e) {
        try {
            e.preventDefault();
            // console.log(patientData);
            let res = await axios.post('/api/doctor/login', doctorData)
            // console.log(res.data)
            localStorage.setItem("token", JSON.stringify({ token: res.data.token }))
            navigate('/apnahospital/doctor/dashboard');
        } catch (error) {
            let errorString = "";
      //handling express validator errors
      if (error.response.data.errors) {
        error.response.data.errors.forEach((ele) => {
          errorString += `${ele.msg} `
        })
        // showAlert({
        //   type: "error",
        //   msg: errorString
        // })
        window.alert(errorString)

      }
      else {
        //Custom errors
        errorString = error.response.data.error;
        // showAlert({
        //   type: "error",
        //   msg: errorString
        // })
        window.alert(errorString)

      }
    }
    }
    function onClear(e) {
        e.preventDefault();
        setDoctorData({
            email: "",
            password: "",
        });
    }

    return (
        <>
        <div className='doctorlogin'>
            <form>
                <div>
                <center><h1>Doctor Login</h1></center>

                    <label>
                        <b>Email</b><br />
                        <input type="email" placeholder="Enter email" name="email" onChange={onChangeHandler} value={email} />
                    </label>
                    <br />
                    <label>
                        <b>Password</b><br />
                        <input type="password" placeholder="Enter Your Password" name="password" onChange={onChangeHandler} value={password} />
                    </label>
                    <br />
                    <br />
                    <button type="submit" onClick={onSubmit}>Login</button>
                    <br />
                    <button type="button" onClick={onClear}>Reset</button>

                </div>

            </form>
            </div>
        </>
    )
}

export default DoctorLogin