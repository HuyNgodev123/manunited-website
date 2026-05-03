// components/Footer.tsx

'use client';

import { footerLinks, socialLinks } from '@/config';
import NavLink from '../share/NavLink';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';

const socialIcons: Record<string, React.ReactNode> = {
  FaFacebook: <FaFacebook />,
  FaTwitter: <FaTwitter />,
  FaInstagram: <FaInstagram />,
  FaTiktok: <FaTiktok />,
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-red-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Về Manchester United</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {footerLinks.about}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Nhanh</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-red-400"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kết Nối Với Chúng Tôi</h3>
            <div className="flex gap-4 text-2xl">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition"
                  aria-label={social.name}
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>{footerLinks.copyright}</p>
          <p className="mt-2">{footerLinks.tagline}</p>
        </div>
      </div>
    </footer>
  );
}