import { useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditPatient() {
    let navigate = useNavigate();
    const { state } = useLocation();

    const { _id,patientName, mobileNumber, email, address,aadhar, department,doctorName,appointmentTime } = state || {}
    const referenceNo = _id
    //console.log(state.name)
    let date = appointmentTime.toLocaleString("en-US", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
        timeZone: 'Asia/Kolkata'
    });
    const [data, setData] = useState({
        newPatientName:patientName,
        newMobileNumber:mobileNumber,
        newAddress:address,
        newEmail:email,
        newAadhar :aadhar,
        newDepartment:department ,
        newDoctorName:doctorName,
        newAppointmentTime :date 
    })
    function onChangeHandler(e) {
        //console.log(e.target.name, e.target.value)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const inputData = async (referenceNo) => {

        try {
            let token = JSON.parse(localStorage.getItem('token')).token;
            //console.log(token)
            let res = await axios.patch(`/api/patient/${referenceNo}`, data, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });
            console.log(res.data)
            console.log("jinu")
            window.alert("Updated successfully");
            navigate("/apnahospital/patient");
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
                    <h1 className='head1'>Doctor Update Form</h1>
                    <label>
                        <b>Patient Full Name</b><br />
                        <input type="text" placeholder="Enter Name" name="newPatientName" onChange={onChangeHandler} value={data.newPatientName} />
                    </label>
                    <br />
                    <label>
                        <b>Phone Number</b><br />
                        <input type="text" placeholder="Enter mobile number" name="newMobileNumber" onChange={onChangeHandler} value={data.newMobileNumber} />
                    </label>
                    <br />
                    <label>
                        <b>Email</b><br />
                        <input type="email" placeholder="Enter email" name="newEmail" onChange={onChangeHandler} value={data.newEmail} />
                    </label>
                    <br />
                    <label>
                        <b>Address</b><br />
                        <input type="address" placeholder="Enter Your Address" name="newAddress" onChange={onChangeHandler} value={data.newAddress} />
                    </label>
                    <br />
                    <label>
                        <b>Aadhar</b><br />
                        <input type="address" placeholder="Enter Your Address" name="newAadhar" onChange={onChangeHandler} value={data.newAadhar} />
                    </label>
                    <br />
                    <label>
                        <b>Department</b><br />
                        <input type="address" placeholder="Enter Your Address" name="newDepartment" onChange={onChangeHandler} value={data.newDepartment} />
                    </label>
                    <br />
                    <label>
                        <b>Doctor Name</b><br />
                        <input type="text" placeholder="Enter department" name="newDoctorName" onChange={onChangeHandler} value={data.newDoctorName} />
                    </label><br />
                    <label>
                        <b>Appointment Date</b><br />
                        <input type="datetime-local" placeholder="Enter Date" name="newAppointmentTime" onChange={onChangeHandler} value={data.newAppointmentTime} />
                    </label><br />
                    <br />
                    <button type="submit" onClick={() => inputData(referenceNo)}>Submit</button>
                </div>

            </form >
        </>
  )
}

export default EditPatient