import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <main className="block w-full min-h-screen backdrop-blur-md
    py-9 px-4 max-w-2xl mx-auto bg-gradient-to-t from-[#E1F0DA] to-[#E1F0DA]">
      <section className="block py-4">
        <Navbar/>
        <h1 className="text-4xl font-bold text-white text-center">Welcome to Open Library</h1>
        <p className="text-lg mt-2 text-white text-center">Explore millions of books from around the world</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 rounded text-white text-center">Explore Now</button>
      </section>
    </main>
  )
}

export default App
