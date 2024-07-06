import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../components/NavVert.css';
import { FaHome, FaUserAlt, FaUserTie, FaLinkedin, FaCode, FaComment, FaPhotoVideo  } from 'react-icons/fa';



function NavVert() {
    return (
        <div className="profile-nav-container">
	        <div className="profile-nav">
    	        <ul id="profile-ul">
                <li><Link to="/profile"><FaHome/></Link></li>
        	    <li><a href=""><FaUserTie/></a></li>
        	    <li><a href=""><FaCode/></a></li>
        	    <li><a href=""><FaComment/></a></li>
                </ul>
            </div>
        </div>            
    )
}

export default NavVert


