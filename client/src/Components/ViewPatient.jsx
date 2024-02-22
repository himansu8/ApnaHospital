import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'


function ViewPatient() {
    let navigate = useNavigate()

    const { state } = useLocation();
    //console.log(state)
    const [patient, setPatient] = useState({})
    const referenceNo = state.referenceNo
    //console.log(referenceNo)
    const fetchPatient = async (referenceNo) => {

        try {
            let token = JSON.parse(localStorage.getItem('token')).token;
            let res = await axios.get(`/api/patient/${referenceNo}`, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });
            setPatient(res.data);
            //console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPatient(referenceNo);
    }, []);


    return (
        <>
            <button type="button" className='logoutbtn' onClick={() => {
                localStorage.removeItem('token')
                navigate("/");
            }}>Log out</button>
            <Link to='/apnahospital/patient' className="back">BACK</Link>
            <div className="patient_dashboard_data_container">
                <div className="dashboard_data">
                    <center>
                        <table>
                            <thead>
                            <tr>
                                <th>Serial No</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Mobile number</th>
                                <th>Address</th>
                                <th>Aadhar Number</th>
                                <th>Department</th>
                                <th>Doctor's Name</th>
                                <th>Appointment Date & Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr key={patient._id}>
                                <td>1</td>
                                <td>{patient._id}</td>
                                <td>{patient.patientName}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.email}</td>
                                <td>{patient.mobileNumber}</td>
                                <td>{patient.address}</td>
                                <td>{patient.aadhar}</td>
                                <td>{patient.department}</td>
                                <td>{patient.doctorName}</td>
                                <td>{patient.appointmentTime}</td>
                            </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
            </div>
        </>
    )
}

export default ViewPatient