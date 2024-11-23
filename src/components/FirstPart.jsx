// import React from 'react'
// import Container from './Container'
// import images from "../assets/images.png"
// import images1 from "../assets/images1.png"
// import images2 from "../assets/images2.png"
// import images3 from "../assets/images3.png"

// const FirstPart = () => {

   
//   return (
//    <section >
//     <Container>
//         <div className="text-center">
//             <h2 className='text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans'>Featured Products</h2>
//         </div>
//         <div className="flex gap-5 items-center p-5 text-center justify-around">
//         <div className="w-[24%]">
//         <img className='bg-[#F6F7FB] p-5 w-full h-[300px] ' src={images} alt="" />
//        <div className="text-center p-5 shadow-2xl hover:bg-[#2F1AC4] duration-300 ease-in-out hover:text-white cursor-pointer">
//         <h2 className='text-[18px] text-[#FB2E86] font-Lato font-bold  hover:text-white'>Cantilever chair</h2>
//         <h4 className='text-[14px] text-[#151875] font-Lato font-bold  hover:text-white'>Code - Y523201</h4>
//         <h3 className='text-[14px] text-[#151875] font-Lato font-bold  hover:text-white'>$42.00</h3>
//        </div>

//         </div>
//         <div className="w-[24%]">
//         <img className='bg-[#F6F7FB] p-5 w-[100%] h-[300px]' src={images1} alt="" />
//        <div className="text-center p-5 shadow-2xl hover:bg-[#2F1AC4] duration-300 ease-in-out hover:text-white cursor-pointer">
//         <h2 className='text-[18px] text-[#FB2E86] font-Lato font-bold  hover:text-white'>Cantilever chair</h2>
//         <h4 className='text-[14px] text-[#151875] font-Lato font-bold  hover:text-white'>Code - Y523201</h4>
//         <h3 className='text-[14px] text-[#151875] font-Lato font-bold  hover:text-white'>$42.00</h3>
//        </div>

//         </div>
//         <div className="w-[24%]">
//         <img className='bg-[#F6F7FB] p-5 w-[100%] h-[300px]' src={images2} alt="" />
//        <div className="text-center p-5 shadow-2xl hover:bg-[#2F1AC4] duration-300 ease-in-out hover:text-white cursor-pointer">
//         <h2 className='text-[18px] text-[#FB2E86] font-Lato font-bold  hover:text-white'>Cantilever chair</h2>
//         <h4 className='text-[14px] text-[#151875] font-Lato font-bold  hover:text-white'>Code - Y523201</h4>
//         <h3 className='text-[14px] text-[#151875] font-Lato font-bold  hover:text-white'>$42.00</h3>
//        </div>

//         </div>
//         <div className="w-[24%]">
//         <img className='bg-[#F6F7FB] p-5 w-full h-[300px]' src={images3} alt="" />
//        <div className="text-center p-5 shadow-2xl hover:bg-[#2F1AC4] duration-300 ease-in-out hover:text-white cursor-pointer">
//         <h2 className='text-[18px] text-[#FB2E86] font-Lato font-bold  hover:text-white'>Cantilever chair</h2>
//         <h4 className='text-[14px] text-[#151875] font-Lato font-bold  hover:text-white'>Code - Y523201</h4>
//         <h3 className='text-[14px] text-[#151875] font-Lato font-bold  hover:text-white'>$42.00</h3>
//        </div>

//         </div>
     
        

//         </div>
    
   


//     </Container>
//    </section>
//   )
// }

// export default FirstPart

import React from 'react';
import Container from './Container';
import images from '../assets/images.png';
import images1 from '../assets/images1.png';
import images2 from '../assets/images2.png';
import images3 from '../assets/images3.png';

const FirstPart = () => {
  return (
    <section>
      <Container>
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-[32px] md:text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans">
            Featured Products
          </h2>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
          {/* Product Item */}
          {[images, images1, images2, images3].map((image, index) => (
            <div key={index} className="w-full">
              <img
                className="bg-[#F6F7FB] p-5 w-full h-[300px] object-contain"
                src={image}
                alt={`Product ${index + 1}`}
              />
              <div className="text-center p-5 shadow-2xl hover:bg-[#2F1AC4] duration-300 ease-in-out hover:text-white cursor-pointer">
                <h2 className="text-[16px] md:text-[18px] text-[#FB2E86] font-Lato font-bold hover:text-white">
                  Cantilever Chair
                </h2>
                <h4 className="text-[12px] md:text-[14px] text-[#151875] font-Lato font-bold hover:text-white">
                  Code - Y523201
                </h4>
                <h3 className="text-[12px] md:text-[14px] text-[#151875] font-Lato font-bold hover:text-white">
                  $42.00
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FirstPart;

