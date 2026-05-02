"use client";
import { navLinks } from "@/constants/constants";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      // Force a re-render every second to update the time
      setCurrentTime(new Date());
    }, 1000);
  }, []);

  return (
    // Make it responsive and beautiful

    <footer className=" bg-gray-800 text-white p-8">
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <div>My Portfolio</div>
        {/* Quick Links */}
        <ul className="space-y-1">
          <p className="font-medium">Quick Links</p>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        {/* Contact Information */}
        <ul className="space-y-1">
          <p className="font-medium">Contact Information</p>
          <li className="flex gap-2 items-center">
            <Mail size={18} /> pranayaghimire88083@gmail.com
          </li>
          <li className="flex gap-2 items-center">
            <Phone size={18} /> +977 9840505684
          </li>
        </ul>
        {/* Social Media Links */}
        <ul className="space-y-2">
          <p className="font-medium">Follow Me</p>
          <div className="flex gap-3">
            <li>
              {/* Insta */}
              <Link
                href="https://www.instagram.com/pranaya_ghimire/"
                target="_blank"
              >
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/pranayaghimire" target="_blank">
                <BsGithub />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/pranaya-ghimire-8774a7253/"
                target="_blank"
              >
                <BsLinkedin />
              </Link>
            </li>
          </div>
        </ul>
      </div>
      {/* copyright content*/}
      <div className="mt-8 text-center text-gray-400 border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
      {/* Date & Time*/}
      <div className="mt-4 text-center text-gray-400 text-sm">
        <p>
          {currentTime.toDateString()} at {currentTime.toLocaleTimeString()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
