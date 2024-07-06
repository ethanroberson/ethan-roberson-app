import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../components/ImgSlider.css';

function ImgSlider() {
    return (
        <div>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
            <div className="slider">
                <div className="img-slides">
    	            <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/01/wordpress-seeklogo.com_.svg"/>
    	            <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/03/html-icon.svg"/>
    	            <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/03/css-icon.svg"/>
    	            <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/03/javascript-icon.svg"/>
    	            <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/03/npm-icon.svg"/>
    	            <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/01/seo-icon.svg"/>
                    <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/01/Google_Ads_logo.svg" />
                    <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/03/photoshop-icon.svg" />
        
        
    	            <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/01/wordpress-seeklogo.com_.svg"/>
    	            <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/03/html-icon.svg"/>
    	            <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/03/css-icon.svg"/>
    	            <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/03/javascript-icon.svg"/>
    	            <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/03/npm-icon.svg"/>
    	            <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/01/seo-icon.svg"/>
                    <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/01/Google_Ads_logo.svg" />
                    <img className="image" src="https://www.thatdigitaldude.com/wp-content/uploads/2023/03/photoshop-icon.svg" />
                </div>
            </div>
            </AnimationOnScroll>
        </div>
    )
}

export default ImgSlider
