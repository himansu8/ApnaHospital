import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


function Patient() {
    let navigate = useNavigate();

    let [patientData, setPatientData] = useState({

        patientName: "",
        gender: "",
        mobileNumber: "",
        address: "",
        email: "",
        aadhar: "",
        department: "",
        doctorName: "",
        appointmentTime: ""
    })

    const { patientName, gender, mobileNumber, address, email, aadhar, department, doctorName, appointmentTime } = patientData

    function onChangeHandler(e) {
        setPatientData({
            ...patientData,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e) {
        try {
            e.preventDefault();
            // console.log(patientData);
            let res = await axios.post('/api/patient', patientData)
            console.log(res.data)
            window.alert("Thank You For chossing us. Your Appointment details are send to your mail")
            setPatientData({
                patientName: "",
                gender: "",
                mobileNumber: "",
                address: "",
                email: "",
                aadhar: "",
                department: "",
                doctorName: "",
                appointmentTime: ""
            })

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
        setPatientData({
            patientName: "",
            gender: "",
            mobileNumber: "",
            address: "",
            email: "",
            aadhar: "",
            department: "",
            doctorName: "",
            appointmentTime: ""
        });
    }

    return (
        <>

            <form>
                <div>
                    <h1 className='head1'>Book An Appointment</h1>
                    <label>
                        <b>Full Name</b><br />
                        <input type="text" placeholder="Enter Your Name" name="patientName" onChange={onChangeHandler} value={patientName} />
                    </label>

                    {/* <label>
                        <b>Gender</b><br />
                        <input type="text" placeholder="Enter gender" name="gender" onChange={onChangeHandler} value={gender} />
                    </label> */}
                    <br />
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
                        <input type="text" placeholder="Enter mobile number" name="mobileNumber" onChange={onChangeHandler} value={mobileNumber} />
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
                        <b>AADHAR Number</b><br />
                        <input type="text" placeholder="Enter AADHAR number" name="aadhar" onChange={onChangeHandler} value={aadhar} />
                    </label>
                    <br />
                    <label>
                        <b>Department</b><br />
                        <input type="text" placeholder="Enter department" name="department" onChange={onChangeHandler} value={department} />
                    </label>
                    <br />
                    <label>
                        <b>Doctor"s name</b><br />
                        <input type="text" placeholder="Enter Doctor's name" name="doctorName" onChange={onChangeHandler} value={doctorName} />
                    </label>
                    <br />
                    <label>
                        <b>Appointment Time</b><br />
                        <input type="datetime-local" placeholder="Enterappointment date" name="appointmentTime" onChange={onChangeHandler} value={appointmentTime} />
                    </label>
                    <br />
                    <button type="submit" onClick={onSubmit}>Submit</button>
                    <br />
                    <button type="button" onClick={onClear}>Cancel</button>

                </div>

            </form>
        </>
    )
}

export default Patient