import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import tts from "../../assets/tts.png";
import fos from "../../assets/fos.png";

const MyProjects = () => {
  const projects = [
    {
      name: "Travel & Trekking System",
      description:
        "A web application that allows users to book travel and trekking packages, view itineraries, and manage their bookings. The system also includes an admin panel for managing packages and bookings.",
      techStacks: ["Next.js", "Node.js", "Express.js", "MongoDB"],
      liveDemoLink: "https://tts.pranayaghimire.com.np/",
      image: tts,
    },
    {
      name: "Food Ordering System",
      description:
        "A web application that allows users to browse restaurants, view menus, and place food orders online. The system also includes an admin panel for managing restaurants, menus, and orders.",
      techStacks: ["Next.js", "Node.js", "Nest.js", "MongoDB"],
      liveDemoLink: "https://fos.pranayaghimire.com.np/",
      image: fos,
    },
  ];
  return (
    <div className="p-8">
      <h1 className="font-semibold mb-3">My Projects</h1>
      {/* My Projects Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-xl space-y-2"
          >
            <h2 className="font-bold text-lg">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className="w-40 h-40 rounded-lg border border-gray-300 relative">
              <Image
                src={project.image}
                alt={project.name}
                className="w-full  rounded-lg"
                fill
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStacks.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-500 text-xs font-medium px-2.5 py-2 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center text-indigo-500 hover:scale-125 transition-transform duration-500"
              >
                Live Link
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
