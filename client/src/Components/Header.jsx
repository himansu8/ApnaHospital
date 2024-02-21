import React from 'react'
import Logo from "../logo2.jpg"
import { useNavigate } from 'react-router-dom'

function Header() {
    let navigate = useNavigate()
    return (
        <>
            <div className='header'>
                <div className="logo_cont">
                    <img className="logo" src={Logo} />
                </div>
                <div className="nav_items">
                    <ul>
                        <li onClick={() => {
                            localStorage.removeItem('token')
                            navigate("/");
                        }} className="homebtn">Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div >
        {/* <div className="image-container">
                <img className="header-image" src="apna1.jpg" alt="Image 1" />
                <img className="header-image" src="apna2.jpg" alt="Image 2" />
                <img className="header-image" src="apna3.jpg" alt="Image 3" />
            </div> */}
        </>
    )
}

export default Header