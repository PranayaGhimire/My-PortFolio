import { ExternalLink, Code2, Globe } from "lucide-react";
import Image from "next/image";
import React from "react";
import tts from "../../assets/tts.png";
import fos from "../../assets/fos.png";

const MyProjects = () => {
  const projects = [
    {
      name: "Travel & Trekking System",
      description:
        "A comprehensive booking platform for adventurers. Features include dynamic itinerary viewing, secure package reservations, and a robust admin dashboard for real-time inventory management.",
      techStacks: ["Next.js", "Node.js", "Express.js", "MongoDB"],
      liveDemoLink: "https://tts.pranayaghimire.com.np/",
      image: tts,
    },
    {
      name: "Food Ordering System",
      description:
        "A seamless end-to-end food delivery solution. Includes multi-restaurant browsing, real-time cart synchronization, and an integrated management system for orders and menus.",
      techStacks: ["Next.js", "Node.js", "Nest.js", "MongoDB"],
      liveDemoLink: "https://fos.pranayaghimire.com.np/",
      image: fos,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 md:p-12">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Featured Projects
        </h1>
        <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
          >
            {/* Image/Mockup Container */}
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
              <Image
                src={project.image}
                alt={project.name}
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                fill
                priority
              />
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {project.name}
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStacks.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 bg-slate-50 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-100"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
                >
                  <Globe size={18} />
                  Live Preview
                </a>
                {/* Optional: Add GitHub link here if available */}
                {/* <a href="#" className="flex items-center gap-2 text-slate-500 font-medium hover:text-slate-800 transition-colors">
                  <Code2 size={18} />
                  View Code
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;