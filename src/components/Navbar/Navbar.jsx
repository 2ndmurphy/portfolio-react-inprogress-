import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="md:flex max-w-96 justify-center items-center mx-auto">
      <div className="hidden md:flex w-full px-5 md:py-3 rounded-3xl bg-[#FFFFF0]">
        <div className='flex-1 justify-center items-center'>
          <nav className='flex justify-evenly items-center text-center text-sm font-mono'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Blogs</a>
            <a href="">Project</a>
            <a href="">Contact</a>
          </nav>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="p-2 focus:outline-none">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`block md:hidden fixed top-0 left-0 w-1/2 h-full bg-[#FFFFF0] p-5 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-5">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className='flex flex-col space-y-4 text-center text-lg font-mono'>
          <a href="" onClick={toggleMenu}>Home</a>
          <a href="" onClick={toggleMenu}>About</a>
          <a href="" onClick={toggleMenu}>Blogs</a>
          <a href="" onClick={toggleMenu}>Project</a>
          <a href="" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
