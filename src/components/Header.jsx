// import React from 'react';
// import Container from '../components/Container';
// import { AiOutlineMail } from "react-icons/ai";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoMdContact } from "react-icons/io";
// import { FaRegHeart } from "react-icons/fa";
// import { BsCartCheck } from "react-icons/bs";

// const Header = () => {
//   return (
//     <section className='bg-[#7E33E0]'>
//       <Container>
//         <div className="w-full flex items-center flex-col md:flex-row justify-between py-5">
          
//           {/* Left side (Contact Info) */}
//           <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start gap-5 text-[#F1F1F1] text-[14px] md:text-[16px] font-Josefin_Sans">
//             <div className="flex items-center gap-2">
//               <AiOutlineMail />
//               <h4 className=''>mhhasanul@gmail.com</h4>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaPhoneAlt />
//               <h4>(12345)67890</h4>
//             </div>
//           </div>

//           {/* Right side (Language, Currency, Login, Wishlist, Cart) */}
//           <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//             <div className="flex gap-5 text-[#F1F1F1] text-[14px] md:text-[16px] font-Josefin_Sans font-semibold">
//               <ul className="flex gap-3 md:gap-5">
//                 <li className='flex items-center gap-1'>
//                   English <IoIosArrowDown />
//                 </li>
//                 <li className='flex items-center gap-1'>
//                   USD <IoIosArrowDown />
//                 </li>
//                 <li className='flex items-center gap-1'>
//                   Login <IoMdContact />
//                 </li>
//                 <li className='flex items-center gap-1'>
//                   Wishlist <FaRegHeart />
//                 </li>
//                 <li className='text-[#F1F1F1] text-[20px] md:text-[24px]'>
//                   <BsCartCheck />
//                 </li>
//               </ul>
//             </div>
//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// }

// export default Header;


import React from 'react';
import Container from '../components/Container';
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";

const Header = () => {
  return (
    <section className='bg-[#7E33E0]'>
      <Container>
        <div className="w-full flex items-center flex-col md:flex-row justify-between py-5">
          
          {/* Left side (Contact Info) */}
          <div className="w-full pb-2 md:w-1/2 flex items-center justify-center md:justify-start gap-5 text-[#F1F1F1] text-[14px] md:text-[16px] font-Josefin_Sans">
            <div className="flex items-center gap-2">
              <AiOutlineMail />
              <h4 className=''>mhhasanul@gmail.com</h4>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <h4>(12345)67890</h4>
            </div>
          </div>

          {/* Right side (Language, Currency, Login, Wishlist, Cart) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="flex gap-5 text-[#F1F1F1] text-[14px] md:text-[16px] font-Josefin_Sans font-semibold">
              <ul className="flex gap-3 md:gap-5">
                <li className='flex items-center gap-1 cursor-pointer hover:text-[#FB2E86]'>
                  English <IoIosArrowDown />
                </li>
                <li className='flex items-center gap-1 cursor-pointer hover:text-[#FB2E86]'>
                  USD <IoIosArrowDown />
                </li>
                <li className='flex items-center gap-1 cursor-pointer hover:text-[#FB2E86]'>
                  Login <IoMdContact />
                </li>
                <li className='flex items-center gap-1 cursor-pointer hover:text-[#FB2E86]'>
                  Wishlist <FaRegHeart />
                </li>
                <li className='text-[#F1F1F1] text-[20px] md:text-[24px] cursor-pointer hover:text-[#FB2E86]'>
                  <BsCartCheck />
                </li>
              </ul>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Header;
