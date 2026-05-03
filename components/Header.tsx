'use client';

import { navLinks, colors } from '@/config';
import { useNavigation } from '@/hooks/useNavigation';
import NavLink from '../share/NavLink';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useNavigation();

  return (
    <nav style={{ backgroundColor: colors.primary }} className="text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink 
            href="/" 
            className="flex items-center gap-3 hover:opacity-80 transition group"
          >
            <img 
              src="/logomanu.jpg" 
              alt="Logo" 
              className="h-12 w-12 rounded-full object-cover group-hover:scale-110 transition duration-300" 
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold leading-none">Manchester</div>
              <div className="text-console.log();
               text-gray-300">United</div>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block p-2"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}