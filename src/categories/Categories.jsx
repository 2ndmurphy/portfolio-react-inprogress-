import React from 'react'

const Page = () => {
  return (
    <section className="categories p-8">
      <h2 className="text-2xl font-bold mb-4">Book Categories</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="category bg-gray-100 p-4 rounded">
          <img src="category-icon.jpg" alt="Fiction" className="h-16 mx-auto"/>
          <h3 className="text-center mt-2">Fiction</h3>
        </div>
      </div>
    </section>
  )
}

export default Page