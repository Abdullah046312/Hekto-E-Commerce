// import React from 'react'
// import Container from './Container'
// import { FaFacebook } from "react-icons/fa6";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaTwitterSquare } from "react-icons/fa";




// const FooterPart = () => {
//   return (
//    <>
//     <section className='bg-[#EEEFFB] py-16  mt-20'>
//     <Container>
//         <div className="flex items-center ">
//             <div className="w-[35%]">
//                 <h2 className='text-[38px] text-[#000000] font-Josefin_Sans font-bold pb-5'>Hekto</h2>
//                 <div className=" flex items-center relative">
//             <input
//               className="pl-4 h-[40px] w-[100%] md:w-[200px] bg-[#D9D9D9] focus:outline-none rounded-l-md"
//               type="text"
//               placeholder="Enter Email Address"
//             />
//             <div className="relative w-[100px] bg-[#FB2E86] rounded-r-md">
//               <input
//                 className="h-[40px] w-full bg-[#FB2E86] focus:outline-none text-white rounded-r-md"
//                 type="text"
//               />
//               <div className="absolute top-[50%] right-[20px] transform -translate-y-1/2 text-[16px] text-white">
//               <h4>Sign Up</h4>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <h4 className='text-[16px]n text-[#8A8FB9] font-Josefin_Sans py-2 mt-4'>Contact Info</h4>
//             <h4 className='text-[16px]n text-[#8A8FB9] font-Josefin_Sans'>17 Princess Road, London, Greater London NW1 8JR, UK</h4>
//           </div>
//             </div>

//             <div className="w-[25%]">
//                 <h2 className='text-[22px] text-[#000000] font-Josefin_Sans font-semibold pb-4'>Catagories</h2>
//                 <h5 className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal'>Laptops & Computers</h5>
//                 <h5  className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal mt-2'>Cameras & Photography</h5>
//                 <h5  className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>Smart Phones & Tablets</h5>
//                 <h5  className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>Video Games & Consoles</h5>
//                 <h5  className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>Waterproof Headphones</h5>
//                 <h4  className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'></h4>
//             </div>
//             <div className="w-[25%]">
//                 <h2 className='text-[22px] text-[#000000] font-Josefin_Sans font-semibold pb-4'>Customer Care</h2>
//                 <h5 className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>My Account</h5>
//                 <h5 className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>Discount</h5>
//                 <h5 className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>Returns</h5>
//                 <h5 className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>Orders History</h5>
//                 <h5 className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>Order Tracking</h5>
              
//             </div>
//             <div className="w-[25%]">
//                 <h2 className='text-[22px] text-[#000000] font-Josefin_Sans font-semibold pb-4'>Pages</h2>
//                 <h5 className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>Blog</h5>
//                 <h5 className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>CBrowse the Shop</h5>
//                 <h5 className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>Category</h5>
//                 <h5 className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>Pre-Built Pages</h5>
//                 <h5 className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>Visual Composer Elements</h5>
//                 <h5 className='text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal  mt-2'>WooCommerce Pages</h5>
              
//             </div>

//         </div>
//     </Container>
//    </section>

//    <section className='bg-[#E7E4F8] py-5'>
//     <Container>
//         <div className="flex justify-around items-center">
//         <div className="">
//         <h4 className='text-[16px] text-[#9DA0AE] font-Josefin_Sans font-semibold'>©Webecy - All Rights Reserved</h4>
//         <h3 className='text-[16px] text-[#9DA0AE] font-Josefin_Sans font-semibold'>Design By Abdullah Al-Mamun</h3>
//         </div>
//         <div className="flex items-center gap-5 text-[20px] text-[#151875] font-bold">
//         <h4><FaFacebook /></h4>
//         <h4><FaSquareInstagram /></h4>
//         <h4> <FaTwitterSquare /></h4>
      
//         </div>

//         </div>
//     </Container>
//    </section>
//    </>
//   )
// }

// export default FooterPart



import React from 'react';
import Container from './Container';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterPart = () => {
  return (
    <>
      {/* Main Footer Section */}
      <section className="bg-[#EEEFFB] py-16 mt-20">
        <Container>
          <div className="flex flex-wrap justify-between">
            {/* Hekto and Subscription */}
            <div className="w-full lg:w-[35%] mb-8 lg:mb-0">
              <h2 className="text-[38px] text-[#000000] font-Josefin_Sans font-bold pb-5">
                Hekto
              </h2>
              <div className="flex items-center relative mb-4">
                <input
                  className="pl-4 h-[40px] w-[70%] md:w-[40%] bg-[#D9D9D9] focus:outline-none rounded-l-md"
                  type="text"
                  placeholder="Enter Email Address"
                />
                <button className="h-[40px] w-[30%] md:w-[20%] bg-[#FB2E86] text-white rounded-r-md text-center font-medium">
                  Sign Up
                </button>
              </div>
              <div>
                <h4 className="text-[16px] text-[#8A8FB9] font-Josefin_Sans py-2">
                  Contact Info
                </h4>
                <p className="text-[16px] text-[#8A8FB9] font-Josefin_Sans">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
            </div>

            {/* Categories Section */}
            <div className="w-full lg:w-[20%] mb-8 lg:mb-0">
              <h2 className="text-[22px] text-[#000000] font-Josefin_Sans font-semibold pb-4">
                Categories
              </h2>
              {[
                "Laptops & Computers",
                "Cameras & Photography",
                "Smart Phones & Tablets",
                "Video Games & Consoles",
                "Waterproof Headphones",
              ].map((item, index) => (
                <h5
                  key={index}
                  className="text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal mt-2 hover:text-[#FB2E86] transition duration-300 cursor-pointer"
                >
                  {item}
                </h5>
              ))}
            </div>

            {/* Customer Care Section */}
            <div className="w-full lg:w-[20%] mb-8 lg:mb-0">
              <h2 className="text-[22px] text-[#000000] font-Josefin_Sans font-semibold pb-4">
                Customer Care
              </h2>
              {[
                "My Account",
                "Discount",
                "Returns",
                "Orders History",
                "Order Tracking",
              ].map((item, index) => (
                <h5
                  key={index}
                  className="text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal mt-2 hover:text-[#FB2E86] transition duration-300 cursor-pointer"
                >
                  {item}
                </h5>
              ))}
            </div>

            {/* Pages Section */}
            <div className="w-full lg:w-[20%]">
              <h2 className="text-[22px] text-[#000000] font-Josefin_Sans font-semibold pb-4">
                Pages
              </h2>
              {[
                "Blog",
                "Browse the Shop",
                "Category",
                "Pre-Built Pages",
                "Visual Composer Elements",
                "WooCommerce Pages",
              ].map((item, index) => (
                <h5
                  key={index}
                  className="text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal mt-2 hover:text-[#FB2E86] transition duration-300 cursor-pointer"
                >
                  {item}
                </h5>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom Footer Section */}
      <section className="bg-[#E7E4F8] py-5">
        <Container>
          <div className="flex flex-wrap justify-around items-center">
            {/* Copyright Section */}
            <div className="w-full lg:w-auto text-center lg:text-left mb-4 lg:mb-0">
              <h4 className="text-[16px] text-[#9DA0AE] font-Josefin_Sans font-semibold">
                © Webecy - All Rights Reserved
              </h4>
              <p className="text-[16px] text-[#9DA0AE] font-Josefin_Sans">
                Design By Abdullah Al-Mamun
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center gap-5 text-[20px] text-[#151875]">
              {[
                { icon: <FaFacebook />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="hover:text-[#FB2E86] transition duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FooterPart;

