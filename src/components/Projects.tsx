import { Book } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedAbstract, setSelectedAbstract] = useState<string | null>(null);

  const projects = [
    {
      title: 'Generation and Application of Non Thermal Plasma',
      description: 'Research project conducted during M.Sc Physics focusing on cold plasma generation, characterization, and applications across various fields.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600',
      abstract: `Plasma, widely recognized as the "fourth state of matter," represents a unique phase characterized by ionized gas containing free electrons, ions, and neutral species that exhibit collective behavior and electromagnetic responsiveness. This dissertation presents a comprehensive investigation into cold plasma (non-thermal plasma), a specialized subset of plasma physics where electrons maintain high energy levels while the bulk gas remains at or near room temperature. This thermal disequilibrium creates distinct advantages for applications requiring precise control and temperature sensitivity.

The research encompasses both fundamental theoretical frameworks and practical applications, examining the quantum mechanical principles underlying plasma formation and the engineering challenges in its controlled production. Primary focus is given to two dominant cold plasma generation methods: Dielectric Barrier Discharge (DBD) and Atmospheric Pressure Plasma Jet (APPJ). Through detailed experimental analysis, this work establishes optimal parameters for plasma generation and maintenance, including gas composition, pressure conditions, and electromagnetic field configurations.

This dissertation significantly advances the understanding of cold plasma's multifaceted applications across diverse fields. In medicine, it explores revolutionary approaches to wound healing, cancer treatment, and dental procedures, where cold plasma's selective antimicrobial properties and ability to promote tissue regeneration show remarkable promise. In agriculture, the research demonstrates cold plasma's potential for seed treatment, pest control, and crop yield enhancement, offering sustainable alternatives to conventional chemical treatments. Additionally, the study investigates industrial applications, including surface modification, nanomaterial synthesis, and waste treatment, highlighting cold plasma's role in advancing manufacturing processes and environmental remediation.

The historical analysis traces plasma physics' evolution from Sir William Crookes' fundamental discoveries in the late 19th century through Irving Langmuir's pioneering plasma characterization to contemporary breakthroughs in cold plasma technology. This historical context provides crucial insights into the field's development and future trajectories. Through extensive experimental work and theoretical modeling, the research addresses critical challenges in plasma stability, control mechanisms, and scalability for industrial applications.

Furthermore, this work presents novel findings regarding the interaction between cold plasma and biological systems, including detailed analysis of reactive oxygen and nitrogen species (RONS) generation and their roles in cellular responses. The research incorporates advanced diagnostic techniques, including optical emission spectroscopy and mass spectrometry, to characterize plasma composition and behavior under various conditions.

The dissertation concludes by proposing a comprehensive framework for evaluating cold plasma technologies in terms of efficiency, safety, and environmental impact. The findings suggest that cold plasma represents a transformative technology with significant potential across multiple sectors, particularly in addressing contemporary challenges in healthcare, agriculture, and environmental sustainability. This research contributes substantial new knowledge to the field while identifying promising directions for future investigation, including the development of portable plasma devices, optimization of treatment protocols, and exploration of novel applications in emerging fields such as space technology and advanced materials processing.`,
    },
    {
      title: 'Renewable Energy and Energy Harvesting',
      description: 'Research project during B.Sc Physics examining various renewable energy sources and energy harvesting techniques.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600',
      abstract: `This thesis presents an in-depth study of renewable energy production, examining the technical mechanisms, efficiencies, and sustainability of various renewable energy sources: solar energy, wind energy, hydroelectricity, geothermal energy, and tidal energy. With growing concerns over environmental impact and fossil fuel depletion, renewable energy technologies offer critical solutions for sustainable power generation. Each chapter addresses the specific principles, design considerations, and operational challenges of these energy types, emphasizing the unique characteristics that make each source suitable for particular geographical and climatic conditions.

In exploring solar energy, the research delves into photovoltaic (PV) and concentrated solar power (CSP) technologies, analyzing efficiency rates, material innovations, and methods to optimize sunlight capture. The wind energy section discusses turbine design, aerodynamic advancements, and grid integration issues associated with variable wind patterns, highlighting improvements that increase reliability and output. Hydroelectricity is examined through dam and run-of-river systems, focusing on energy generation potential, environmental considerations, and recent advances in turbine efficiency. The study of geothermal energy covers deep-well extraction techniques, binary cycle power plants, and methods to enhance thermal energy recovery while managing geological and environmental impacts. Finally, tidal energy explores wave and tidal stream technologies, assessing their potential in coastal areas, power density, and challenges with marine ecosystem preservation.

The thesis further investigates energy harvesting methods to enhance energy capture and storage across these renewable sources, reviewing advancements in battery storage, grid compatibility, and hybrid systems that combine multiple energy forms to improve energy reliability. By addressing the technical and environmental aspects of renewable energy sources, this study provides a foundation for advancing sustainable energy technologies, aiming to make renewable energy production both economically viable and environmentally responsible. This research contributes valuable insights for optimizing the deployment of renewable resources, fostering a cleaner, more resilient energy future.`,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-16 dark:bg-gray-900" ref={ref}>
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">
        Browse My Research
      </p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">
        Projects
      </h2>

      <div className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
              <button
                onClick={() => setSelectedAbstract(selectedAbstract === project.title ? null : project.title)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <Book className="w-4 h-4" />
                {selectedAbstract === project.title ? 'Hide Abstract' : 'Read Abstract'}
              </button>
              {selectedAbstract === project.title && (
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line">
                    {project.abstract}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}