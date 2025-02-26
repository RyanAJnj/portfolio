import React from 'react'
import Image from 'next/image'

const Projects = ({ isDarkMode }) => {
  return (
    <div id="projects" className={`w-full px-[12%] py-10 ${isDarkMode ? 'bg-darkTheme text-white' : 'bg-white text-black'}`}>
      <h4 className="text-center mb-2 text-lg font-Ovo">My Projects</h4>
      <h2 className="text-center text-5xl font-Ovo">Portfolio Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
        {/* Portfolio Website */}
        <div className={`border rounded-lg p-6 shadow-lg hover:shadow-xl transition ${isDarkMode ? 'bg-darkTheme border-white/50' : 'bg-white border-gray-300'}`}>
          <h3 className="text-2xl font-semibold mb-4">My Portfolio Website</h3>
          {/* Portfolio Screenshot */}
          <Image src="/portss.png"  alt="Portfolio Screenshot" 
            width={800} height={450} 
            className="w-full h-auto rounded-lg mb-4" 
          />
          <p className="mb-4">
            This website showcases my work, projects, and skills. It serves as a central hub for all things related to my development and career.
          </p>
          <p className="mb-4">
            Currently working on the local version of this website. Once it's ready, it will be live for everyone to see.
          </p>
        </div>

        {/* Research Poster */}
        <div className={`border rounded-lg p-6 shadow-lg hover:shadow-xl transition ${isDarkMode ? 'bg-darkTheme border-white/50' : 'bg-white border-gray-300'}`}>
          <h3 className="text-2xl font-semibold mb-4">Research Poster</h3>
          <Image src="/cahsi.png"  alt="cahsi logo" 
            width={800} height={450} 
            className="w-full h-auto rounded-lg mb-4" 
          />
          <p className="mb-4">
            This is a research poster I created as an Undergraduate Researcher. It summarizes my findings and research methodology related to Computer Vision.
          </p>
          <a 
            href="/poster.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            View Research Poster (PDF)
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects;
