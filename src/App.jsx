import React from 'react';
import { FaCode } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const App = () => {
  return (
    <main className='relative w-full h-screen'>
      <nav className='hidden fixed top-0 left-0 md:flex flex-col w-16 h-full bg-slate-500 bg-opacity-30 z-50'>
        <h1 className='text-white p-5 text-xl'><FaCode /></h1>
      </nav>
      
      <nav className='lg:hidden fixed top-0 left-0 flex 
      justify-center items-center w-full h-fit bg-transparent 
      z-50 p-6'>
        <button className='text-white bg-slate-600 
        bg-opacity-20 text-2xl p-4 rounded-3xl focus:ring-2 
        focus:ring-slate-800'><FaCode /></button>
      </nav>
      
      <div className='w-full h-full'>
        <div className='w-full h-full flex justify-center items-center bg-hero-pattern bg-cover bg-center bg-fixed'>
          <div className='w-full flex justify-center items-center lg:max-w-2xl h-screen'>
            <h1 className='text-white text-2xl font-mono'>Welcome Strangers!</h1>
          </div>
        </div>
        <div className='w-full h-full flex justify-center items-center bg-second-pattern bg-cover bg-center bg-fixed'>
          <div className='w-full flex justify-center items-center lg:max-w-2xl h-screen'>
            <ScrollAnimation animateIn='fadeInUp'>
              <h1 className='text-white text-2xl font-mono'>Get To Know Me!</h1>
            </ScrollAnimation>
          </div>
        </div>
        <div className='w-full h-full flex justify-center items-center bg-third-pattern bg-cover bg-center bg-fixed'>
          <div className='w-full flex justify-center items-center lg:max-w-2xl h-screen'>
            <ScrollAnimation animateIn="fadeInUp">
              <h1 className='text-white text-2xl font-mono'>Build Up Colaboration</h1>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
