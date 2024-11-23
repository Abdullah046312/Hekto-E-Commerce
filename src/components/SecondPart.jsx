// import React from 'react'
// import Container from './Container'
// import images4 from "../assets/images4.png"
// import images5 from "../assets/images5.png"
// import images6 from "../assets/images6.png"
// import images7 from "../assets/images7.png"
// import images8 from "../assets/images8.png"
// import images9 from "../assets/images9.png"

// const SecondPart = () => {
//   return (
//    <section className='p-5'>
//     <Container>
//     <div className="text-center">
//             <h2 className='text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans'>Leatest Products</h2>
//         </div>

//         <div className="w-full hidden md:flex justify-center text-center pt-5">
//             <ul className="flex gap-5 cursor-pointer">
//               <li className="text-[18px] text-[#151875] font-Lato font-medium hover:text-[#FB2E86] hover:underline">New Arrival</li>
//               <li className="text-[18px] text-[#151875] font-Lato font-medium hover:text-[#FB2E86] hover:underline">Best Seller</li>
//               <li className="text-[18px] text-[#151875] font-Lato font-medium hover:text-[#FB2E86] hover:underline">Featured</li>
//               <li className="text-[18px] text-[#151875] font-Lato font-medium hover:text-[#FB2E86] hover:underline">Special Offer</li>
              
//             </ul>
//           </div>

//           <div className="flex pt-5 justify-between">
//             <div className="w-[32%]">
//               <div className="">
//               <img className='bg-[#F7F7F7] p-5 w-[100%] h-[400px]' src={images4} alt="" />
//             <div className="flex gap-52 pt-3">
//             <h2 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold'>Comfort Handy Craft</h2>
//             <h4 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold'>$42.00   </h4>
            
//             </div>
//               </div>

//             </div>
//             <div className="w-[32%]">
//               <div className="">
//               <img className='bg-[#F7F7F7] p-5 w-[100%] h-[400px]' src={images5} alt="" />
//             <div className="flex gap-64 pt-3">
//             <h2 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold'>Comfort Handy Craft</h2>
//             <h4 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold'>$42.00   </h4>
            
//             </div>
//               </div>

//             </div>
//             <div className="w-[32%]">
//               <div className="">
//               <img className='bg-[#F7F7F7] p-5 w-[100%] h-[400px]' src={images6} alt="" />
//             <div className="flex gap-52 pt-3">
//             <h2 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold'>Comfort Handy Craft</h2>
//             <h4 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold'>$42.00   </h4>
            
//             </div>
//               </div>

//             </div>
//           </div>
//           <div className="flex pt-5 justify-between">
//             <div className="w-[32%]">
//               <div className="">
//               <img className='bg-[#F7F7F7] p-5 w-[100%] h-[400px] ' src={images7} alt="" />
//             <div className="flex gap-52 pt-3">
//             <h2 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold'>Comfort Handy Craft</h2>
//             <h4 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold'>$42.00   </h4>
            
//             </div>
//               </div>

//             </div>
//             <div className="w-[32%]">
//               <div className="">
//               <img className='bg-[#F7F7F7] p-5 w-[100%] h-[400px]' src={images8} alt="" />
//             <div className="flex gap-52 pt-3">
//             <h2 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold'>Comfort Handy Craft</h2>
//             <h4 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold'>$42.00   </h4>
            
//             </div>
//               </div>

//             </div>
//             <div className="w-[32%]">
//               <div className="">
//               <img className='bg-[#F7F7F7] p-5 w-[100%] h-[400px]' src={images9} alt="" />
//             <div className="flex gap-52 pt-3">
//             <h2 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold'>Comfort Handy Craft</h2>
//             <h4 className='text-[16px] text-[#151875] font-Josefin_Sans font-semibold'>$42.00   </h4>
            
//             </div>
//               </div>

//             </div>
//           </div>
//     </Container>
//    </section>
//   )
// }

// export default SecondPart

import React from 'react';
import Container from './Container';
import images4 from '../assets/images4.png';
import images5 from '../assets/images5.png';
import images6 from '../assets/images6.png';
import images7 from '../assets/images7.png';
import images8 from '../assets/images8.png';
import images9 from '../assets/images9.png';

const SecondPart = () => {
  const products = [images4, images5, images6, images7, images8, images9];

  return (
    <section className="p-5">
      <Container>
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-[32px] md:text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans">
            Latest Products
          </h2>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex justify-center text-center ">
          <ul className="flex gap-5 cursor-pointer">
            <li className="text-[18px] text-[#151875] font-Lato font-medium hover:text-[#FB2E86] hover:underline">
              New Arrival
            </li>
            <li className="text-[18px] text-[#151875] font-Lato font-medium hover:text-[#FB2E86] hover:underline">
              Best Seller
            </li>
            <li className="text-[18px] text-[#151875] font-Lato font-medium hover:text-[#FB2E86] hover:underline">
              Featured
            </li>
            <li className="text-[18px] text-[#151875] font-Lato font-medium hover:text-[#FB2E86] hover:underline">
              Special Offer
            </li>
          </ul>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
          {products.map((product, index) => (
            <div key={index} className="w-full">
              <div>
                <img
                  className="bg-[#F7F7F7] p-5 w-full h-[300px] lg:h-[400px] object-contain"
                  src={product}
                  alt={`Product ${index + 1}`}
                />
                <div className="flex justify-between items-center pt-3">
                  <h2 className="text-[14px] md:text-[16px] text-[#151875] font-Josefin_Sans font-semibold">
                    Comfort Handy Craft
                  </h2>
                  <h4 className="text-[14px] md:text-[16px] text-[#151875] font-Josefin_Sans font-semibold">
                    $42.00
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SecondPart;

