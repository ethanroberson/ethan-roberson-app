import React from 'react'
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../components/FullText.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';


function FullText(props) {
    return (
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
        <div className="full-width-container">
        <div className="full-width">
            <h3>{props.title}</h3>
            <div className="img-icon-container">
            <img src={props.src}/>
            <div className="flex row contact-elem">
            <a className="linkedin-link" target="_blank" href="https://www.linkedin.com/in/ethanroberson/"><FaLinkedin className="linkedin-icon" /></a>
            <a className="linkedin-link" target="_blank" href="mailto:ethanr.professional@gmail.com"><FaEnvelope className="linkedin-icon" /></a>
            <a className="linkedin-link" target="_blank" href="tel:9197038475"><FaPhone className="linkedin-icon" /></a>
            </div>
            </div>
            <p>{props.descriptionOne}</p>
            <p>{props.descriptionTwo}</p>
        </div>
        </div>
        </AnimationOnScroll>
    )
}

export default FullText
