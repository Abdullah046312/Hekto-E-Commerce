// import React from 'react'
// import Container from './Container'
// import images15 from "../assets/images15.png"
// import images16 from "../assets/images16.png"
// import images17 from "../assets/images17.png"
// import images18 from "../assets/images18.png"
// import images19 from "../assets/images19.png"
// import images20 from "../assets/images20.png"
// import images21 from "../assets/images21.png"
// import images22 from "../assets/images22.png"
// import images23 from "../assets/images23.png"


// const FivethPart = () => {
//   return (
//   <section className='py-8'>
//     <Container>
//     <div className="text-center">
//             <h2 className='text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans'>Trending Products</h2>
//          </div>
//          <div className="flex gap-5 items-center p-5 text-center justify-around bg-[#FFFF]  py-5 px-5">
//          <div className="w-[24%]">
//         <img className='bg-[#F5F6F8] p-5 w-full h-[300px] ' src={images15} alt="" />
//         <div className="text-center p-5 shadow-2xl cursor-pointer">
//          <h2 className='text-[18px] text-[#151875] font-Lato font-bold  '>Cantilever chair</h2>
//          <div className="flex text-center justify-center gap-5">
//          <h4 className='text-[14px] text-[#151875] font-Lato font-bold  '>$26.00 </h4>
//          <h3 className='text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through  '>$42.00</h3>
//          </div>
         
//         </div>

//          </div>
         
//          <div className="w-[24%]">
//         <img className='bg-[#F6F7FB] p-5 w-full h-[300px] ' src={images16} alt="" />
//         <div className="text-center p-5 shadow-2xl cursor-pointer">
//          <h2 className='text-[18px] text-[#151875] font-Lato font-bold  '>Cantilever chair</h2>
//          <div className="flex text-center justify-center gap-5">
//          <h4 className='text-[14px] text-[#151875] font-Lato font-bold  '>$26.00 </h4>
//          <h3 className='text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through  '>$42.00</h3>
//          </div>
         
//         </div>

//          </div>
//          <div className="w-[24%]">
//         <img className='bg-[#F6F7FB] p-5 w-full h-[300px] ' src={images17} alt="" />
//         <div className="text-center p-5 shadow-2xl cursor-pointer">
//          <h2 className='text-[18px] text-[#151875] font-Lato font-bold  '>Cantilever chair</h2>
//          <div className="flex text-center justify-center gap-5">
//          <h4 className='text-[14px] text-[#151875] font-Lato font-bold  '>$26.00 </h4>
//          <h3 className='text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through  '>$42.00</h3>
//          </div>
         
//         </div>

//          </div>
//          <div className="w-[24%]">
//         <img className='bg-[#F6F7FB] p-5 w-full h-[300px] ' src={images18} alt="" />
//         <div className="text-center p-5 shadow-2xl cursor-pointer">
//          <h2 className='text-[18px] text-[#151875] font-Lato font-bold  '>Cantilever chair</h2>
//          <div className="flex text-center justify-center gap-5">
//          <h4 className='text-[14px] text-[#151875] font-Lato font-bold  '>$26.00 </h4>
//          <h3 className='text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through  '>$42.00</h3>
//          </div>
         
//         </div>

//          </div>
     
        

//         </div>

//               <div className="flex justify-between">
//                   <div className="w-[32%]">
//                       <img  src={images19} alt="" />

//                   </div>
//                   <div className="w-[32%]">
//                       <img src={images20} alt="" />

//                   </div>
//                   <div className="w-[32%] mt-8">
//                       <img src={images21} alt="" />
//                       <img className='py-5' src={images22} alt="" />
//                       <img src={images23} alt="" />

//                   </div>

//               </div>
    
   
//     </Container>
//   </section>
//   )
// }

// export default FivethPart

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import Container from './Container';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'; // Import React Icons
import images15 from "../assets/images15.png";
import images16 from "../assets/images16.png";
import images17 from "../assets/images17.png";
import images18 from "../assets/images18.png";
import images19 from "../assets/images19.png";
import images20 from "../assets/images20.png";
import images21 from "../assets/images21.png";
import images22 from "../assets/images22.png";
import images23 from "../assets/images23.png";

