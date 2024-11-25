// import React from 'react'
// import Container from './Container'
// import images25 from "../assets/images25.png"
// import images26 from "../assets/images26.png"
// import images27 from "../assets/images27.png"
// import images28 from "../assets/images28.png"

// const SeventhPart = () => {
//   return (
//    <section>
//     <Container>
//     <div className="text-center">
//             <h2 className='text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans'>Top Categories</h2>
//          </div>

//          <div className="flex items-center text-center justify-around bg-[#FFFF]  py-5 px-5">
//          <div className="w-[24%] py-10">
//          <img className='bg-[#F5F6F8]  w-[300px] h-[300px] rounded-full py-5 px-5' src={images25} alt="" />
//          <div className="pr-10 py-5   cursor-pointer">
//           <h2 className='text-[18px] text-[#151875] font-Lato font-bold  '>Cantilever chair</h2>
//           <div className="flex text-center justify-center gap-5">
//           <h4 className='text-[14px] text-[#151875] font-Lato font-bold  '>$26.00 </h4>
//           <h3 className='text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through  '>$42.00</h3>
//           </div>
         
//         </div>

//           </div>
//           <div className="w-[24%] py-10">
//          <img className='bg-[#F5F6F8]  w-[300px] h-[300px] rounded-full py-5 px-5' src={images26} alt="" />
//          <div className="pr-10 py-5   cursor-pointer">
//           <h2 className='text-[18px] text-[#151875] font-Lato font-bold  '>Cantilever chair</h2>
//           <div className="flex text-center justify-center gap-5">
//           <h4 className='text-[14px] text-[#151875] font-Lato font-bold  '>$26.00 </h4>
//           <h3 className='text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through  '>$42.00</h3>
//           </div>
         
//         </div>

//           </div>
//           <div className="w-[24%] py-10">
//          <img className='bg-[#F5F6F8]  w-[300px] h-[300px] rounded-full py-5 px-5' src={images27} alt="" />
//          <div className="pr-10 py-5   cursor-pointer">
//           <h2 className='text-[18px] text-[#151875] font-Lato font-bold  '>Cantilever chair</h2>
//           <div className="flex text-center justify-center gap-5">
//           <h4 className='text-[14px] text-[#151875] font-Lato font-bold  '>$26.00 </h4>
//           <h3 className='text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through  '>$42.00</h3>
//           </div>
         
//         </div>

//           </div>
//           <div className="w-[24%] py-10">
//          <img className='bg-[#F5F6F8]  w-[300px] h-[300px] rounded-full py-5 px-5' src={images28} alt="" />
//          <div className="pr-10 py-5   cursor-pointer">
//           <h2 className='text-[18px] text-[#151875] font-Lato font-bold  '>Cantilever chair</h2>
//           <div className="flex text-center justify-center gap-5">
//           <h4 className='text-[14px] text-[#151875] font-Lato font-bold  '>$26.00 </h4>
//           <h3 className='text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through  '>$42.00</h3>
//           </div>
         
//         </div>

//           </div>
     
        

//          </div>
//     </Container>
//    </section>
//   )
// }

// export default SeventhPart



import React from 'react';
import Container from './Container';
import images25 from "../assets/images25.png";
import images26 from "../assets/images26.png";
import images27 from "../assets/images27.png";
import images28 from "../assets/images28.png";

const SeventhPart = () => {
  return (
    <section>
      <Container>
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-[32px] md:text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans">Top Categories</h2>
        </div>

        {/* Card Section */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 bg-[#FFFF] py-5 px-3">
          {/* Card 1 */}
          <div className="hover-card w-[90%] sm:w-[45%] lg:w-[24%] max-w-[300px] py-5">
            <div className="image-wrapper bg-[#F5F6F8] w-full h-[300px] rounded-full py-5 px-5 overflow-hidden">
              <img
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                src={images25}
                alt="Cantilever Chair"
              />
            </div>
            <div className="details py-5 cursor-pointer text-center">
              <h2 className="text-[18px] text-[#151875] font-Lato font-bold">Mini LCW Chair</h2>
              <div className="flex justify-center gap-2 mt-2">
                <h4 className="text-[14px] text-[#151875] font-Lato font-bold">$56.00</h4>
                <h3 className="text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through">$92.00</h3>
              </div>
            </div>
          </div>

          {/* Repeat for additional cards */}
          {[images26, images27, images28].map((image, index) => (
            <div key={index} className="hover-card w-[90%] sm:w-[45%] lg:w-[24%] max-w-[300px] py-5">
              <div className="image-wrapper bg-[#F5F6F8] w-full h-[300px] rounded-full py-5 px-5 overflow-hidden">
                <img
                  className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                  src={image}
                  alt="Cantilever Chair"
                />
              </div>
              <div className="details py-5 cursor-pointer text-center">
                <h2 className="text-[18px] text-[#151875] font-Lato font-bold">Mini LCW Chair</h2>
                <div className="flex justify-center gap-2 mt-2">
                  <h4 className="text-[14px] text-[#151875] font-Lato font-bold">$56.00</h4>
                  <h3 className="text-[14px] text-[rgba(21,24,117,0.3)] font-Lato font-bold line-through">$92.00</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SeventhPart;


