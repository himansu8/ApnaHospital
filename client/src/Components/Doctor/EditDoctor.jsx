import { useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function EditDoctor() {
    let navigate = useNavigate();
    const { state } = useLocation();
    console.log(state)
    const { _id, name, mobile, address, email, department } = state
    const doctorId = _id

    const [data, setData] = useState({
        newDoctorName: name,
        newMobileNumber: mobile,
        newAddress: address,
        newEmail: email,
        newDepartment: department
    })
    function onChangeHandler(e) {
        //console.log(e.target.name, e.target.value)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const inputData = async (e, doctorId) => {

        try {
            e.preventDefault();
            let token = JSON.parse(localStorage.getItem('token')).token;
            //console.log(token)
            let res = await axios.patch(`/api/doctor/${doctorId}`, data, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });
            console.log(res.data)
            window.alert("Updated successfully");
            navigate("/apnahospital/dean/dashboard/all_doctor");
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
    };

    return (
        <>

            <form>
                <div>
                    <h1 className='head1'>Doctor Update Form</h1>
                    <label>
                        <b>Doctor Full Name</b><br />
                        <input type="text" placeholder="Enter Name" name="newDoctorName" onChange={onChangeHandler} value={data.newDoctorName} />
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
                        <b>Department</b><br />
                        <input type="text" placeholder="Enter department" name="newDepartment" onChange={onChangeHandler} value={data.newDepartment} />
                    </label><br />
                    <br />
                    <button type="submit" onClick={(e) => inputData(e, doctorId)}>Submit</button>
                </div>

            </form >
        </>
    )
}

export default EditDoctor