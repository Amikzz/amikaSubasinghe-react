import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-600">Amika Subasinghe</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          A passionate <span className="font-medium">Software Engineering Undergraduate</span> & aspiring Software Engineer. 
          I love building modern web and mobile apps with <span className="font-medium">React, Laravel, and Flutter</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            View Projects →
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-gray-400 font-semibold hover:bg-gray-100 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8 text-gray-600">
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-blue-600">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-blue-600">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Home />);
