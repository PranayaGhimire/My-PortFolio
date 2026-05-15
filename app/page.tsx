import React from 'react';
import { ExternalLink, Mail, Code2, Layers, Cpu, ArrowRight } from 'lucide-react';

const Home = () => {
  const projects = [
    {
      title: "School Management System",
      desc: "An enterprise-grade platform for academic administration, featuring automated grading and attendance tracking.",
      tech: ["Next.js", "PostgreSQL", "TypeORM"],
      link: "#"
    },
    {
      title: "The Momo House",
      desc: "A high-performance food delivery application with seamless state management and mobile responsiveness.",
      tech: ["React Native", "Redux", "Tailwind"],
      link: "#"
    },
    {
      title: "Travel & Trekking API",
      desc: "A scalable backend service for outdoor enthusiasts, optimized for geospatial queries and route mapping.",
      tech: ["NestJS", "Node.js", "MongoDB"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      

      {/* Hero Section */}
      <section className="px-8 pt-20 pb-16 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Full Stack Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            I build <span className="text-indigo-600">scalable</span> software from the ground up.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Passionate developer specializing in modern web ecosystems. I bridge the gap 
            between robust backend architecture and fluid, responsive user interfaces.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="flex items-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-200">
              View Work <ArrowRight size={18} />
            </a>
            <a href="https://github.com" className="flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-xl font-semibold transition-all">
              {/* <Github size={20} />  */}
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack - Subdued */}
      <section className="px-8 py-10 bg-indigo-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-6 text-center">Tech Stacks</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['Next.js', 'React Native', 'TypeScript', 'PostgreSQL', 'NestJS', 'Tailwind'].map((tech) => (
              <span key={tech} className="text-indigo-500 font-medium hover:text-indigo-600 cursor-default transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="px-8 py-24 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Recent Projects</h2>
          <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col p-8 rounded-3xl bg-white border border-gray-100 hover:border-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300">
              <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {idx === 0 ? <Layers size={22} /> : idx === 1 ? <Code2 size={22} /> : <Cpu size={22} />}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-tight px-2 py-1 bg-slate-100 rounded-md text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Prompt - Simple */}
      <section className="px-8 py-24 max-w-6xl mx-auto text-center border-t border-slate-100">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Want to see more?</h2>
        <p className="text-slate-600 mb-10 max-w-xl mx-auto text-lg">
          I’m always open to discussing new projects or creative ideas. Let&apos;s build something exceptional together.
        </p>
        <a href="mailto:pranayaghimire88083@gmail.com" className="inline-flex items-center gap-3 px-10 py-4 bg-indigo-500 text-white rounded-full font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-100">
          <Mail size={20} /> Say Hello
        </a>
      </section>

    </div>
  );
};

export default Home;