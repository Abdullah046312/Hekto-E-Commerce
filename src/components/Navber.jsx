// import React from 'react';
// import Container from '../components/Container';
// import logo from "../assets/logo.png";
// import { IoSearch } from "react-icons/io5";

// const Navber = () => {
//   return (
//     <section>
//       <Container>
//         <div className="flex items-center justify-between p-5">
//           {/* Logo Section */}
//           <div className="w-1/3">
//             <img src={logo} alt="Logo" className="w-auto h-10" />
//           </div>

//           {/* Navigation Menu */}
//           <div className="w-1/3 hidden md:flex justify-center">
//             <ul className="flex gap-5">
//               <li className="text-[16px] text-[#0D0E43] font-Lato font-medium hover:text-[#FB2E86]">Home</li>
//               <li className="text-[16px] text-[#0D0E43] font-Lato font-medium hover:text-[#FB2E86]">Pages</li>
//               <li className="text-[16px] text-[#0D0E43] font-Lato font-medium hover:text-[#FB2E86]">Products</li>
//               <li className="text-[16px] text-[#0D0E43] font-Lato font-medium hover:text-[#FB2E86]">Blog</li>
//               <li className="text-[16px] text-[#0D0E43] font-Lato font-medium hover:text-[#FB2E86]">Shop</li>
//               <li className="text-[16px] text-[#0D0E43] font-Lato font-medium hover:text-[#FB2E86]">Contact</li>
//             </ul>
//           </div>

//           {/* Search Bar Section */}
//           <div className="w-1/3 flex items-center relative">
//             <input
//               className="pl-4 h-[40px] w-[100%] md:w-[266px] bg-[#D9D9D9] focus:outline-none rounded-l-md"
//               type="text"
//               placeholder="Search Products"
//             />
//             <div className="relative w-[50px] bg-[#FB2E86] rounded-r-md">
//               <input
//                 className="h-[40px] w-full bg-[#FB2E86] focus:outline-none text-white rounded-r-md"
//                 type="text"
//               />
//               <IoSearch className="absolute top-[50%] right-[10px] transform -translate-y-1/2 text-[20px] text-white" />
//             </div>
//           </div>
//         </div>
        
//         {/* Mobile Navbar Menu */}
//         <div className="md:hidden flex justify-between items-center">
//           <div className="flex items-center gap-5">
//             <img src={logo} alt="Logo" className="w-10 h-10" />
//             <ul className="flex gap-5">
//               <li className="text-[16px] text-[#0D0E43] font-Lato font-medium">Home</li>
//               <li className="text-[16px] text-[#0D0E43] font-Lato font-medium">Pages</li>
//               <li className="text-[16px] text-[#0D0E43] font-Lato font-medium">Products</li>
//               <li className="text-[16px] text-[#0D0E43] font-Lato font-medium">Blog</li>
//               <li className="text-[16px] text-[#0D0E43] font-Lato font-medium">Shop</li>
//               <li className="text-[16px] text-[#0D0E43] font-Lato font-medium">Contact</li>
//             </ul>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Navber;


import React, { useState } from 'react';
import Container from '../components/Container';
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="bg-white sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between p-5">
          {/* Logo Section */}
          <div className="w-1/3">
            <img src={logo} alt="Logo" className="w-auto h-10" />
          </div>

          {/* Navigation Menu */}
          <div className="w-1/3 hidden md:flex justify-center">
            <ul className="flex gap-5">
              <li className="text-[16px] text-[#0D0E43] font-Lato font-medium hover:text-[#FB2E86]">Home</li>
              <li className="text-[16px] text-[#0D0E43] font-Lato font-medium hover:text-[#FB2E86]">Pages</li>
              <li className="text-[16px] text-[#0D0E43] font-Lato font-medium hover:text-[#FB2E86]">Products</li>
              <li className="text-[16px] text-[#0D0E43] font-Lato font-medium hover:text-[#FB2E86]">Blog</li>
              <li className="text-[16px] text-[#0D0E43] font-Lato font-medium hover:text-[#FB2E86]">Shop</li>
              <li className="text-[16px] text-[#0D0E43] font-Lato font-medium hover:text-[#FB2E86]">Contact</li>
            </ul>
          </div>

          {/* Search Bar Section */}
          <div className="md:w-1/3 w-[60%] flex items-center relative">
            <input
              className="pl-4 h-[40px] w-[100%] md:w-[266px] bg-[#D9D9D9] focus:outline-none rounded-l-md"
              type="text"
              placeholder="Search Products"
            />
            <div className="relative w-[50px] bg-[#FB2E86] rounded-r-md">
              <input
                className="h-[40px] w-full bg-[#FB2E86] focus:outline-none text-white rounded-r-md"
                type="text"
              />
              <IoSearch className="absolute top-[50%] right-[10px] transform -translate-y-1/2 text-[20px] text-white" />
            </div>
          </div>
        </div>
        
        {/* Mobile Navbar Menu */}
        <div className="md:hidden flex justify-between items-center">
          {/* Logo and Hamburger Icon */}
          <div className="flex items-center gap-5">
            {/* <img src={logo} alt="Logo" className="w-10 h-10" /> */}
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="text-[#0D0E43] text-2xl" />
              ) : (
                <FaBars className="text-[#0D0E43] text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex justify-center items-center bg-white py-4">
            <ul className="flex flex-col gap-5 text-center">
              <li className="text-[16px] text-[#0D0E43] font-Josefin_Sans font-medium hover:text-[#FB2E86]">Home</li>
              <li className="text-[16px] text-[#0D0E43] font-Josefin_Sans font-medium hover:text-[#FB2E86]">Pages</li>
              <li className="text-[16px] text-[#0D0E43] font-Josefin_Sans font-medium hover:text-[#FB2E86]">Products</li>
              <li className="text-[16px] text-[#0D0E43] font-Josefin_Sans font-medium hover:text-[#FB2E86]">Blog</li>
              <li className="text-[16px] text-[#0D0E43] font-Josefin_Sans font-medium hover:text-[#FB2E86]">Shop</li>
              <li className="text-[16px] text-[#0D0E43] font-Josefin_Sans font-medium hover:text-[#FB2E86]">Contact</li>
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Navber;

