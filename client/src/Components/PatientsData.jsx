import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PatientsData() {
    let [patientData, setpatientData] = useState([])
    let navigate = useNavigate();

    async function fetchPatient() {
        try {
            let token = JSON.parse(localStorage.getItem('token')).token
            let res = await axios.get('/api/patient', {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })

            //console.log(res.data)
            setpatientData(res.data)


        } catch (error) {
            console.log(error)
        }
    }
    function onClickHandler(referenceNo) {

        navigate(
            `/apnahospital/patient/${referenceNo}`,
            {
                state: {
                    referenceNo
                }
            }
        )
    }
    function onClickHandler2(_id, patientName, mobileNumber, email, address, aadhar, department, doctorName, appointmentTime) {

        navigate(
            `/apnahospital/patient/edit/${_id}`,
            {
                state: {
                    _id, patientName, mobileNumber, email, address, aadhar, department, doctorName,
                    appointmentTime: String(appointmentTime).slice(0, 16)

                }
            }
        )
    }


    useEffect(() => {
        fetchPatient()
    }, [])
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

            <div className="patient_dashboard_data_container">
                <div className="dashboard_data">
                    <center>
                        <table>
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
                                <th>Edit</th>
                                <th>View</th>

                            </tr>



                            {patientData.map((ele, index) => {
                                return (
                                    <tr key={ele._id}>
                                        <td>{1 + index}</td>
                                        <td>{ele._id}</td>
                                        <td>{ele.patientName}</td>
                                        <td>{ele.gender}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.mobileNumber}</td>
                                        <td>{ele.address}</td>
                                        <td>{ele.aadhar}</td>
                                        <td>{ele.department}</td>
                                        <td>{ele.doctorName}</td>
                                        <td>{ele.appointmentTime}</td>
                                        <td><button className="edit-button" type="edit" title="Edit" onClick={() => onClickHandler2(ele._id, ele.patientName, ele.mobileNumber, ele.email, ele.address, ele.aadhar, ele.department, ele.doctorName, ele.appointmentTime)}>&#9998;</button></td>
                                        {/* <td><Link to={`/task/${task._id}`} className="view-link">View</Link></td> */}
                                        <td><button title="View" onClick={() => onClickHandler(ele._id)}>&#128065;</button></td>

                                    </tr>
                                )
                            })}
                        </table>
                    </center>
                </div>
            </div>
        </>
    )
}

export default PatientsData