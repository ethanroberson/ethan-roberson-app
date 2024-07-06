import React from 'react'
import { FaHamburger, FaTimes, FaEquals} from 'react-icons/fa';
import ReactDOM from 'react-dom'
import './Navbar.css';
import logo from '../Logos/ethan-logo.svg';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';
import Resume from '../Resume/current-resume.pdf';



function Navbar() {

    //showMobileMenu function
    function showMobileMenu() {
    let nav = document.getElementById('navbar');
    let menu = document.getElementById('mainNavMenu');
    let menuLi = document.getElementsByClassName('list-item');
    let menuBtn = document.getElementById('mobileMenuBtn');
    let closeBtn = document.getElementById('mobileCloseBtn')
    closeBtn.style.visibility="visible";
    nav.classList.toggle('mobile-nav');
    menu.classList.toggle('mobile-nav-ul');
    menuBtn.classList.toggle('mobile-btn-styles')
    
    for(var i = 0; i < menuLi.length; i++) {
        menuLi[i].classList.toggle('mobile-nav-ul-li');
    }
    /*if(window.screen.width < 1085) {
    menu.setAttribute('id', "mainNavMenuMobile");
    } else {
        menu.setAttribute('id', "mainNavMenu");
    }
    */
}   
//Close mobile menu function
function closeMobileMenu() {
    let nav = document.getElementById('navbar');
    let mainMenu = document.getElementById('mainNavMenu');
    let menu = document.getElementById('mainNavMenuMobile');
    let menuLi = document.getElementsByClassName('list-item');
    let menuBtn = document.getElementById('mobileMenuBtn');
    let mobileContainer = document.querySelector('.mobile-container');
    let closeBtn = document.getElementById('mobileCloseBtn');
    closeBtn.style.visibility="hidden";
    nav.classList.toggle('mobile-nav');
    mainMenu.classList.remove('main-nav-ul', 'mobile-nav-ul');
    menu.classList.toggle('show');
    menu.classList.toggle('mobile-nav-ul');
    menu.classList.toggle('main-nav-ul');
    menuBtn.classList.toggle('mobile-btn-styles');
    for(var i = 0; i < menuLi.length; i++) {
        menuLi[i].classList.toggle('mobile-nav-ul-li');
    }
    if(window.screen.width > 1085) {
        mainMenu.classList.add('flex')
        nav.setAttribute('class', "");
        for(let i = 0; i < menuLi.length; i++) {
        menuLi[i].classList.remove('mobile-nav-ul-li');
        menuBtn.classList.remove('mobile-btn-styles');
        mainMenu.classList.add('main-nav-ul');
        }
        } else {
            return null
        }    
}


    return (
        <div className="nav-wrapper">
           <nav id="navbar">
            <a href="/" className="logo-btn"><img className="logo" src={logo}/> </a>
            <button id="mobileCloseBtn" onClick={closeMobileMenu}><FaTimes className="close-icon"/></button>

            <ul id="mainNavMenu" className="main-nav-ul">
                {/*<li className="list-item"><Link to="/">Home</Link></li>*/}
                {/*<li className="list-item"><Link to="/about">About</Link></li>*/}
                <li className="list-item"><Link onClick={closeMobileMenu} className="nav-link" to="/profile">Profile</Link></li>
                <li className="list-item"><Link onClick={closeMobileMenu} className="nav-link" to="/services">Services</Link></li>
                <li className="list-item"><Link onClick={closeMobileMenu} className="nav-link" to="/projects">Projects</Link></li>
                <li className="list-item"><Link onClick={closeMobileMenu} className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            {/*mobile menu*/}
            <div className="mobile-container">
            <ul id="mainNavMenuMobile" className="main-nav-ul-mobile">
                {/*<li className="list-item"><Link to="/">Home</Link></li>*/}
                {/*<li className="list-item"><Link to="/about">About</Link></li>*/}
                <li className="list-item"><Link to="/services">Services</Link></li>
                <li className="list-item"><Link to="/contact">Contact</Link></li>
                <div className="nav-cta-mobile">
                <a className="resume-btn" href="javascript:void();" onClick={showResume}>View Resume</a>
            </div>
            </ul>
            </div>
            <div className="nav-cta">
                <a href="javascript:void();" onClick={showResume}>View Resume</a>
            </div>
            <button id="mobileMenuBtn" onClick={showMobileMenu}><FaEquals className="hamburger"/></button>
            </nav>
            
        </div>
        
    )
}


//open Resume function
function showResume() {
    window.open(Resume);
}

export default Navbar
