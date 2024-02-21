import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ViewReceptionist() {
    let navigate = useNavigate();

    const { state } = useLocation();
    //console.log(state)
    const [receptionist, setReceptionist] = useState({})

    const referenceNo = state.referenceNo
    //console.log(referenceNo)

    const fetchReceptionist = async (referenceNo) => {

        try {
            let token = JSON.parse(localStorage.getItem('token')).token;
            let res = await axios.get(`/api/receptionist/${referenceNo}`, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });
            setReceptionist(res.data);
            //console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchReceptionist(referenceNo);
    }, []);


    return (

        <>
            <button type="button" className='logoutbtn' onClick={() => {
                localStorage.removeItem('token')
                navigate("/");

            }}>Log out</button>
            <br />
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
                            </tr>

                            <tr key={receptionist._id}>
                                <td>1</td>
                                <td>{receptionist._id}</td>
                                <td>{receptionist.name}</td>
                                <td>{receptionist.userName}</td>
                                <td>{receptionist.gender}</td>
                                <td>{receptionist.email}</td>
                                <td>{receptionist.mobile}</td>
                                <td>{receptionist.address}</td>
                            </tr>

                        </table>
                    </center>
                </div>
            </div>
        </>
    )
}

export default ViewReceptionist