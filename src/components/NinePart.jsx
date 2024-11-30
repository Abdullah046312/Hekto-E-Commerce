// import React from 'react'
// import Container from './Container'
// import images31 from "../assets/images31.png"
// import images32 from "../assets/images32.png"
// import images33 from "../assets/images33.png"
// import { ImPen } from "react-icons/im";
// import { FaCalendarCheck } from "react-icons/fa";



// const NinePart = () => {
//   return (
//    <section className='py-5'>
//     <Container>
//     <div className="text-center mb-8">
//           <h2 className="text-[32px] md:text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans">
//           Leatest Blog
//           </h2>
//         </div>

//         <div className="flex justify-between">
//             <div className="w-[32%] bg-[#ffffffad] shadow-2xl px-5 rounded-[12px]">
//                 <img className='w-full' src={images31} alt="" />
//                 <div className="flex items-center gap-16 py-5  ">
//                  <div className="flex gap-2 items-center text-[14px] text-[#151875] font-Josefin_Sans font-medium">
//                  <ImPen className='text-red-900' />
//                  <h4 > SaberAli</h4>
//                  </div>
//                     <div className="flex gap-2 items-center text-[14px] text-[#151875] font-Josefin_Sans font-medium">
//                     <FaCalendarCheck className='text-yellow-500' /> 
//                     <h4> 21 August,2020</h4>
//                     </div>
//                 </div>
//                 <div className="">
//                     <h4 className='text-[18px] text-[#151875] font-Josefin_Sans font-semibold'>Top esssential Trends in 2021</h4>
//                     <p className='text-[16px] text-[#72718F] font-Josefin_Sans font-medium py-2'>More off this less hello samlande lied much
//                     over tightly circa horse taped mightly</p>
//                     <h5 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold underline pb-5'>Read More</h5>
//                 </div>
//             </div>
//             <div className="w-[32%] bg-[#ffffffad] shadow-2xl px-5 rounded-[12px]">
//                 <img className='w-full' src={images32} alt="" />
//                 <div className="flex items-center gap-16 py-5  ">
//                  <div className="flex gap-2 items-center text-[14px] text-[#151875] font-Josefin_Sans font-medium">
//                  <ImPen className='text-red-900' />
//                  <h4 > SaberAli</h4>
//                  </div>
//                     <div className="flex gap-2 items-center text-[14px] text-[#151875] font-Josefin_Sans font-medium">
//                     <FaCalendarCheck className='text-yellow-500' /> 
//                     <h4> 21 August,2020</h4>
//                     </div>
//                 </div>
//                 <div className="">
//                     <h4 className='text-[18px] text-[#151875] font-Josefin_Sans font-semibold'>Top esssential Trends in 2021</h4>
//                     <p className='text-[16px] text-[#72718F] font-Josefin_Sans font-medium py-2'>More off this less hello samlande lied much
//                     over tightly circa horse taped mightly</p>
//                     <h5 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold underline pb-5'>Read More</h5>
//                 </div>
//             </div>
//             <div className="w-[32%] bg-[#ffffffad] shadow-2xl px-5 rounded-[12px]">
//                 <img className='w-full' src={images33} alt="" />
//                 <div className="flex items-center gap-16 py-5  ">
//                  <div className="flex gap-2 items-center text-[14px] text-[#151875] font-Josefin_Sans font-medium">
//                  <ImPen className='text-red-900' />
//                  <h4 > SaberAli</h4>
//                  </div>
//                     <div className="flex gap-2 items-center text-[14px] text-[#151875] font-Josefin_Sans font-medium">
//                     <FaCalendarCheck className='text-yellow-500' /> 
//                     <h4> 21 August,2020</h4>
//                     </div>
//                 </div>
//                 <div className="">
//                     <h4 className='text-[18px] text-[#151875] font-Josefin_Sans font-semibold'>Top esssential Trends in 2021</h4>
//                     <p className='text-[16px] text-[#72718F] font-Josefin_Sans font-medium py-2'>More off this less hello samlande lied much
//                     over tightly circa horse taped mightly</p>
//                     <h5 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold underline pb-5'>Read More</h5>
//                 </div>
//             </div>
//         </div>
//     </Container>
//    </section>
//   )
// }

// export default NinePart

import React from 'react';
import Container from './Container';
import images31 from "../assets/images31.png";
import images32 from "../assets/images32.png";
import images33 from "../assets/images33.png";
import { ImPen } from "react-icons/im";
import { FaCalendarCheck } from "react-icons/fa";

const NinePart = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-100 to-gray-50">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-[32px] md:text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans">
            Latest Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[images31, images32, images33].map((image, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  src={image}
                  alt={`Blog ${index + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-5 rounded-t-lg translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center justify-between text-sm text-[#151875] font-Josefin_Sans font-medium">
                  <div className="flex items-center gap-2">
                    <ImPen className="text-red-900" />
                    <span>SaberAli</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarCheck className="text-yellow-500" />
                    <span>21 August, 2020</span>
                  </div>
                </div>

                <h4 className="text-lg text-[#1A0B5B] font-semibold mt-4 mb-2 transition-colors hover:text-red-700">
                  Top Essential Trends in 2021
                </h4>
                <p className="text-sm text-[#72718F] mb-4">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly.
                </p>
                <button className="text-sm text-[#1A0B5B] font-semibold underline hover:text-red-700 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NinePart;

