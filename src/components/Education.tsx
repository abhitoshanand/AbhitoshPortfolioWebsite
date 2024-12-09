import { GraduationCap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education = [
    {
      degree: "Bachelor's in Education",
      year: "2022-24",
      institution: "Jamshedpur Co-operative College, Jamshedpur",
      icon: <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      degree: "Master's in Physics",
      year: "2020-22",
      institution: "Jamshedpur Co-operative College, Jamshedpur",
      icon: <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      degree: "Bachelor's in Science with Physics Hons.",
      year: "2017-20",
      institution: "Karim City College, Jamshedpur",
      icon: <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    },
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-16 dark:bg-gray-900" ref={ref}>
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">
        My Academic Journey
      </p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">
        Education
      </h2>

      <div className={`max-w-4xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">{item.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{item.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}