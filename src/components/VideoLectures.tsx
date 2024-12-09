import { PlayCircle, Download } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function VideoLectures() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const lectures = [
    {
      title: "Newton's Laws of Motion",
      description: "A comprehensive explanation of Newton's three laws of motion with real-world examples.",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      lessonPlanUrl: "/lesson-plans/newtons-laws.pdf"
    },
    {
      title: "Wave Motion and Sound",
      description: "Understanding the principles of wave motion and sound propagation through various mediums.",
      thumbnail: "https://images.unsplash.com/photo-1614628079765-6c171b07a4a6?w=800&h=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      lessonPlanUrl: "/lesson-plans/wave-motion.pdf"
    },
    {
      title: "Electricity and Magnetism",
      description: "Exploring the relationship between electricity and magnetism through interactive demonstrations.",
      thumbnail: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      lessonPlanUrl: "/lesson-plans/electromagnetism.pdf"
    },
  ];

  return (
    <section id="lectures" className="py-20 px-6 md:px-16 dark:bg-gray-900" ref={ref}>
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">
        Watch My Sample
      </p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">
        Video Lectures
      </h2>

      <div className={`max-w-6xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {lectures.map((lecture, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={lecture.thumbnail}
                  alt={lecture.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{lecture.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{lecture.description}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={lecture.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <PlayCircle className="w-4 h-4" />
                    Watch Lecture
                  </a>
                  <a
                    href={lecture.lessonPlanUrl}
                    download
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Download className="w-4 h-4" />
                    Download Lesson Plan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}