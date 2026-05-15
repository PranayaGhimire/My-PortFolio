"use client";
import { navLinks } from "@/constants/constants";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-indigo-100 border-t border-slate-200 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Pranaya<span className="text-slate-800">.dev</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Full Stack Developer based in Nepal, building modern web experiences with 
              precision and passion.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="https://github.com/pranayaghimire" target="_blank" className="p-2 bg-white rounded-full border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm">
                <BsGithub size={18} />
              </Link>
              <Link href="https://www.linkedin.com/in/pranaya-ghimire-8774a7253/" target="_blank" className="p-2 bg-white rounded-full border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm">
                <BsLinkedin size={18} />
              </Link>
              <Link href="https://www.instagram.com/pranaya_ghimire/" target="_blank" className="p-2 bg-white rounded-full border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm">
                <BsInstagram size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-slate-800 mb-6 uppercase tracking-wider text-xs">Explore</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-500 hover:text-indigo-600 hover:pl-2 transition-all duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-slate-800 mb-6 uppercase tracking-wider text-xs">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group text-slate-500 text-sm">
                <Mail size={18} className="text-indigo-500 mt-0.5" />
                <a href="mailto:pranayaghimire88083@gmail.com" className="group-hover:text-slate-800 transition-colors">
                  pranayaghimire88083@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group text-slate-500 text-sm">
                <Phone size={18} className="text-indigo-500" />
                <a href="tel:+9779840505684" className="group-hover:text-slate-800 transition-colors">
                  +977 9840505684
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <MapPin size={18} className="text-indigo-500" />
                Kathmandu, Nepal
              </li>
            </ul>
          </div>

          {/* Time & Status */}
          <div>
            <h3 className="font-bold text-slate-800 mb-6 uppercase tracking-wider text-xs">Availability</h3>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-semibold text-slate-700">Available for hire</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-xs font-mono">
                <Clock size={14} className="text-indigo-500" />
                <span>
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium italic uppercase">
                {currentTime.toDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} Pranaya Ghimire. Built with Next.js & Tailwind.
          </p>
          <p className="text-slate-400 text-[10px] flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;