'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({
  href,
  children,
  onClick,
  className = '',
}: NavLinkProps) {
  return (
    <motion.div whileHover={{ y: -2 }}>
      <Link
        href={href}
        onClick={onClick}
        className={`hover:text-gray-200 transition ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}