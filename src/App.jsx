


import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase, FaReact, FaPython, FaBars, FaTimes } from "react-icons/fa";
import { SiDjango, SiJavascript, SiTailwindcss } from "react-icons/si";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [contact, setContact] = useState({
    email: "",
  });

  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(`Email: ${contact.email}`);

    window.location.href = `mailto:hello@zhiyad.dev?subject=${subject}&body=${body}`;
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Frondent e-commerce solution with DB Json backend and React frontend",
      tech: ["React", "HTML", "Tailwind Css", "DB json"],
      link: "https://veloce-react.vercel.app/",
      img: "public/images/Ecommerce.png"
    },
    {
      title: "AI Attendance system",
      description: "Live analytics  with AI ",
      tech: ["Python", "FastAPI", "Socket.io"],
      link: "#",
      img: "/public/images/ai.png"
    },
  ];

  const skills = [
    { name: "Python", icon: <FaPython className="text-4xl text-blue-500" />, level: 90 },
    { name: "Django", icon: <SiDjango className="text-4xl text-green-600" />, level: 85 },
    { name: "React", icon: <FaReact className="text-4xl text-cyan-400" />, level: 80 },
    { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-400" />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-teal-400" />, level: 90 },
    { name: "Backend", icon: <FaServer className="text-4xl text-purple-500" />, level: 85 },
    { name: "Database", icon: <FaDatabase className="text-4xl text-orange-500" />, level: 80 },
    { name: "API Design", icon: <FaCode className="text-4xl text-red-500" />, level: 85 }
  ];

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <div className="bg-black min-h-screen">
      {/* Modern Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md z-50 shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              MZ
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-x-8 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-red-100 hover:text-red-600 font-medium transition-all duration-300 hover:scale-105"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-red-100 hover:text-red-600 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-red-100 hover:text-red-600 font-medium transition-all duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 md:pt-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Hi, I'm <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">Muhammed Zhiyad</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
                Python Fullstack Developer
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I build scalable web applications with Python, Django, and React.
                Passionate about creating efficient, maintainable, and user-friendly solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="bg-gradient-to-r from-white to-gray-600 text-black px-6 sm:px-8 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                  Contact Me
                </a>
                <a href="#projects" className="border-2 border-red-600 text-red-600 px-6 sm:px-8 py-3 rounded-full font-medium hover:border-white hover:text-white transition-all duration-300 text-center">
                  View Projects
                </a>
              </div>
              <div className="flex gap-4 pt-6 lg:pt-8 justify-center lg:justify-start">
                <a href="https://github.com/zhiyad96" className="p-3 bg-gradient-to-r from-white to-gray-600 rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-300">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-zhiyad" className="p-3 bg-gradient-to-r from-white to-gray-600 rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="" className="p-3 bg-gradient-to-r from-white to-gray-600 rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-300">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-red-600">
                <div className="absolute inset-0"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src="\public\images\zhiyad.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-red-600 font-semibold tracking-wider">ABOUT ME</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-300">Crafting Digital Experiences</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
              With expertise in Python and modern web technologies, I specialize in building
              full-stack applications that are both performant and maintainable. My approach
              combines clean code architecture with intuitive user interfaces.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
              <div className="p-4 md:p-6 bg-gradient-to-r from-white to-gray-600 rounded-2xl hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-2">Fast & Efficient</h3>
                <p className="text-gray-800 text-sm md:text-base">Optimized solutions with performance in mind</p>
              </div>
              <div className="p-4 md:p-6 bg-gradient-to-r from-white to-gray-600 rounded-2xl hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-2">Scalable Code</h3>
                <p className="text-gray-800 text-sm md:text-base">Clean architecture for growing applications</p>
              </div>
              <div className="p-4 md:p-6 bg-gradient-to-r from-white to-gray-600 rounded-2xl hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg md:text-xl font-bold mb-2">Problem Solver</h3>
                <p className="text-gray-800 text-sm md:text-base">Creative solutions for complex challenges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-red-600 font-semibold tracking-wider">PROJECTS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-300">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto px-4">
              A selection of my recent work showcasing fullstack development capabilities
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-40 sm:h-48 md:h-48 bg-gradient-to-br relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={project.img}
                      alt="project"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 md:mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 md:mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 sm:px-3 py-1 bg-gray-600 text-black rounded-full text-xs sm:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all duration-300 text-sm sm:text-base"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-red-600 font-semibold tracking-wider">EXPERTISE</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-300">Technical Skills</h2>
            <p className="text-gray-400 max-w-2xl mx-auto px-4">
              Proficient in modern web technologies and frameworks
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-gray-500 to-gray-600 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-2 sm:mb-4">
                  <div className="text-3xl sm:text-4xl">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-sm sm:text-lg font-bold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div
                    className="bg-gradient-to-r from-red-600 to-red-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs sm:text-sm text-black mt-1">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - FIXED */}
      <section id="contact" className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-red-600 font-semibold tracking-wider">CONTACT</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-300">Let's Build Something Amazing</h2>
            <p className="text-gray-400 mb-8 md:mb-12">
              Have a project in mind? I'd love to hear about it.
            </p>
            
            <form onSubmit={handleContactSubmit} className="bg-gradient-to-r from-gray-600 to-gray-500 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
              <div className="space-y-4 sm:space-y-6">
                {/* Email Input */}
                <div className="text-left">
                  <label className="block text-black mb-2 font-medium text-sm sm:text-base">Email</label>
                  <div className="flex items-center gap-3 p-3 sm:p-4 bg-gray-400 rounded-xl">
                    <FaEnvelope className="text-red-600" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={contact.email}
                      onChange={handleContactChange}
                      className="w-full h-full outline-none focus:outline-none focus:ring-0 bg-transparent text-black placeholder-gray-700"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                {/* Connect Buttons */}
                <div className="text-left">
                  <label className="block text-black mb-2 font-medium text-sm sm:text-base">Connect With Me</label>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a 
                      href="https://github.com/zhiyad96" 
                      className="flex-1 p-3 sm:p-4 bg-gray-900 text-white rounded-xl hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/muhammad-zhiyad" 
                      className="flex-1 p-3 sm:p-4 bg-gray-600 text-white rounded-xl hover:bg-gray-500 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin /> LinkedIn
                    </a>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-white to-gray-600 text-black py-3 sm:py-4 rounded-xl font-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-sm md:text-base">© {new Date().getFullYear()} Muhammed Zhiyad</p>
        </div>
      </footer>
    </div>
  );
}