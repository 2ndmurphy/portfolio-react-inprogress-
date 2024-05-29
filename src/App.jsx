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
    <main className="flex flex-col w-full min-h-screen bg-slate-500 mx-auto">
      {/* Navbar */}
      <div className="md:hidden bg-rose-500 p-4 flex justify-between items-center">
        <div className="text-white font-bold">Logo</div>
        <button onClick={toggleNavbar} className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-rose-500 p-4">
          <nav className="mt-4">
            <ul>
              <li className="p-2 text-white" onClick={closeNavbar}>Item 1</li>
              <li className="p-2 text-white" onClick={closeNavbar}>Item 2</li>
              <li className="p-2 text-white" onClick={closeNavbar}>Item 3</li>
              <li className="p-2 text-white" onClick={closeNavbar}>Item 4</li>
            </ul>
          </nav>
        </div>
      )}

      {/* Sidebar */}
      <div className="hidden md:block relative flex-1 min-h-screen">
        <div className="fixed top-0 left-0 h-full w-64 bg-rose-500 z-50 overflow-hidden">
          <header className="w-full bg-slate-400 p-4">
            <h1>Logo and header</h1>
          </header>
          <nav className="mt-4">
            <ul>
              <li className="p-2">Item 1</li>
              <li className="p-2">Item 2</li>
              <li className="p-2">Item 3</li>
              <li className="p-2">Item 4</li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Section */}
      <section className="flex-grow w-full px-4 bg-[#e7e79f]">
        <div className='block w-full max-w-4xl min-h-screen bg-slate-600 mx-auto md:mx-96 px-4 py-20'>
          <h1 className="text-4xl font-bold text-white">Welcome to Open Library</h1>
          <p className="text-lg mt-2 text-white">Explore millions of books from around the world</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 rounded text-white">Explore Now</button>
        </div>
      </section>
    </main>
  );
}

export default App;
