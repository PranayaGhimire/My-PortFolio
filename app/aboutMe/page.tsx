import Image from "next/image";
import React from "react";
import profilePic from "../../assets/profilePic.jpg";
import { Download, Link } from "lucide-react";
import { IoLogoJavascript } from "react-icons/io5";
import { BsTypescript } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiNestjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

const AboutMe = () => {
  const techStacks = [
    {
      name: "JavaScript",
      icon: IoLogoJavascript
    },
    {
      name: "TypeScript",
      icon: BsTypescript
    },
    {
      name: "React",
      icon: FaReact
    },
    {
      name: "Node.js",
      icon: FaNodeJs
    },
    {
      name: "Next.js",
      icon: RiNextjsFill
    },
    {
      name: "Express.js",
      icon:SiExpress
    },
    {
      name: "Nest.js",
      icon: SiNestjs
    },
    {
      name: "MongoDB",
      icon: DiMongodb
    },
    {
      name: "PostgreSQL",
      icon: BiLogoPostgresql
    },
    {
      name: "Tailwind CSS",
      icon: RiTailwindCssFill
    },
  ];
  return (
    <div className="p-8">
      <h1 className="font-semibold mb-3 ">About Me</h1>
      {/* About Me Content */}
      <div className="flex flex-col md:flex justify-between items-center gap-5 p-4 border border-gray-300 rounded-xl">
        <div className="md:w-1/2">
          Hello It&apos;s me Pranaya, I am a full stack software developer with
          hands on experience in building end to end web applications using
          JavaScript and TypeScript. I have a strong passion for learning new
          technologies and building projects that solve real world problems. I
          am currently working as a full stack software developer at Infi Loop
          Pvt. Ltd. and have previously interned at Void Nepal Pvt. Ltd. as a
          frontend developer. I am always looking for new opportunities to grow
          and learn in the field of software development.
        </div>
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="w-full h-full object-center"
          />
        </div>
      </div>
      {/*Tech Stacks  */}
      <div className="mt-4">
        <h2 className="font-semibold mb-2">Tech Stacks</h2>
        <ul className="list-inside grid grid-cols-1 md:grid-cols-8 gap-5 border border-gray-300 rounded-xl p-4">
          {techStacks.map((tech) => (
            <li
              key={tech.name}
              className="bg-orange-100 text-orange-600 hover:-translate-y-2 duration-500 transition-all rounded-lg px-4 py-2"
            >
              <tech.icon size={16} className="inline-block mr-2" />
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
      {/* Experience */}
      <div className="mt-4">
        <h2 className="font-semibold mb-2">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  border border-gray-300 rounded-xl p-4">
          {/* Internship Experience */}
          <div className="space-y-2">
            <p className="font-semibold">Internship</p>
            <div className="border border-gray-300 rounded-lg p-4">
              <p className="font-medium">
                Frontend Developer Internship at Void Nepal Pvt. Ltd.
              </p>
              <p className="text-sm">Duration: Mar 2025 - June 2025</p>
            </div>
          </div>

          {/* Job Experience */}
          <div className="space-y-2">
            <p className="font-semibold">Job</p>
            <div className="border border-gray-300 rounded-lg p-4">
              <p className="font-medium">
                Full Stack Software Developer at Infi Loop Pvt. Ltd.
              </p>
              <p className="text-sm">
                Duration: Feb 2026 -{" "}
                {new Date().toLocaleString("default", { month: "long" })}{" "}
                {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Download CV */}
      <div className="mt-4">
        <p className="font-semibold mb-2">Curriculum Vitae (C.V.) / Resume</p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
          <a href="/Pranaya_Ghimire_Full_Stack_Developer.pdf" download>
            Download CV
            <Download size={16} className="inline-block ml-2" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
