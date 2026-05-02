'use client'
import { navLinks } from "@/constants/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="w-full h-16 flex items-center justify-between px-8 bg-linear-to-tr from-rose-500 to-orange-500 text-white">
        <div>
            My Portfolio
        </div>
        <ul className="hidden md:flex gap-5">
            {navLinks.map((link) => (
                <li key={link.name}>
                    
                    <Link href={link.href} className={`flex gap-2 items-center hover:-translate-y-2 transition-all duration-500 ease-in-out 
                        `}>
                        <link.icon size={16}/>
                        <p>{link.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
        {/* Mobile Menu */}
        <div className="md:hidden">
            {/* Implement mobile menu toggle logic here */}
            <Menu
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            {isMobileMenuOpen && (
                <ul className="md:hidden absolute top-16 left-0 w-full bg-orange-700 text-white p-4">
                    {navLinks.map((link) => (
                        <li key={link.name} className="py-2">
                            <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
                                <link.icon size={16} className="inline-block mr-2" />
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
     </nav>
  )
}

export default Navbar