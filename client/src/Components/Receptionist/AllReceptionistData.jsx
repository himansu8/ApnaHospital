import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AllReceptionistData() {

    let [receptionData, setReceptiondata] = useState([])
    let navigate = useNavigate();

    async function fetchReceptionist() {
        try {
            let token = JSON.parse(localStorage.getItem('token')).token
            let res = await axios.get('/api/receptionist', {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })


            //console.log(res.data)
            setReceptiondata(res.data)


        } catch (error) {
            console.log(error)
        }
    }

    async function deleteReceptionist(referenceNo) {
        try {
            let token = JSON.parse(localStorage.getItem('token')).token;
            await axios.delete(`/api/receptionist/${referenceNo}`, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });
            let updatedReceptionist = receptionData.filter((ele) => ele._id !== referenceNo);
            setReceptiondata(updatedReceptionist);
            window.alert(`Successfully Deleted`)
        } catch (error) {
            console.log(error)
        }
    }
    function onClickHandler2(referenceNo) {

        navigate(
            `/apnahospital/receptionist/${referenceNo}`,
            {
                state: {
                    referenceNo
                }
            }
        )
    }


    useEffect(() => {
        fetchReceptionist()
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
            <br />
            <br />
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
                            <th>Delete</th>
                            <th>Edit</th>
                            <th>View</th>

                        </tr>



                        {receptionData.map((ele, index) => {
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
                                    <td><button className="delete-button" type="delete" title="Delete" onClick={() => deleteReceptionist(ele._id)}>&#10006;</button></td>
                                    <td><button className="edit-button" type="edit" title="Edit"><Link to={`/apnahospital/dean/edit/${ele._id}`}>&#9998;</Link></button></td>
                                    {/* <td><Link to={`/task/${task._id}`} className="view-link">View</Link></td> */}
                                    <td><button title="View" onClick={() => onClickHandler2(ele._id)}>&#128065;</button></td>

                                </tr>
                            )
                        })}
                    </table>
                </center>
            </div>
        </>
    )
}

export default AllReceptionistData