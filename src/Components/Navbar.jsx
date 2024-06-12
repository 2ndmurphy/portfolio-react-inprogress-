import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='hidden fixed top-0 left-0 md:flex md:flex-col w-16 h-full bg-black bg-opacity-10 z-50 backdrop-blur-sm'>
      <div className='p-5 rotate-90 flex gap-x-10'>
        <Link to="/" className='text-white text-xl'><FaHome /></Link>
        <Link to="/about" className='text-white text-xl'><FaUser /></Link>
        <Link to="/contact" className='text-white text-xl'><FaEnvelope /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
