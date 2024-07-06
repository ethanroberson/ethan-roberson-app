import React from 'react'
import ServiceSection from '../components/ServiceSection.js';
import '../components/ServiceSection.css';

function SingleService(props) {
    return (
        <div>
         <div className="service">
            <h3>{props.titleOne}</h3>
                <div className="skills-container">
                    <span>{props.webSkillOne}</span>
                    <span>{props.webSkillTwo}</span>
                    <span>{props.webSkillThree}</span>
                    <span>{props.webSkillFour}</span>
                    <span>{props.webSkillFive}</span>
                    <span>{props.webSkillSix}</span>
                 </div>
                    <p>{props.descriptionOne}</p>
                    <a href="/services">{props.ctaOne}</a>
                 </div>            
        </div>
    )
}

export default SingleService
