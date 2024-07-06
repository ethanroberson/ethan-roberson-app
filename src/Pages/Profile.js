import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NavVert from '../components/NavVert.js';
import ContactForm from '../components/ContactForm.js';
import ProfileHeader from '../components/ProfileHeader.js';
import MyBackground from '../components/MyBackground.js';
import WebProjects from '../components/WebProjects.js';
import Gallery from '../components/Gallery.js';
import img16 from '../Images/img16.jpeg';
import Footer from '../Pages/Footer.js';



function Profile() {
    return (
        <div className="profile-wrapper">
            <span id="pageTitle">PROFILE</span>
            <ProfileHeader
            profilepic={img16}
            profileName="Ethan Roberson"
            jobTitle="Web Manager & Front-End Developer"
            />
            <MyBackground />
            <Gallery />
            <ContactForm />
        </div>
    )
}

export default Profile

