import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import Resume from '../Resume/current-resume.pdf';


const Hero = (props) => {
    const returnHomeBtnStyle = {
        
    };
    return (
        <div className="hero-container">
          <div className="hero-contents">
            <div className="left-side">
                <h1 className="animate__animated animate__fadeIn">{props.headerOne}</h1>
                <div className="skills-container-hero">
                <span className="skills animate__animated animate__fadeIn">{props.skillsOne}</span>
                <span className="skills animate__animated animate__fadeIn">{props.skillsTwo}</span>
                <span className="skills animate__animated animate__fadeIn">{props.skillsThree}</span>
                <span className="skills animate__animated animate__fadeIn">{props.skillsFour}</span>
                </div>
                <h2>{props.headerTwo}</h2>
                <button id="viewResumeBtn" className={props.hideMe} onClick={showResume}>View Resume</button>
                <a id="returnHomeBtn" className={props.returnHomeBtn} href={props.btnLink}>{props.btnText}</a>
            </div>
            <div className="right-side">
                <img src={props.img} className="animate__animated animate__fadeIn" width="500px"/>
                <div className="flipped-content">
                    <p>{props.flippedContent}</p>
                    <a className="linkedin-link" target="_blank" href="https://www.linkedin.com/in/ethanroberson/"><FaLinkedin className="linkedin-icon" /></a>
                </div>
            </div>
          </div>
        </div>
    )
}

//open Resume function
function showResume() {
    window.open(Resume);
}

export default Hero;
