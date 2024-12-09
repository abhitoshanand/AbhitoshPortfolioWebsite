import { useEffect, useRef } from 'react';
import { TestimonialCard } from './TestimonialCard';
import { testimonialData } from '../data/testimonials';

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Clone the testimonials for seamless scrolling
    const content = scrollElement.querySelector('.scroll-content');
    if (content) {
      const clone = content.cloneNode(true);
      scrollElement.appendChild(clone);
    }
  }, []);

  return (
    <section className="py-20 px-6 md:px-16 overflow-hidden dark:bg-gray-900">
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">
        What My Students Say
      </p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">
        Testimonials
      </h2>

      <div
        ref={scrollRef}
        className="relative w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div className="scroll-content flex gap-6 animate-scroll">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}