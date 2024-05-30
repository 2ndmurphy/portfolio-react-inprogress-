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
    <main className='w-full h-full flex flex-col justify-center items-center md:py-10 bg-[#F5F0F6] overflow-x-hidden'>
      <header className='flex justify-evenly py-6 px-3 items-center w-full md:max-w-md md:py-3 md:px-3 md:rounded-3xl' style={{ backgroundColor: '#2B4162', color: '#F5F0F6' }}>
        <a href="/" style={{ color: '#F5F0F6' }}>Home</a>
        <a href="#about" style={{ color: '#F5F0F6' }}>About</a>
        <a href="#skills" style={{ color: '#F5F0F6' }}>Skills</a>
        <a href="#projects" style={{ color: '#F5F0F6' }}>Projects</a>
        <a href="" style={{ color: '#F5F0F6' }}>Contact</a>
      </header>

      <section className='block w-full h-64 max-w-4xl mt-16'>
        <Slider {...settings}>
          <div className="px-4 py-4">
            <div className="bg-white py-4 md:py-3 px-3 h-36 rounded-lg shadow-md" style={{ borderColor: '#385F71', borderWidth: '2px' }}>
              <h3 className="text-start text-xl font-serif" style={{ color: '#2B4162' }}>High School Student</h3>
              <p style={{ color: '#385F71' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequuntur aperiam dolor?</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="bg-white py-4 md:py-3 px-3 h-36 rounded-lg shadow-md" style={{ borderColor: '#385F71', borderWidth: '2px' }}>
              <h3 className="text-start text-xl font-serif" style={{ color: '#2B4162' }}>Dreams</h3>
              <p style={{ color: '#385F71' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequuntur aperiam dolor?</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="bg-white py-4 md:py-3 px-3 h-36 rounded-lg shadow-md" style={{ borderColor: '#385F71', borderWidth: '2px' }}>
              <h3 className="text-start text-xl font-serif" style={{ color: '#2B4162' }}>Hobbies</h3>
              <p style={{ color: '#385F71' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequuntur aperiam dolor?</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="bg-white py-4 md:py-3 px-3 h-36 rounded-lg shadow-md" style={{ borderColor: '#385F71', borderWidth: '2px' }}>
              <h3 className="text-start text-xl font-serif" style={{ color: '#2B4162' }}>Web Design</h3>
              <p style={{ color: '#385F71' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequuntur aperiam dolor?</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="bg-white py-4 md:py-3 px-3 h-36 rounded-lg shadow-md" style={{ borderColor: '#385F71', borderWidth: '2px' }}>
              <h3 className="text-start text-xl font-serif" style={{ color: '#2B4162' }}>Copy Writer</h3>
              <p style={{ color: '#385F71' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequuntur aperiam dolor?</p>
            </div>
          </div>
        </Slider>
      </section>

      {/* About Section */}
      <section className='flex flex-wrap justify-center items-center md:flex-nowrap w-full md:max-w-4xl px-4 py-8' style={{ backgroundColor: '#D7B377', height: '96' }} id='about'>
        <div className='flex-1 font-sans font-md' style={{ color: '#F5F0F6' }}>
          <h1 className='text-2xl'>Holla There👋!</h1>        
          <h2 className='text-2xl'>I'm a Muhamad Jibril Muqodas</h2>   
          <p className='text-md text-justify mt-4 mb-4'>
            Saya adalah seorang pengembang 
            front-end yang bersemangat dengan 
            hasrat untuk menciptakan pengalaman 
            web yang menarik dan intuitif.
          </p>
          <p className='text-md text-justify mt-4 mb-4'>
            Dengan latar belakang dalam desain web dan pengembangan, 
            saya berkomitmen untuk mengembangkan situs web yang tidak 
            hanya indah secara visual tetapi juga fungsional dan 
            responsif di berbagai perangkat.
          </p>
          <button className='px-3 py-2 rounded shadow-inner' style={{ backgroundColor: '#8F754F', color: '#F5F0F6' }}>
            Download CV
          </button>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className='flex flex-col md:flex-row 
      justify-center items-center md:flex-nowrap 
      w-full md:max-w-4xl px-4 py-8 bg-[#D7B377]'
      id='skills'>
        <div className='flex-1 mb-4 md:mb-0' style={{ color: '#F5F0F6' }}>
          <h1 className='text-2xl md:text-3xl mb-3 text-center'>Skills</h1>        
          <h2 className='text-xl mb-4'>Check out my skills</h2>      
          <p className='mb-4'>Berikut adalah keterampilan utama yang saya kuasai dalam pengembangan web:</p>
        </div>
        
        <div className='flex justify-center items-center w-full md:w-1/2'>
          <div className='flex flex-col gap-3 p-4 bg-[#F5F0F6] rounded shadow-lg w-full'>
            <div className='flex justify-center items-center gap-3'>
              <span className='text-3xl text-orange-500'><i class='bx bxl-html5'></i></span>
              <progress className="progress progress-info w-full" value={95} max="100"></progress>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <span><i className='bx bxl-css3 text-3xl text-blue-700'></i></span>
              <progress className="progress progress-info w-full" value={80} max="100"></progress>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <span><i className='bx bxl-javascript text-3xl text-yellow-300'></i></span>
              <progress className="progress progress-info w-full" value={56} max="100"></progress>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <span><i className='bx bxl-tailwind-css text-3xl text-blue-400'></i></span>
              <progress className="progress progress-info w-full" value={50} max="100"></progress>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <span><i className='bx bxl-react text-3xl text-blue-500'></i></span>
              <progress className="progress progress-info w-full" value={50} max="100"></progress>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <span><i className='bx bxl-nodejs text-3xl text-green-700'></i></span>
              <progress className="progress progress-info w-full" value={40} max="100"></progress>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='flex flex-wrap 
      justify-center items-center md:flex-nowrap 
      w-full md:max-w-4xl px-4 py-8 bg-[#D7B377]'
      id='projects'>
        <div className='flex-1 h-full' style={{ color: '#F5F0F6' }}>
          <h1 className='text-2xl'>Projects</h1>        
          <h2 className='text-2xl'>Check out my work</h2>      
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, perferendis?</p>
          <button className='px-3 py-2 rounded shadow-inner' style={{ backgroundColor: '#8F754F', color: '#F5F0F6' }}>
            View Projects
          </button>
        </div>
      </section>
      
    </main>
  );
}

export default App;
