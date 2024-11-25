import React from 'react'
import Container from './Container'
import images24 from "../assets/images24.png"

const SixthPart = () => {
  return (
    <section>
        <Container>
        <div className="text-center">
            <h2 className='text-[42px] text-[#1A0B5B] font-bold font-Josefin_Sans'>Discount Item</h2>
         </div>
        <div className="text-center">
  <ul className='flex justify-center gap-5 cursor-pointer'>
    <li className='text-[18px] font-Josefin_Sans font-medium hover:text-[#FB2E86] hover:underline'>Wood Chair</li>
    <li className='text-[18px] font-Josefin_Sans font-medium hover:text-[#FB2E86] hover:underline'>Plastic Chair</li>
    <li className='text-[18px] font-Josefin_Sans font-medium hover:text-[#FB2E86] hover:underline'>Sofa Colletion</li>
  </ul>
         </div>

         <div className="w-full text-center justify-center items-center flex">
            <img src={images24} alt="" />
         </div>

        </Container>
    </section>
  )
}

export default SixthPart
