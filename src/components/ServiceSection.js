import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'


function ServiceSection(props) {
    return (
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <div>
            <h3 id="serviceSectionTitle">My background</h3>
            <div className="service-container">
                <div className="service-content">
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
                    <div className="service">
                        <h3>{props.titleTwo}</h3>
                        <div className="skills-container">
                            <span>{props.seoSkillOne}</span>
                            <span>{props.seoSkillTwo}</span>
                            <span>{props.seoSkillThree}</span>
                            <span>{props.seoSkillFour}</span>
                            <span>{props.seoSkillFive}</span>
                        </div>
                        <p>{props.descriptionTwo}</p>
                        <a href="/services">{props.ctaTwo}</a>
                    </div>
                    <div className="service">
                        <h3>{props.titleThree}</h3>
                        <div className="skills-container">
                            <span>{props.ppcSkillOne}</span>
                            <span>{props.ppcSkillTwo}</span>
                            <span>{props.ppcSkillThree}</span>
                            <span>{props.ppcSkillFour}</span>
                        </div>
                        <p>{props.descriptionThree}</p>
                        <a href="/services">{props.ctaThree}</a>
                    </div>
                    <div className="service">
                        <h3>{props.titleFour}</h3>
                        <div className="skills-container">
                            <span>{props.optimizationSkillOne}</span>
                            <span>{props.optimizationSkillTwo}</span>
                            <span>{props.optimizationSkillThree}</span>
                            <span>{props.optimizationSkillFour}</span>
                        </div>
                        <p>{props.descriptionFour}</p>
                        <a href="/services">{props.ctaFour}</a>
                    </div>
                </div>
            </div>
        </div>
        </AnimationOnScroll>
    )
}

export default ServiceSection
