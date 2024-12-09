import { useInView } from 'react-intersection-observer';

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Teaching Intern',
      period: 'Nov 2023 - Present',
      organization: 'Middle School Deogarh, Jamshedpur (JCERT Government Affiliated)',
      achievements: [
        'Developed and implemented 50 comprehensive lesson plans with dedicated teaching-learning materials',
        'Simplified complex Physics concepts through engaging teaching methods',
        'Integrated microteaching skills into daily lesson delivery',
        'Conducted regular student assessments and provided constructive feedback'
      ]
    },
    {
      title: 'Micro-teaching Workshop',
      period: 'Oct 2023 - Nov 2023',
      organization: 'Jamshedpur Co-Operative College, Jamshedpur, Jharkhand',
      achievements: [
        'Took part in intense teaching practice sessions where I worked on core skills like asking good questions and managing classroom time',
        'Conducted peer teaching sessions to refine instructional strategies and lesson delivery',
        'Engaged in collaborative feedback exchanges to adapt teaching methods for diverse learning styles'
      ]
    },
    {
      title: 'Private Physics Tutor',
      period: 'Aug 2018 - Present',
      organization: '',
      achievements: [
        'Mentored students from grades 6-12 in Physics fundamentals',
        'Created personalized learning strategies and resources',
        'Maintained parent communication and fostered effective study habits'
      ]
    },
    {
      title: 'Physics Internship',
      period: '17 Aug 2022 - 26 Sep 2022',
      organization: 'National Metallurgical Laboratory, Jamshedpur',
      achievements: [
        'Conducted research on sustainable hydrogen production through water splitting under the mentorship of Dr. Animesh Jana. The project focused on developing efficient electrocatalysts for water electrolysis to generate clean hydrogen fuel.',
        'Contributed to the investigation of novel materials and optimization of electrochemical parameters to enhance hydrogen evolution reaction (HER) efficiency.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-16 dark:bg-gray-900" ref={ref}>
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">
        My Journey
      </p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">
        Experience & Internships
      </h2>

      <div className={`max-w-4xl mx-auto space-y-8 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-semibold dark:text-white">{exp.title}</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
            </div>
            {exp.organization && (
              <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.organization}</p>
            )}
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}