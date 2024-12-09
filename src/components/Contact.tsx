import { Mail, Linkedin, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 px-6 md:px-16 dark:bg-gray-900" ref={ref}>
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">
        Get in Touch
      </p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">
        Contact Me
      </h2>

      <div className={`max-w-2xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
          <div className="space-y-6">
            <a
              href="tel:+916200413098"
              className="flex items-center gap-4 group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+91 6200413098</p>
              </div>
            </a>

            <a
              href="mailto:abhitoshanand99@gmail.com"
              className="flex items-center gap-4 group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">abhitoshanand99@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/abhitosh-anand-537710184"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold dark:text-white">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-400">Connect with me</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}