export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  footerLinks: FooterLink[];
}

export interface MobileMenuState {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
}