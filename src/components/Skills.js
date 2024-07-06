import React from 'react'
import '../components/Skills.css';


function Skills(props) {
    return (
        <div>
            <div className="skills-container-hero slider-container">
                <span className="skills skill-slider animate__animated animate__fadeIn">{props.skillsOne} </span>
                <span className="skills skill-slider animate__animated animate__fadeIn">{props.skillsTwo} </span>
                <span className="skills skill-slider animate__animated animate__fadeIn">{props.skillsThree} </span>
                <span className="skills skill-slider animate__animated animate__fadeIn">{props.skillsFour} </span>
                <span className="skills skill-slider animate__animated animate__fadeIn">{props.skillsFive} </span>
                <span className="skills skill-slider animate__animated animate__fadeIn">{props.skillsSix} </span>
                <span className="skills skill-slider animate__animated animate__fadeIn">{props.skillsSeven} </span>
                <span className="skills skill-slider animate__animated animate__fadeIn">{props.skillsEight} </span>
                <span className="skills skill-slider animate__animated animate__fadeIn">{props.skillsNine} </span>
                <span className="skills skill-slider animate__animated animate__fadeIn">{props.skillsTen} </span>
            </div>
        </div>
    )
}

export default Skills
