import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function About() {
  return (
    <div className="max-w-2xl mx-auto mt-4 bg-transparent">
      <div className="w-full flex flex-col gap-4 bg-white 
        justify-start md:flex-nowrap px-2 py-3
        rounded-lg shadow-md">
        <h1 className="text-xl md:text-2xl text-start">ABOUT ME</h1>
        <div className="w-auto overflow-hidden bg-orange-100 rounded-md p-2">
          <p className="text-start text-base-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Ut laboriosam velit repellendus eaque sint eligendi aspernatur, 
            iure deleniti reiciendis ea optio voluptas natus unde voluptatem 
            earum eveniet distinctio accusantium quod.
          </p>
          <div>found me in</div>
        </div>
      </div>
    </div>
  );
}

function Blogs() {
  return (
    <div className="max-w-2xl mx-auto mt-4 bg-transparent">
      <div className="w-full flex flex-col gap-4 bg-white 
        justify-start md:flex-nowrap px-2 py-3
        rounded-lg shadow-md">
        <h1 className="text-xl md:text-2xl text-start">BLOGS</h1>
        <div className="w-auto overflow-hidden bg-slate-400 rounded-md p-2">
          <p className="text-start text-white">
            Blog content goes here.
          </p>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="max-w-2xl mx-auto mt-4 bg-transparent">
      <div className="w-full flex flex-col gap-4 bg-white 
        justify-start md:flex-nowrap px-2 py-3
        rounded-lg shadow-md">
        <h1 className="text-xl md:text-2xl text-start">SKILLS</h1>
        <div className="w-auto overflow-hidden bg-slate-400 rounded-md p-2">
          <p className="text-start text-white">
            Skills content goes here.
          </p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="max-w-2xl mx-auto mt-4 bg-transparent">
      <div className="w-full flex flex-col gap-4 bg-white 
        justify-start md:flex-nowrap px-2 py-3
        rounded-lg shadow-md">
        <h1 className="text-xl md:text-2xl text-start">PROJECTS</h1>
        <div className="w-auto overflow-hidden bg-slate-400 rounded-md p-2">
          <p className="text-start text-white">
            Projects content goes here.
          </p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="max-w-2xl mx-auto mt-4 bg-transparent">
      <div className="w-full flex flex-col gap-4 bg-white 
        justify-start md:flex-nowrap px-2 py-3
        rounded-lg shadow-md">
        <h1 className="text-xl md:text-2xl text-start">CONTACT</h1>
        <div className="w-auto overflow-hidden bg-slate-400 rounded-md p-2">
          <p className="text-start text-white">
            Contact content goes here.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <main>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <div className='flex justify-start w-full'>
              <label 
                htmlFor="my-drawer-2" 
                className="btn btn-slate-300 rounded-lg hover:ring-2 hover:ring-white p-0 m-4 lg:hidden">
                <div className='flex flex-col p-3 gap-1 h-auto w-full'>
                  <span className='w-6 h-1 bg-slate-700'></span>
                  <span className='w-6 h-1 bg-slate-700'></span>
                  <span className='w-6 h-1 bg-slate-700'></span>
                </div>
              </label>
            </div>
          
            <div className="block w-full px-4">
              <div className="max-w-2xl bg-transparent mx-auto">
                <div className="w-full flex gap-4 py-3 rounded-box shadow-md px-2 bg-white">
                  <div className='w-[100px] h-[100px] overflow-hidden rounded-lg'>
                    <img src="https://i.pinimg.com/736x/0b/c3/85/0bc385e4b194f2e85c6071bb1c480a53.jpg" alt="" width={100} height={100}/>
                  </div>
                  <div>
                    <h1 className="text-xl md:text-3xl">Hello There!👋</h1>
                    <h1 className="text-sm md:text-md">I'm, Student of High School 01 Jakarta</h1>
                  </div>
                </div>
              </div>
            
              <div className="max-w-2xl mx-auto bg-white mt-4 rounded-b-lg shadow-md px-2">
                <div className="text-sm breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">About</Link>
                    </li> 
                    <li>
                      <Link to="/blogs">Blogs</Link>
                    </li> 
                    <li>
                      <Link to="/skills">Skills</Link>
                    </li> 
                    <li>
                      <Link to="/projects">Projects</Link>
                    </li> 
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li> 
                  </ul>
                </div>
              </div>
            
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <div className="menu p-4 w-80 min-h-full text-base-content bg-orange-100">
              {/* Sidebar content here */}
              <div className='w-full h-64 p-3 bg-white rounded-box'>
                <div className='flex justify-start items-center gap-3 py-3 border-b-2'>
                  <div className='w-[50px] h-[50px] overflow-hidden rounded-full'>
                    <img 
                      src="https://i.pinimg.com/736x/0b/c3/85/0bc385e4b194f2e85c6071bb1c480a53.jpg" 
                      alt="" 
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className='font-mono'>
                    <h1 className='text-md'>Murphy Lawden</h1>
                    <p className='text-sm font-medium'>Front-End Developer</p>
                  </div>
                </div>
              
                <ul className='w-full'>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
