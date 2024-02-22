import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function DeanLogin() {
    let navigate = useNavigate()
    let [deanData, setDeanData] = useState({

        email: "",
        password: ""
    })

    const { email, password } = deanData

    function onChangeHandler(e) {
        setDeanData({
            ...deanData,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e) {
        try {
            e.preventDefault();
            // console.log(patientData);
            let res = await axios.post('/api/dean/login', deanData)
            // console.log(res.data)
            localStorage.setItem("token", JSON.stringify({ token: res.data.token }))
            navigate('/apnahospital/dean/dashboard');
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
        setDeanData({
            email: "",
            password: "",
        });
    }

    return (
        <>
            <div className='deanlogin'>
                <form>
                    <div>
                        <center><h1>Dean Login</h1></center>
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

export default DeanLogin