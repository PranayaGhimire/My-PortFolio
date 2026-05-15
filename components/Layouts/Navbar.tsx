'use client';
import { navLinks } from "@/constants/constants";
import { Menu, X } from "lucide-react"; // Added X for closing
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add shadow/background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full h-20 flex bg-white shadow-lg  items-center justify-between px-8 md:px-16 z-50 transition-all duration-300 `}>
      
      {/* Logo Area */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
          <span className="text-white font-bold text-xl">P</span>
        </div>
        <span className={`font-bold text-xl tracking-tight`}>
          Pranaya<span className="text-indigo-500">.dev</span>
        </span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name} className="relative group">
              <Link 
                href={link.href} 
                className={`flex gap-2 items-center font-medium transition-all duration-300 hover:scale-105 ${
                  isActive && "text-indigo-500" 
                 
                }`}
              >
                <link.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                <p>{link.name}</p>
              </Link>

              {/* Active Underline Animation */}
              {isActive && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
              )}
            </li>
          );
        })}
      </ul>

      {/* Hire Me CTA (Desktop) */}
      <div className="hidden md:block">
         <Link 
          href="/contactMe" 
          className={`px-6 py-2.5 rounded-full font-semibold transition-all bg-indigo-100 text-indigo-500 hover:bg-indigo-200 `}
        >
          Let&apos;s Talk
        </Link>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2 rounded-lg transition-colors `}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    isActive ? "bg-indigo-50 text-indigo-600 font-bold" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <link.icon size={20} />
                  <span className="text-lg">{link.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;