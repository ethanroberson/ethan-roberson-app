import React from 'react'
import Hero from '../components/Hero.js';
import '../components/ThankYou.css';

function ThankYou() {
    const resumeBtnStyles = {
        display:"none"
    };
    return (
        <div>
            <span id="pageTitle">Thank You For Your Message</span>
            <Hero 
            headerOne="Thank You for Your Message"
            btnLink="/"
            btnText="Return Home"
            hideMe="hideMe"
            skillsOne="will"
            skillsTwo="respond"
            skillsThree="back"
            skillsFour="soon"
            headerTwo="Thank you again for visiting my web app." 
            />
        </div>
    )
}

export default ThankYou
