import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#lectures', label: 'Lectures' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="hidden md:flex justify-around items-center h-[17vh] animate-fade-in dark:bg-gray-900">
        <div className="text-3xl font-semibold dark:text-white">Abhitosh Anand</div>
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className="animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a
                href={link.href}
                className="text-xl hover:text-gray-600 dark:text-gray-300 dark:hover:text-white hover:underline hover:underline-offset-4 hover:decoration-gray-300 transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>

      <nav className="md:hidden flex justify-between items-center px-6 py-4 dark:bg-gray-900">
        <div className="text-2xl font-semibold dark:text-white">Abhitosh Anand</div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button onClick={toggleMenu} className="z-50 dark:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40 animate-fade-in">
            <ul className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-xl hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}