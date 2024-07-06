import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css'; // import your CSS file
import img1 from '../Images/img1.jpeg';
import img2 from '../Images/img2.jpeg';
import img3 from '../Images/img3.jpeg';


const images = [
    img1,
    img2,
    img3,
  ];


function ImageSlider() {
    const settings = {
      dots: true,
      infinite: true,
      prevArrow: <PrevArrow />, // custom prev arrow component
      nextArrow: <NextArrow />, // custom next arrow component
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block', background: 'red' }}
            onClick={onClick}
          />
        );
      }
    
      function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block', background: 'green' }}
            onClick={onClick}
          />
        );
      }


    return (
        <div className="slider-container"> {/* add a class to the container */}
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image}>
              <img src={image} alt="Slider" className="slider-image" /> {/* add a class to the image */}
            </div>
          ))}
        </Slider>
      </div>
    );
  }


export default ImageSlider
