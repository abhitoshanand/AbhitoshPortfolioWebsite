import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryGrid } from './GalleryGrid';
import { GalleryModal } from './GalleryModal';
import { galleryData } from '../data/gallery';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -400 : 400;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="py-20 px-6 md:px-16 dark:bg-gray-900">
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">
        Classroom Moments
      </p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">
        Photo Gallery
      </h2>

      <div className="relative max-w-7xl mx-auto">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 dark:text-white" />
        </button>

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          }}
        >
          <GalleryGrid images={galleryData} onImageClick={setSelectedImage} />
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 dark:text-white" />
        </button>
      </div>

      {selectedImage !== null && (
        <GalleryModal
          images={galleryData}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={() => setSelectedImage((prev) => (prev === galleryData.length - 1 ? 0 : prev! + 1))}
          onPrev={() => setSelectedImage((prev) => (prev === 0 ? galleryData.length - 1 : prev! - 1))}
        />
      )}
    </section>
  );
}