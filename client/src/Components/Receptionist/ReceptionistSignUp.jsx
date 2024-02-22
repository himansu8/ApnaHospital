import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function ReceptionistSignUp() {
    let navigate = useNavigate()
    let [receptionistData, setReceptionistData] = useState({
        name: "",
        userName: "",
        gender: "",
        email: "",
        mobile: "",
        address: "",
        password: ""
    })
    const { name, userName, gender, email, mobile, address, password } = receptionistData

    function onChangeHandler(e) {
        e.preventDefault();
        setReceptionistData({
            ...receptionistData,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e) {
        try {
            e.preventDefault();
            let token = JSON.parse(localStorage.getItem('token')).token;
            let res = await axios.post('/api/receptionist/signup', receptionistData, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })
            console.log(res.data)
            alert("Successfully created Receptionist");
            navigate('/apnahospital/dean/dashboard')
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
        setReceptionistData({
            name: "",
            userName: "",
            gender: "",
            email: "",
            mobile: "",
            address: "",
            password: ""
        })
    }


    return (
        <>


            <form>
                <div>
                    <h1 className='head1'>Receptionist Admission Form</h1>
                    <label>
                        <b>Receptionist Full Name</b><br />
                        <input type="text" placeholder="Enter Name" name="name" onChange={onChangeHandler} value={name} />
                    </label>
                    <br />
                    <label>
                        <b>Receptionist User Name</b><br />
                        <input type="text" placeholder="Enter User Name" name="userName" onChange={onChangeHandler} value={userName} />
                    </label>
                    <br />
                    {/* <label>
                        <b>Gender</b><br />
                        <input type="text" placeholder="Enter gender" name="gender" onChange={onChangeHandler} value={gender} />
                    </label>
                    <br /> */}
                    <label>
                        <b>Gender  </b>
                        <label style={{ display: 'inline-block', marginRight: '50px', marginTop: "20px", marginLeft: "50px" }}>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={onChangeHandler}
                                checked={gender === "male"}
                            />
                            Male
                        </label>
                        <label style={{ display: 'inline-block' }}>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={onChangeHandler}
                                checked={gender === "female"}
                            />
                            Female
                        </label>
                    </label>
                    <br />
                    <label>
                        <b>Phone Number</b><br />
                        <input type="text" placeholder="Enter mobile number" name="mobile" onChange={onChangeHandler} value={mobile} />
                    </label>
                    <br />
                    <label>
                        <b>Email</b><br />
                        <input type="email" placeholder="Enter email" name="email" onChange={onChangeHandler} value={email} />
                    </label>
                    <br />
                    <label>
                        <b>Address</b><br />
                        <input type="address" placeholder="Enter Your Address" name="address" onChange={onChangeHandler} value={address} />
                    </label>
                    <br />
                    <label>
                        <b>Password</b><br />
                        <input type="password" placeholder="Enter Password" name="password" onChange={onChangeHandler} value={password} />
                        <br /><br />
                        <p>Password will meet the following requirements

                            <li>An English uppercase character (A-Z)</li>
                            <li>An English lowercase character (a-z)</li>
                            <li>A number (0-9) and/or symbol (such as !, #, or %)</li>
                            <li>Eight or more characters total.</li>

                        </p>
                    </label>
                    <br />
                    <button type="submit" onClick={onSubmit}>SignUp</button>
                    <br />
                    <button type="button" onClick={onClear}>Reset</button>

                </div>

            </form >
        </>
    )
}

export default ReceptionistSignUp