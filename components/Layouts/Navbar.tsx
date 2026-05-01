'use client'
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full h-16 flex items-center justify-between px-4 bg-gray-800 text-white">
        <div>
            My Portfolio
        </div>
        <ul className="flex gap-5">
            {navLinks.map((link) => (
                <li key={link.name}>
                    
                    <Link href={link.href} className={`flex gap-2 items-center hover:-translate-y-2 transition-all duration-500 ease-in-out 
                        ${pathname === link.href ? ' text-orange-500' : ''}`}>
                        <link.icon size={16}/>
                        <p>{link.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar