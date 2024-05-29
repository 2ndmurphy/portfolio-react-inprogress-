import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive : [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <main className='w-full h-full flex flex-col justify-center items-center md:py-10 bg-[hsl(60,3%,93%)]'>
      <header className='flex justify-evenly py-4 px-3
      items-center w-full md:max-w-md md:py-3 md:px-3 
      md:rounded-3xl bg-orange-200 md:shadow-lg z-50'>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="">Contact</a>
      </header>

      <section className='block w-full h-64 max-w-4xl mt-16'>
        <Slider {...settings}>
          <div className="px-4 py-4">
            <div className="bg-white py-4 md:py-3 px-3 h-36 rounded-lg shadow-md ring-2 ring-slate-500">
              <h3 className="text-start text-xl font-serif">High School Student</h3>
              <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Illum consequuntur aperiam dolor?</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="bg-white py-4 md:py-3 px-3 h-36 rounded-lg shadow-md ring-2 ring-slate-500">
              <h3 className="text-start text-xl font-serif">Dreams</h3>
              <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Illum consequuntur aperiam dolor?</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="bg-white py-4 md:py-3 px-3 h-36 rounded-lg shadow-md ring-2 ring-slate-500">
              <h3 className="text-start text-xl font-serif">Hobbies</h3>
              <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Illum consequuntur aperiam dolor?</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="bg-white py-4 md:py-3 px-3 h-36 rounded-lg shadow-md ring-2 ring-slate-500">
              <h3 className="text-start text-xl font-serif">Web Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Illum consequuntur aperiam dolor?</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="bg-white py-4 md:py-3 px-3 h-36 rounded-lg shadow-md ring-2 ring-slate-500">
              <h3 className="text-start text-xl font-serif">Copy Writer</h3>
              <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Illum consequuntur aperiam dolor?</p>
            </div>
          </div>
        </Slider>
      </section>

      {/* About Section */}
      <section className='flex flex-wrap 
      justify-center items-center md:flex-nowrap 
      w-full md:max-w-4xl px-3 bg-orange-300 h-96' id='about'>
        <div className='flex-1 text-[#FFFFF0]'>
          <h1 className='text-2xl'>Holla There👋!</h1>        
          <h2 className='text-2xl'>I'ma a Front-end dev</h2>      
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, perferendis?</p>
          <button className='px-3 py-2 bg-orange-500 rounded shadow-inner'>
            Download CV
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className='flex flex-wrap 
      justify-center items-center md:flex-nowrap 
      w-full md:max-w-4xl px-3 bg-orange-300 h-96' id='about'>
        <div className='flex-1 text-[#FFFFF0]'>
          <h1 className='text-2xl'>Holla There👋!</h1>        
          <h2 className='text-2xl'>I'ma a Front-end dev</h2>      
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, perferendis?</p>
          <button className='px-3 py-2 bg-orange-500 rounded shadow-inner'>
            Download CV
          </button>
        </div>
      </section>
      
    </main>
  );
}

export default App;
