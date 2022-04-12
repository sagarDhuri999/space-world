import React, { useState } from 'react'
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [links, setLinks] = useState(false);
    return (
        <div className='navbar'>
            <div className='logo'>
                <NavLink to="/"><img className='logo' src="img/logo.svg" alt="logo" /></NavLink>
            </div>
            <nav className='primary_nav'>

                <ul className={links ? "hidden" : "ul"} >

                    <div className="close_btn">
                        <img src="img/icon-close.svg" alt="icon-close" className="btn" onClick={() => setLinks(!links)} />
                    </div>

                    <li><NavLink to="/" ><span>00</span>HOME</NavLink></li>
                    <li><NavLink to="destination" ><span>01</span>DESTINATION</NavLink></li>
                    <li><NavLink to="crew"><span>02</span>CREW</NavLink></li>
                    <li><NavLink to="technology"><span>03</span>TECHNOLOGY</NavLink></li>
                </ul>
                <img src="img/icon-hamburger.svg" alt="hamburger" className="btn" onClick={() => setLinks(!links)} /> {/* work as hamburger button */}
            </nav>



        </div>
    )
}

export default Header
