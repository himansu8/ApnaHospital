import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"
 
function EditReceptionist() {
    let navigate = useNavigate();
    const { state } = useLocation();
    console.log(state)
    const { referenceNo,name,gender,email,mobile,address,password } = state
    const [data, setData] = useState({
        name: name,
        gender : gender,
        email: email,
        mobile: mobile,
        address : address,
        password: password
    });

    function onChangeHandler(e) {
      //  console.log(e.target.name, e.target.value)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const inputData = async (e, referenceNo) => {

        try {
            e.preventDefault();
            let token = JSON.parse(localStorage.getItem('token')).token;
            console.log(token)
            let res = await axios.patch(`/api/receptionist/${referenceNo}`, data, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });

            console.log(res.data)
            window.alert("Updated Successfully")
           navigate("/apnahospital/dean/dashboard/all_receptionist")
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
                    <h1 className='head1'>Receptionist Update Form</h1>
                    <label>
                        <b>Receptionist Full Name</b><br />
                        <input type="text" placeholder="Enter Name" name="name" onChange={onChangeHandler} value={data.name} />
                    </label>
                    <br />
                    <label>
                        <b>Phone Number</b><br />
                        <input type="text" placeholder="Enter mobile number" name="mobile" onChange={onChangeHandler} value={data.mobile} />
                    </label>
                    <br />
                    <label>
                        <b>Email</b><br />
                        <input type="email" placeholder="Enter email" name="email" onChange={onChangeHandler} value={data.email} />
                    </label>
                    <br />
                    <label>
                        <b>Address</b><br />
                        <input type="address" placeholder="Enter Your Address" name="address" onChange={onChangeHandler} value={data.address} />
                    </label>
                    <br />
                    <label>
                        <b>Gender</b><br />
                        <input type="text" placeholder="Enter gender" name="gender" onChange={onChangeHandler} value={data.gender} />
                    </label><br />
                    <label>
                        <b>Password</b><br />
                        <input type="password" placeholder="Enter password" name="password" onChange={onChangeHandler}  />
                    </label><br />
                    <br />
                    <button type="submit" onClick={(e) => inputData(e, referenceNo)}>Submit</button>
                </div>

            </form >
        </>
    )
}

export default EditReceptionist