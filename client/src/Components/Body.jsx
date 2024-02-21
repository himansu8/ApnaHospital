import React from 'react'
import Patient from './Patient'
import Login from './Login'

function Body() {
    return (
        <>
            <div className="container">
                <div className="patient-container">
                    <Patient />
                </div>
                <div className="login-container">
                    <Login />
                </div>
                
            </div>


        </>
    )
}

export default Body