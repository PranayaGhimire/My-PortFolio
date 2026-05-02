import React from 'react'

const Home = () => {
  return (
    <div className='p-8'>
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-gray-600">
        I&apos;m a passionate full stack developer with hands on experience in creating modern web applications.
      </p>
      {/* create a beautiful landing page */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
        <p className="text-gray-600">
          Check out some of my recent projects!
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="text-gray-600">
          Feel free to reach out to me!
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Wanna view my work?</h2>
        <p className="text-gray-600">
          Check out my GitHub profile for more projects and code samples!
        </p>
      </div>
    
    </div>
  )
}

export default Home