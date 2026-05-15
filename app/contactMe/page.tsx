import { Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const ContactMe = () => {
  const contactInfos = [
    {
      type: "Phone",
      label: "Call me",
      value: "+977 9840505684",
      href: "tel:+9779840505684",
      icon: Phone,
      color: "bg-blue-100 text-blue-600",
    },
    {
      type: "Email",
      label: "Message me",
      value: "pranayaghimire88083@gmail.com",
      href: "mailto:pranayaghimire88083@gmail.com",
      icon: Mail,
      color: "bg-red-100 text-red-600",
    },
    {
      type: "LinkedIn",
      label: "Connect with me",
      value: "Pranaya Ghimire",
      href: "https://www.linkedin.com/in/pranaya-ghimire-8774a7253/",
      icon: FaLinkedin,
      color: "bg-sky-100 text-sky-600",
    },
    {
      type: "GitHub",
      label: "Follow my code",
      value: "PranayaGhimire",
      href: "https://github.com/PranayaGhimire",
      icon: FaGithub,
      color: "bg-gray-100 text-gray-800",
    },
    {
      type: "Instagram",
      label: "See my life",
      value: "@pranaya_ghimire",
      href: "https://www.instagram.com/pranaya_ghimire/",
      icon: FaInstagram,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 md:p-12">
      {/* Header Section */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Get in Touch
        </h1>
        <p className="text-slate-500 max-w-lg">
          Have a project in mind or just want to say hi? I&apos;m always open to 
          discussing new opportunities and innovative ideas.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactInfos.map((info) => (
          <Link
            key={info.type}
            href={info.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${info.color}`}>
                <info.icon size={24} />
              </div>
              
              <div>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                  {info.label}
                </p>
                <h3 className="text-lg font-bold text-slate-800 mt-1 break-words">
                  {info.value}
                </h3>
              </div>

              <div className="flex items-center text-indigo-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Let&apos;s talk <ExternalLink size={14} className="ml-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Simple Footer/Prompt */}
      <div className="mt-16 p-8 bg-indigo-700 rounded-3xl text-center text-white shadow-xl shadow-indigo-200">
        <h2 className="text-2xl font-bold mb-2">Ready to start something great?</h2>
        <p className="opacity-90 mb-6">Currently available for full-time roles and freelance projects.</p>
        <a 
          href="mailto:pranayaghimire88083@gmail.com"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors"
        >
          Send an Email
        </a>
      </div>
    </div>
  );
};

export default ContactMe;