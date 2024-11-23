// import React from 'react'
// import Container from './Container'
// import images10 from "../assets/images10.png"
// import images11 from "../assets/images11.png"
// import images12 from "../assets/images12.png"
// import images13 from "../assets/images13.png"

// const ThirdPart = () => {
//   return (
//     <section className='p-5'>
//         <Container>
//         <div className="text-center">
//             <h2 className='text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans'>What Shopex Offer!</h2>
//         </div>


//         <div className="flex justify-between pt-5">
//                   <div className="w-[24%] text-center">
//                       <div className="bg-[#c6e7ff42] p-5 flex flex-col items-center justify-center shadow-2xl">
//                           <img className="mb-3" src={images10} alt="Support" />
//                           <h2 className="font-bold text-[22px] text-[#151875] font-Josefin_Sans">24/7 Support</h2>
//                           <p className="text-[16px] text-[rgba(21,24,117,0.31)] font-normal font-Josefin_Sans">
//                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
//                           </p>
//                       </div>
//                   </div>
//                   <div className="w-[24%] text-center">
//                       <div className="bg-[#c6e7ff42] p-5 flex flex-col items-center justify-center shadow-2xl">
//                           <img className="mb-3" src={images11} alt="Support" />
//                           <h2 className="font-bold text-[22px] text-[#151875] font-Josefin_Sans">24/7 Support</h2>
//                           <p className="text-[16px] text-[rgba(21,24,117,0.31)] font-normal font-Josefin_Sans">
//                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
//                           </p>
//                       </div>
//                   </div>
//                   <div className="w-[24%] text-center">
//                       <div className="bg-[#c6e7ff42] p-5 flex flex-col items-center justify-center shadow-2xl">
//                           <img className="mb-3" src={images12} alt="Support" />
//                           <h2 className="font-bold text-[22px] text-[#151875] font-Josefin_Sans">24/7 Support</h2>
//                           <p className="text-[16px] text-[rgba(21,24,117,0.31)] font-normal font-Josefin_Sans">
//                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
//                           </p>
//                       </div>
//                   </div>
//                   <div className="w-[24%] text-center">
//                       <div className="bg-[#c6e7ff42] p-5 flex flex-col items-center justify-center shadow-2xl">
//                           <img className="mb-3" src={images13} alt="Support" />
//                           <h2 className="font-bold text-[22px] text-[#151875] font-Josefin_Sans">24/7 Support</h2>
//                           <p className="text-[16px] text-[rgba(21,24,117,0.31)] font-normal font-Josefin_Sans">
//                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
//                           </p>
//                       </div>
//                   </div>

//         </div>
//         </Container>
//     </section>
//   )
// }

// export default ThirdPart

import React from 'react';
import Container from './Container';
import images10 from '../assets/images10.png';
import images11 from '../assets/images11.png';
import images12 from '../assets/images12.png';
import images13 from '../assets/images13.png';

const ThirdPart = () => {
  const offers = [
    { image: images10, title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
    { image: images11, title: 'Fast Delivery', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
    { image: images12, title: 'Secure Payment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
    { image: images13, title: 'High Quality', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
  ];

  return (
    <section className="p-5">
      <Container>
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-[32px] md:text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans">
            What Shopex Offer!
          </h2>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offers.map((offer, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#c6e7ff42] p-5 flex flex-col items-center justify-center shadow-2xl rounded-lg">
                <img className="mb-3 w-[80px] h-[80px]" src={offer.image} alt={offer.title} />
                <h2 className="font-bold text-[18px] md:text-[22px] text-[#151875] font-Josefin_Sans">
                  {offer.title}
                </h2>
                <p className="text-[14px] md:text-[16px] text-[rgba(21,24,117,0.31)] font-normal font-Josefin_Sans">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ThirdPart;

