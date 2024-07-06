import React from 'react'
import '../components/BodyContentRight.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function BodyContentRight(props) {
    return (
        <div className="wrapper">
            <h3>{props.title}</h3>
            <div className="container">
                <div className="left">
                    <h3>{props.serviceTitle}</h3>
                    <p>{props.serviceDes}</p>
                    <p>{props.serviceDes2}</p>
                    <div className="link-source">
                        <h4>Project Source:</h4>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">{props.linkText} </a>
                    </div>
                </div>
                <div className="right">
                    <AnimationOnScroll animateIn="animate__animated animate__bounceInRight" animateOnce="true">
                    <img src={props.img}/>
                    <video
                        width="405"
                        height="550"
                        controls
                        autoPlay
                        loop
                        muted
                        style={{borderRadius: "20px", ...props.videoStyle}}
                    >
                            <source src={props.video} type="video/mp4" />
                            Sorry, your browser does not support the video tag.
                        </video>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

export default BodyContentRight
