import { Mail, Linkedin, Phone, ArrowDown } from 'lucide-react';

export function Profile() {
  return (
    <section id="profile" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16">
      <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden animate-fade-in hover:scale-105 transition-transform duration-300 border-4 border-secondary">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-left animate-slide-up">
        <p className="text-lg font-semibold text-secondary dark:text-light mb-2">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-white">Abhitosh Anand</h1>
        <p className="text-2xl text-secondary dark:text-light mb-8">Physics Teacher</p>
        <div className="flex gap-4 justify-center md:justify-start mb-8">
          <button onClick={() => window.open('/resume.pdf')} className="btn-secondary">
            Download CV
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Contact Info
          </button>
        </div>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="tel:+916200413098"
            className="text-primary hover:text-secondary dark:text-light dark:hover:text-secondary transition-colors duration-300 hover:scale-110 transform"
          >
            <Phone size={24} />
          </a>
          <a
            href="mailto:abhitoshanand99@gmail.com"
            className="text-primary hover:text-secondary dark:text-light dark:hover:text-secondary transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://linkedin.com/in/abhitosh-anand-537710184"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary dark:text-light dark:hover:text-secondary transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
          <ArrowDown className="text-secondary dark:text-light" size={24} />
        </div>
      </div>
    </section>
  );
}