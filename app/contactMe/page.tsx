import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const ContactMe = () => {
  const contactInfos = [
    {
      type: "Phone",
      value: "+977 9840505684",
      icon: Phone,
    },
    {
      type: "Email",
      value: "pranayaghimire88083@gmail.com",
      icon: Mail,
    },
    {
      type: "LinkedIn",
      value: "https://www.linkedin.com/in/pranaya-ghimire-8774a7253/",
      icon: FaLinkedin,
    },
    {
      type: "GitHub",
      value: "https://github.com/PranayaGhimire?tab=repositories",
      icon: FaGithub,
    },
    {
      type: "Instagram",
      value: "https://www.instagram.com/pranaya_ghimire/",
      icon: FaInstagram,
    },
  ];
  return (
    <div className="p-8">
      <h1 className="font-semibold mb-3">Contact Information</h1>
      <ul className="grid grid-cols-2 gap-5 border border-gray-300 rounded-2xl p-4">
        {contactInfos.map((info) => (
          <li key={info.type} className="border border-gray-300 rounded-xl p-4">
            <div className="flex gap-4 items-center">
              <div className="rounded-full bg-orange-100 p-2 w-8 h-8">
                <info.icon size={16} className="text-orange-600" />
              </div>
              <div>
                <p className="font-semibold">{info.type}</p>
                {info.type === "Email" ? (
                  <Link
                    href={`mailto:${info.value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info.value}
                  </Link>
                ) : info.type === "Phone" ? (
                  <Link
                    href={`tel:${info.value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info.value}
                  </Link>
                ) : (
                  <Link
                    href={info.value}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info.value}
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactMe;
