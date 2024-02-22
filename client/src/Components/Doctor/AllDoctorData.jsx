import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Modal from "react-modal"
// import Header from "../Header";


function AllDoctorData() {
    let [doctorData, setDoctorData] = useState([])
    let navigate = useNavigate();

    async function fetchDoctor() {
        try {
            let token = JSON.parse(localStorage.getItem('token')).token
            let res = await axios.get('/api/doctor', {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })


            //console.log(res.data)
            setDoctorData(res.data)


        } catch (error) {
            console.log(error)
        }
    }

    async function deleteDoctor(doctorId) {
        try {
            let token = JSON.parse(localStorage.getItem('token')).token;
            await axios.delete(`/api/doctor/${doctorId}`, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });
            let updatedDoctor = doctorData.filter((ele) => ele._id !== doctorId);
            setDoctorData(updatedDoctor);             //Refersh the doctor database after deleted
            window.alert(`Successfully Deleted`)
        } catch (error) {
            console.log(error)
        }
    }

    function onClickHandler(doctorId) {

        navigate(
            `/apnahospital/dean/doctor/${doctorId}`,
            {
                state: {
                    doctorId
                }
            }
        )
    }
    function onClickHandler2(_id, name, mobile, email, address, department) {

        navigate(
            `/apnahospital/dean/doctor/edit/${_id}`,
            {
                state: {
                    _id, name, mobile, email, address, department
                }
            }
        )
    }

    useEffect(() => {
        fetchDoctor()
    }, [])


    // const [visible, setvisible] = useState(false)

    return (
        <>
            <Link to='/apnahospital/dean/dashboard' className="back">BACK</Link>
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
                                <th>Delete</th>
                                <th>Edit</th>
                                <th>View</th>

                            </tr>



                            {doctorData.map((ele, index) => {
                                return (
                                    <tr key={ele._id}>
                                        <td>{1 + index}</td>
                                        <td>{ele._id}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.userName}</td>
                                        <td>{ele.gender}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.mobile}</td>
                                        <td>{ele.address}</td>
                                        <td>{ele.department}</td>
                                        <td>{ele.addedByDean}</td>
                                        <td><button className="delete-button" type="delete" title="Delete" onClick={() => deleteDoctor(ele._id)}>&#10006;</button></td>
                                        <td><button className="edit-button" type="edit" title="Edit" onClick={()=> onClickHandler2( ele._id, ele.name, ele.mobile, ele.email, ele.address, ele.department)}>&#9998;</button></td>
                                        {/* <td><Link to={`/task/${task._id}`} className="view-link">View</Link></td> */}
                                        <td>
                                            <button title="View" onClick={() => onClickHandler(ele._id)} >&#128065;</button>
                                            {/* <button title="View" onClick={() => setvisible(true)} >&#128065;</button>
                                            <Modal isOpen={visible} onRequestClose={() => setvisible(false)}>
                                                <button onClick={() => setvisible(false)}>close</button>
                                            </Modal> */}
                                        </td>

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

export default AllDoctorData