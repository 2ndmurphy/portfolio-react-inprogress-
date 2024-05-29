import React, { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <main className='w-full h-full flex flex-col justify-center items-center md:py-10 bg-[#FFFFF0]'>
      <header className='flex justify-evenly py-4 px-3
      items-center w-full md:max-w-md md:py-3 md:px-3 
      md:rounded-3xl bg-orange-200 md:shadow-lg mb-'>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="">Contact</a>
      </header>
      
      {/* section hero */}
      <section className='flex flex-wrap 
      justify-center items-center md:flex-nowrap 
      w-full md:max-w-xl px-3 bg-orange-300 h-64'>
        <div className='flex-1 text-[#FFFFF0]'>
          <h1 className='text-2xl'>Holla There👋!</h1>        
          <h2 className='text-2xl'>I'ma a Front-end dev</h2>      
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, perferendis?</p>
          <button className='px-3 py-2 bg-orange-500 rounded shadow-inner'>
            Download CV
          </button>
        </div>
        <div className='flex-1'>
          <h1>HERO SECTION</h1>        
        </div>
      </section>
      
      {/* About Section */}
      <section className='flex flex-wrap 
      justify-center items-center md:flex-nowrap 
      w-full md:max-w-xl px-3 bg-orange-300 h-64' id='about'>
        <div className='flex-1 text-[#FFFFF0]'>
          <h1 className='text-2xl'>Holla There👋!</h1>        
          <h2 className='text-2xl'>I'ma a Front-end dev</h2>      
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, perferendis?</p>
          <button className='px-3 py-2 bg-orange-500 rounded shadow-inner'>
            Download CV
          </button>
        </div>
        <div className='flex-1'>
          <h1>ABOUT SECTION</h1>        
        </div>
      </section>
      
      {/* Projects Section */}
      <section className='flex flex-wrap 
      justify-center items-center md:flex-nowrap 
      w-full md:max-w-xl px-3 bg-orange-300 h-64' id='projects'>
        <div className='flex-1 text-[#FFFFF0]'>
          <h1 className='text-2xl'>Holla There👋!</h1>        
          <h2 className='text-2xl'>I'ma a Front-end dev</h2>      
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, perferendis?</p>
          <button className='px-3 py-2 bg-orange-500 rounded shadow-inner'>
            Download CV
          </button>
        </div>
        <div className='flex-1'>
          <h1>PROJECTS SECTION</h1>        
        </div>
      </section>
    </main>
  );
}

export default App;
