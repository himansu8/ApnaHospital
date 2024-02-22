import React from 'react'
import { useNavigate } from 'react-router-dom'

function DoctorDashboardBar() {
    let navigate = useNavigate()

    return (
        <>
            <div class="button-container">
                <button type="button" class='MyDashboard' onClick={() => {
                    navigate("/apnahospital/doctor/dashboard");
                }}>My Dashboard</button>
                <button type="button" class='logoutbtn' onClick={() => {
                    localStorage.removeItem('token')
                    navigate("/");
                }}>Log out</button>
            </div>
        </>
    )
}

export default DoctorDashboardBar