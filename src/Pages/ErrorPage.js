import React from 'react'
import Hero from '../components/Hero.js';
import '../components/ErrorPage.css';

function ErrorPage() {
    const resumeBtnStyles = {
        display:"none"
    };
    return (
        <div>
            <span id="pageTitle">PAGE NOT FOUND</span>
            <Hero 
            headerOne="OOPS! PAGE NOT FOUND"
            btnLink="/"
            btnText="Return Home"
            hideMe="hideMe"
            skillsOne="sorry"
            skillsTwo="page"
            skillsThree="not"
            skillsFour="found"
            headerTwo="If you are having trouble navigating my web app, please reach out." 
            />
        </div>
    )
}

export default ErrorPage
