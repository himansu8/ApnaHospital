import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ViewDoctor() {
    let navigate = useNavigate();
    const { state } = useLocation();
    //console.log(state)
    const [doctor, setDoctor] = useState({})
    const doctorId = state.doctorId
    //console.log(doctorId)

    const fetchDoctor = async (doctorId) => {

        try {
            let token = JSON.parse(localStorage.getItem('token')).token;
            let res = await axios.get(`/api/doctor/${doctorId}`, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });
            setDoctor(res.data);
            //console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchDoctor(doctorId);
    }, []);



    return (
        <>
            <button type="button" className='logoutbtn' onClick={() => {
                localStorage.removeItem('token')
                navigate("/");
            }}>Log out</button>
            <Link to='/apnahospital/dean/dashboard/all_doctor' className="back">BACK</Link>
            <div className="dashboard_data_container">
                <div className="dashboard_data">
                    <center>
                        <table>
                            <tr>
                                <th>Serial No</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Mobile number</th>
                                <th>Address</th>
                                <th>Department</th>
                                <th>Added By</th>
                            </tr>

                            <tr key={doctor._id}>
                                <td>1</td>
                                <td>{doctor._id}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.userName}</td>
                                <td>{doctor.gender}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.mobile}</td>
                                <td>{doctor.address}</td>
                                <td>{doctor.department}</td>
                                <td>{doctor.addedByDean}</td>
                            </tr>

                        </table>
                    </center>
                </div>
            </div>
        </>
    )
}

export default ViewDoctor