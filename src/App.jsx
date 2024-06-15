import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FaCode, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const App = () => {
  return (
    <Router>
      <main className='relative flex w-full min-h-screen bg-sky-400'>
        <div className='hidden fixed top-0 left-0 z-50 w-20 min-h-screen bg-red-600 lg:flex flex-col justify-between items-center px-4 py-6'>
          <div>
            <h1 className='text-white text-4xl font-bold hover:rotate-90'><FaCode /></h1>
          </div>
          <div className='flex flex-col gap-5 text-white text-2xl'>
            <h1 className='hover:scale-150 transition-all duration-300 ease-in-out'><FaTwitter /></h1>
            <h1 className='hover:scale-150 transition-all duration-300 ease-in-out'><FaFacebook /></h1>
            <h1 className='hover:scale-150 transition-all duration-300 ease-in-out'><FaInstagram /></h1>
            <h1 className='hover:scale-150 transition-all duration-300 ease-in-out'><FaYoutube /></h1>
          </div>
        </div>
        
        <div className='relative w-full lg:ml-20 min-h-screen bg-white'>
          <div className='sticky top-0 z-40 w-full h-16 p-4 bg-white flex justify-between items-center shadow-md'>
            <nav className='flex-1'>
              <ul className='flex text-slate-700 gap-6'>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
              </ul>
            </nav>
            <div className='font-bold'>LOGO</div>
          </div>
          
          <div className=''>
            <section className='bg-pink-500 min-h-screen grid grid-cols-1 md:grid-cols-2'>
              <div className='w-full h-full px-4 md:px-8 py-4 bg-red-300'>
                HELLO
              </div>
              <div className='w-full h-full px-4 md:px-8 py-4 bg-red-300'>
                HELLO
              </div>
            </section>
            
            <section className='bg-teal-500 w-full min-h-screen grid grid-cols-1 md:grid-cols-2'>
              INI PAGE 2
            </section>
          </div>
        </div>
      </main>
    </Router>
  );
};

export default App;
