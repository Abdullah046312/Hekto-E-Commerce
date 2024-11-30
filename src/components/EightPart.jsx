import React from 'react';
import images29 from "../assets/images29.png";
import images30 from "../assets/images30.png";
import Container from './Container';

const EightPart = () => {
  return (
    <section className="py-5">
     
      <div className="w-full">
        <img
          className="w-full h-[462px] object-cover"
          src={images29}
          alt="Main Banner"
        />
      </div>

      
      <Container>
        <div className="flex justify-center py-5">
          <img
            className="max-w-full h-auto"
            src={images30}
            alt="Secondary Content"
          />
        </div>
      </Container>
    </section>
  );
};

export default EightPart;
