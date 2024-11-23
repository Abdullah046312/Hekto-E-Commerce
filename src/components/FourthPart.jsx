// import React from 'react'
// import Container from './Container'
// import images14 from "../assets/images14.png"

// const FourthPart = () => {
//   return (
//    <section className='bg-[#F1F0FF] mt-16'>
//     <Container>
//         <div className="w-full">
//             <img src={images14} alt="" />
//         </div>

//     </Container>

//    </section>
//   )
// }

// export default FourthPart

import React from 'react';
import Container from './Container';
import images14 from '../assets/images14.png';

const FourthPart = () => {
  return (
    <section className="bg-[#F1F0FF] mt-16 py-8">
      <Container>
        <div className="w-full flex justify-center">
          <img 
            src={images14} 
            alt="Promotional Banner or Featured Content" 
            className="w-full max-w-4xl h-auto" 
          />
        </div>
      </Container>
    </section>
  );
};

export default FourthPart;
