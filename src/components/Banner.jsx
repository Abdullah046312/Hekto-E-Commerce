import React from 'react';
import Container from '../components/Container';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../assets/banner.png";

const Banner = () => {
  const settings = {
    dots: true,                    
    infinite: true,                
    speed: 500,                    
    slidesToShow: 1,              
    slidesToScroll: 1,             
    autoplay: true,              
    autoplaySpeed: 2000,           
    pauseOnHover: true,            
    pauseOnDotsHover: true,        
    touchMove: true,               
    adaptiveHeight: true,          
  };

  return (
    <section className="relative">
      <div className="w-full min-h-screen overflow-hidden">
        <Slider {...settings}>
          <div>
            <img 
              className="w-full h-auto object-cover" 
              src={banner} 
              alt="banner 1" 
              loading="lazy"    // Lazy loading for improved performance
            />
          </div>
          <div>
            <img 
              className="w-full h-auto object-cover" 
              src={banner} 
              alt="banner 2" 
              loading="lazy"
            />
          </div>
          <div>
            <img 
              className="w-full h-auto object-cover" 
              src={banner} 
              alt="banner 3" 
              loading="lazy"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
