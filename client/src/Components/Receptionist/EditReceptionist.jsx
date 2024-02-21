import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditReceptionist() {
    const { referenceNo } = useParams();
    let navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        gender : "",
        email: "",
        mobile: "",
        address : "",
        password: ""
    });

    function onChangeHandler(e) {
      //  console.log(e.target.name, e.target.value)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const inputData = async (referenceNo) => {

        try {
            let token = JSON.parse(localStorage.getItem('token')).token;
            console.log(token)
            let res = await axios.patch(`/api/receptionist/${referenceNo}`, data, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });

            console.log(res.data)
            window.alert("Updated Successfully")
           navigate("/apnahospital/dean/dashboard/")
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <button type="button" className='logoutbtn' onClick={() => {
                localStorage.removeItem('token')
                navigate("/");
            }}>Log out</button>

            <form>
                <div>
                    <h1 className='head1'>Receptionist Update Form</h1>
                    <label>
                        <b>Receptionist Full Name</b><br />
                        <input type="text" placeholder="Enter Name" name="name" onChange={onChangeHandler} value={data.newDoctorName} />
                    </label>
                    <br />
                    <label>
                        <b>Phone Number</b><br />
                        <input type="text" placeholder="Enter mobile number" name="mobile" onChange={onChangeHandler} value={data.newMobileNumber} />
                    </label>
                    <br />
                    <label>
                        <b>Email</b><br />
                        <input type="email" placeholder="Enter email" name="email" onChange={onChangeHandler} value={data.newEmail} />
                    </label>
                    <br />
                    <label>
                        <b>Address</b><br />
                        <input type="address" placeholder="Enter Your Address" name="address" onChange={onChangeHandler} value={data.newAddress} />
                    </label>
                    <br />
                    <label>
                        <b>Gender</b><br />
                        <input type="text" placeholder="Enter gender" name="gender" onChange={onChangeHandler} value={data.newDepartment} />
                    </label><br />
                    <label>
                        <b>Password</b><br />
                        <input type="password" placeholder="Enter password" name="password" onChange={onChangeHandler} value={data.newDepartment} />
                    </label><br />
                    <br />
                    <button type="submit" onClick={() => inputData(referenceNo)}>Submit</button>
                </div>

            </form >
        </>
    )
}

export default EditReceptionist