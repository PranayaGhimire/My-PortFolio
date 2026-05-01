import { navLinks } from "@/constants/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white p-8">
      <div>My Portfolio</div>
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
