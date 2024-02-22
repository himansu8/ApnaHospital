import React from 'react'
import { useNavigate } from 'react-router-dom'

function DeanDashboardBar() {

    let navigate = useNavigate()

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
        </>
    )
}

export default DeanDashboardBar