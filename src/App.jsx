function App() {
  return (
    <main>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          
          <div className='flex justify-start w-full'>
            <label 
              htmlFor="my-drawer-2" 
              className="btn btn-slate-500 rounded-lg hover:ring-2 hover:ring-white p-0 m-4 lg:hidden">
              <div className='flex flex-col p-3 gap-1 h-auto w-full'>
                <span className='w-6 h-1 bg-slate-700'></span>
                <span className='w-6 h-1 bg-slate-700'></span>
                <span className='w-6 h-1 bg-slate-700'></span>
              </div>
            </label>
          </div>
          
          <div className="block w-full px-4">
          
            <div className="max-w-2xl bg-transparent mx-auto">
              <div className="w-full flex gap-4 py-3 rounded-box shadow-md px-2">
                <div className='w-[100px] h-[100px] overflow-hidden rounded-lg'>
                  <img src="https://dummyimage.com/100x100/ffedd5/bdb400" alt="" />
                </div>
                <div>
                  <h1 className="text-xl md:text-3xl">Hello There!👋</h1>
                  <h1 className="text-sm md:text-md">I'm, Student of High School 01 Jakarta</h1>
                </div>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto bg-white mt-2 rounded-r-lg rounded-t-lg shadow-md px-2">
              <div className="text-sm breadcrumbs">
                <ul>
                  <li>
                    <a>Home</a>
                  </li> 
                  <li>
                    <a>About</a>
                  </li> 
                  <li>
                    <a>Blogs</a>
                  </li> 
                  <li>
                    <a>Skills</a>
                  </li> 
                  <li>
                    <a>Projects</a>
                  </li> 
                  <li>
                    <a>Contact</a>
                  </li> 
                </ul>
              </div>
            </div>
          </div>
        
        </div> 
        
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <div className="menu p-4 w-80 min-h-full text-base-content bg-orange-100">
            {/* Sidebar content here */}
            <div className='w-full h-64 p-3 bg-white rounded-box'>
              <div className='flex justify-start items-center gap-3 py-3 border-b-2'>
                <div className='w-[50px] h-[50px] overflow-hidden rounded-full'>
                  <img src="https://dummyimage.com/50x50/ffedd5/bdb400" alt="" />
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
  );
}

export default App;
