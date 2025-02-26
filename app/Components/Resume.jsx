import React from 'react';

const Resume = () => {
  return (
    <div id="resume" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">Resume</h2>

      <div className="flex justify-center items-center my-10">
        <iframe
          src="/resume.pdf"
          className="w-full max-w-4xl h-[600px] border rounded-xl shadow-lg"
          onError={() => alert("Failed to load the resume.")}
        />
      </div>

      {/* Mobile View Button */}
      <div className="text-center mt-6 sm:hidden">
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
        >
          Open in New Tab
        </a>
      </div>
    </div>
  );
};

export default Resume;
