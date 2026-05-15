import Image from "next/image";
import React from "react";
import profilePic from "../../assets/profilePic.jpg";
import { Download, ExternalLink, Briefcase, Code2 } from "lucide-react";
import { IoLogoJavascript } from "react-icons/io5";
import { BsTypescript } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiNestjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

const AboutMe = () => {
  const techStacks = [
    { name: "JavaScript", icon: IoLogoJavascript, color: "hover:text-yellow-500" },
    { name: "TypeScript", icon: BsTypescript, color: "hover:text-blue-500" },
    { name: "React", icon: FaReact, color: "hover:text-cyan-400" },
    { name: "Next.js", icon: RiNextjsFill, color: "hover:text-black" },
    { name: "Node.js", icon: FaNodeJs, color: "hover:text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "hover:text-gray-600" },
    { name: "Nest.js", icon: SiNestjs, color: "hover:text-red-600" },
    { name: "MongoDB", icon: DiMongodb, color: "hover:text-green-600" },
    { name: "PostgreSQL", icon: BiLogoPostgresql, color: "hover:text-blue-400" },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "hover:text-sky-400" },
  ];

  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 text-slate-800">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src={profilePic}
              alt="Pranaya Ghimire"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            About Me
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 max-w-2xl">
            Hello! I&apos;s me <span className="font-semibold text-indigo-600">Pranaya</span>. 
            I am a Full Stack Software Developer specialized in building scalable end-to-end 
            applications. Currently crafting digital solutions at 
            <span className="font-medium text-slate-900"> Infi Loop Pvt. Ltd</span>, 
            I bridge the gap between complex back-end logic and intuitive front-end experiences.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <a 
              href="/Pranaya_Ghimire_Full_Stack_Developer.pdf" 
              download
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg shadow-indigo-200 active:scale-95"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tech Stack Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="text-indigo-600" />
            <h2 className="text-2xl font-bold">Tech Stack</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techStacks.map((tech) => (
              <div
                key={tech.name}
                className={`flex flex-col items-center justify-center p-4 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${tech.color}`}
              >
                <tech.icon size={32} className="mb-2 transition-colors" />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="text-indigo-600" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          
          <div className="space-y-4">
            {/* Current Job */}
            <div className="relative pl-6 border-l-2 border-indigo-200 group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 group-hover:scale-125 transition-transform"></div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold text-indigo-600">FEB 2026 - PRESENT</span>
                <h3 className="font-bold text-slate-800 mt-1">Full Stack Developer</h3>
                <p className="text-sm text-slate-500">Infi Loop Pvt. Ltd.</p>
              </div>
            </div>

            {/* Internship */}
            <div className="relative pl-6 border-l-2 border-slate-200 group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 group-hover:bg-indigo-400 transition-colors"></div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold text-slate-400">MAR 2025 - JUN 2025</span>
                <h3 className="font-bold text-slate-800 mt-1">Frontend Intern</h3>
                <p className="text-sm text-slate-500">Void Nepal Pvt. Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;