// Custom Arrow component for the left arrow
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="h-[50px] w-[50px] rounded-full absolute left-[20px] top-[50%] translate-y-[-50%] text-center leading-[45px] bg-[#00000033] cursor-pointer z-10"
    onClick={onClick}
  >
    <FaLongArrowAltLeft className="inline-block text-[30px] text-white font-bold" />
  </div>
);

// Custom Arrow component for the right arrow
const CustomNextArrow = ({ onClick }) => (
  <div
    className="h-[50px] w-[50px] rounded-full absolute right-[20px] top-[50%] translate-y-[-50%] text-center leading-[45px] bg-[#00000033] cursor-pointer z-10"
    onClick={onClick}
  >
    <FaLongArrowAltRight className="inline-block text-[30px] text-white font-bold" />
  </div>
);

// Add the settings for the Slick Slider
const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000, // Autoplay every 3 seconds
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const FivethPart = () => {
  return (
    <section className="py-8">
      <Container>
        <div className="text-center">
          <h2 className="text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans">
            Trending Products
          </h2>
        </div>

        {/* Slick Slider Component */}
        <Slider {...sliderSettings}>
          {/* Product Item */}
          <div className="w-full p-5">
            <img
              className="bg-[#F5F6F8] p-5 w-full h-[300px]"
              src={images15}
              alt="Cantilever chair"
            />
            <div className="text-center p-5 shadow-2xl cursor-pointer">
              <h2 className="text-[18px] text-[#151875] font-Lato font-bold">
                Cantilever chair
              </h2>
              <div className="flex text-center justify-center gap-5">
                <h4 className="text-[14px] text-[#151875] font-Lato font-bold">
                  $26.00
                </h4>
                <h3 className="text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through">
                  $42.00
                </h3>
              </div>
            </div>
          </div>

          {/* Repeat the structure for other products */}
          <div className="w-full p-5">
            <img
              className="bg-[#F6F7FB] p-5 w-full h-[300px]"
              src={images16}
              alt="Cantilever chair"
            />
            <div className="text-center p-5 shadow-2xl cursor-pointer">
              <h2 className="text-[18px] text-[#151875] font-Lato font-bold">
                Cantilever chair
              </h2>
              <div className="flex text-center justify-center gap-5">
                <h4 className="text-[14px] text-[#151875] font-Lato font-bold">
                  $26.00
                </h4>
                <h3 className="text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through">
                  $42.00
                </h3>
              </div>
            </div>
          </div>

          <div className="w-full p-5">
            <img
              className="bg-[#F6F7FB] p-5 w-full h-[300px]"
              src={images17}
              alt="Cantilever chair"
            />
            <div className="text-center p-5 shadow-2xl cursor-pointer">
              <h2 className="text-[18px] text-[#151875] font-Lato font-bold">
                Cantilever chair
              </h2>
              <div className="flex text-center justify-center gap-5">
                <h4 className="text-[14px] text-[#151875] font-Lato font-bold">
                  $26.00
                </h4>
                <h3 className="text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through">
                  $42.00
                </h3>
              </div>
            </div>
          </div>

          <div className="w-full p-5">
            <img
              className="bg-[#F6F7FB] p-5 w-full h-[300px]"
              src={images18}
              alt="Cantilever chair"
            />
            <div className="text-center p-5 shadow-2xl cursor-pointer">
              <h2 className="text-[18px] text-[#151875] font-Lato font-bold">
                Cantilever chair
              </h2>
              <div className="flex text-center justify-center gap-5">
                <h4 className="text-[14px] text-[#151875] font-Lato font-bold">
                  $26.00
                </h4>
                <h3 className="text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through">
                  $42.00
                </h3>
              </div>
            </div>
          </div>
        </Slider>

        <div className="flex justify-between mt-8">
          <div className="w-[32%]">
            <img src={images19} alt="Product" />
          </div>
          <div className="w-[32%]">
            <img src={images20} alt="Product" />
          </div>
          <div className="w-[32%] mt-8">
            <img src={images21} alt="Product" />
            <img className="py-5" src={images22} alt="Product" />
            <img src={images23} alt="Product" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FivethPart;
