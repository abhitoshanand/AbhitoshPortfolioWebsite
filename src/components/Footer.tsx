export function Footer() {
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
    <footer className="py-12 px-6 md:px-16 dark:bg-gray-900">
      <nav className="mb-8">
        <ul className="flex flex-wrap justify-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Copyright © {new Date().getFullYear()} Abhitosh Anand. All Rights Reserved.
      </p>
    </footer>
  );
}