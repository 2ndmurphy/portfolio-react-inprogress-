import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

const Section = ({ id, title, className }) => {
  return (
    <div id={id} className={`w-full h-full flex justify-center items-center ${className}`}>
      <div className='w-full flex justify-center items-center h-screen'>
        <ScrollAnimation animateIn="fadeInUp">
          <h1 className='text-white text-2xl font-mono'>{title}</h1>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Section;
