import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function DoctorSignUp() {
    let navigate = useNavigate()
    let [doctorData, setDoctorData] = useState({
        name: "",
        userName: "",
        gender: "",
        email: "",
        mobile: "",
        address: "",
        password: "",
        addedBy: "",
        department: ""
    })
    const { name, userName, gender, email, mobile, address, password, addedBy, department } = doctorData

    function onChangeHandler(e) {
        e.preventDefault();
        setDoctorData({
            ...doctorData,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e) {
        try {
            e.preventDefault();
            let token = JSON.parse(localStorage.getItem('token')).token;
            let res = await axios.post('/api/doctor/signup', doctorData, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })
            console.log(res.data)
            alert("Successfully created Doctor");
            navigate('/apnahospital/dean/dashboard')
        } catch (error) {
            console.log(error)
        }
    }
    function onClear(e) {
        e.preventDefault();
        setDoctorData({
            name: "",
            userName: "",
            gender: "",
            email: "",
            mobile: "",
            address: "",
            password: "",
            addedBy: "",
            department: ""
        })
    }


    return (
        <>
              <div class="button-container">
        <button type="button" class='MyDashboard' onClick={() => {
          navigate("/apnahospital/dean/dashboard");
        }}>My Dashboard</button>
        <button type="button" class='logoutbtn' onClick={() => {
          localStorage.removeItem('token')
          navigate("/");
        }}>Log out</button>
      </div>


            <form>
                <div>
                    <h1 className='head1'>Doctor Admission Form</h1>
                    <label>
                        <b>Doctor Full Name</b><br />
                        <input type="text" placeholder="Enter Name" name="name" onChange={onChangeHandler} value={name} />
                    </label>
                    <br />
                    <label>
                        <b>Doctor User Name</b><br />
                        <input type="text" placeholder="Enter User Name" name="userName" onChange={onChangeHandler} value={userName} />
                    </label>
                    <br />
                    <label>
                        <b>Gender</b><br />
                        <input type="text" placeholder="Enter gender" name="gender" onChange={onChangeHandler} value={gender} />
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
                    <label>
                        <b>Department</b><br />
                        <input type="text" placeholder="Enter department" name="department" onChange={onChangeHandler} value={department} />
                    </label><br />
                    <label>
                        <b>Added By</b><br />
                        <input type="text" placeholder="Enter Your Name" name="addedBy" onChange={onChangeHandler} value={addedBy} />
                    </label>
                    <br />

                    <br />
                    <button type="submit" onClick={onSubmit}>SignUp</button>
                    <br />
                    <button type="button" onClick={onClear}>Reset</button>

                </div>

            </form >
        </>
    )
}

export default DoctorSignUp