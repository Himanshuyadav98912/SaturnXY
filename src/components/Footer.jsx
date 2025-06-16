import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
  ];

  const footerLinks = [
    "Contact Us",
    "Global Offices",
    "Newsletter",
    "Terms of Use",
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl transition"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm font-medium">
          {footerLinks.map((text, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:underline hover:text-white transition"
            >
              {text}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-400">
          © {year} SaturnXY – All rights reserved.
        </p>
      </div>
    </footer>
  );
}

