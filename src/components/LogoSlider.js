import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import htmlLogo from '../Logos/html-logo.png';
import jsLogo from '../Logos/js-logo.png';


function LogoSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
    const logoStyles = {
        width: "100%",
        maxWidth: "55px",
        height: "55px", 
        objectFit: "cover"
    };

      const autoLogos = [
        { id: 1, logo: htmlLogo},
        { id: 2, logo: jsLogo },
        { id: 3, logo: '/images/nissan.png' },
        { id: 4, logo: '/images/ford.png' },
        { id: 5, logo: '/images/chevrolet.png' },
        { id: 6, logo: '/images/audi.png' },
        { id: 7, logo: '/images/bmw.png' },
        { id: 8, logo: '/images/mercedes-benz.png' },
        { id: 9, logo: '/images/volkswagen.png' },
        { id: 10, logo: '/images/jeep.png' }
      ];
      return (
        <div className="auto-logo-slider">
          <Slider {...settings}>
            {autoLogos.map(autoLogo => (
              <div key={autoLogo.id}>
                <img src={autoLogo.logo} alt={autoLogo.id} style={logoStyles}/>
              </div>
            ))}
          </Slider>
        </div>
      );
    }

export default LogoSlider
