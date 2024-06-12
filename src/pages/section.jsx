import React from 'react';
import { FaCode, FaInstagram, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export const Introduce = () => (
  <div id='introduce' className='flex-grow flex justify-center 
  px-36 items-center w-full min-h-screen bg-hero-pattern bg-center bg-cover'>
    <div className='w-full ml-16 h-fit p-2'>
      <h1 className='text-white text-6xl'>Hello There!</h1>
      <h1 className='text-white text-6xl'>I'M Muhamad Jibril Muqodas</h1>
      <div className='flex w-fit gap-3 mt-8'>
        <a href="" className='text-xl text-[#e1306c] hover:text-white'><FaInstagram/></a>
        <a href="" className='text-xl text-[#666666]'><FaGithub/></a>
        <a href="" className='text-xl text-[#0077B5]'><FaLinkedin/></a>
        <a href="" className='text-xl text-[#3b5998]'><FaFacebook/></a>
      </div>
    </div>
  </div>
);

export const About = () => (
  <div id='about' className='flex-grow flex justify-center mx-auto items-center w-full lg:max-w-2xl min-h-screen bg-slate-600'>
    <div className='w-full max-w-2xl lg:ml-16 '>
      <h1 className='text-white'>About page</h1>
      <p className='text-white'>Hello page</p>
    </div>
  </div>
);
export const Skills = () => (
  <div id='skils' className='flex-grow flex justify-center mx-auto items-center w-full lg:max-w-2xl min-h-screen bg-slate-600'>
    <div className='w-full max-w-2xl lg:ml-16 '>
      <h1 className='text-white'>Skills</h1>
      <p className='text-white'>Hello</p>
    </div>
  </div>
);
export const Projects = () => (
  <div id='projects' className='flex-grow flex justify-center mx-auto items-center w-full lg:max-w-2xl min-h-screen bg-slate-600'>
    <div className='w-full max-w-2xl lg:ml-16 '>
      <h1 className='text-white'>Project</h1>
      <p className='text-white'>Hello</p>
    </div>
  </div>
);
