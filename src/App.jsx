import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

const App = () => {
  React.useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <Router>
      <main className='relative w-full h-screen'>
        <nav className='hidden fixed top-0 left-0 
        md:flex md:flex-col w-16 h-full bg-black
        bg-opacity-10 z-50 backdrop-blur-sm'>
          <div className='p-5 rotate-90 flex gap-x-10'>
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              duration={500} 
              delay={0}
              className="text-white text-xl cursor-pointer"
              activeClass="active">
              Home
            </Link>
            <Link 
              to="about" 
              spy={true} 
              smooth={true} 
              duration={500}
              delay={0}
              className="text-white text-xl cursor-pointer"
              activeClass="active">
              About
            </Link>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              duration={500}
              delay={0}
              className="text-white text-xl cursor-pointer"
              activeClass="active">
              Contact
            </Link>
          </div>
        </nav>
        
        <div className='w-full h-full'>
          <Element name="home" className='w-full h-full flex justify-center items-center bg-hero-pattern bg-cover bg-center bg-fixed'>
            <div className='w-full flex justify-center items-center h-screen'>
              <h1 className='text-white text-2xl font-mono'>Welcome Strangers!</h1>
            </div>
          </Element>
          
          <Element name="about" className='w-full h-full flex justify-center items-center bg-second-pattern bg-cover bg-center bg-fixed'>
            <div className='w-full flex justify-center items-center h-screen'>
              <ScrollAnimation animateIn='fadeInUp'>
                <h1 className='text-white text-2xl font-mono'>Get To Know Me!</h1>
              </ScrollAnimation>
            </div>
          </Element>
          
          <Element name="contact" className='w-full h-full flex justify-center items-center bg-third-pattern bg-cover bg-center bg-fixed'>
            <div className='w-full flex justify-center items-center h-screen'>
              <ScrollAnimation animateIn="fadeInUp">
                <h1 className='text-white text-2xl font-mono'>Build Up Collaboration</h1>
              </ScrollAnimation>
            </div>
          </Element>
        </div>
      </main>
    </Router>
  );
};

export default App;
