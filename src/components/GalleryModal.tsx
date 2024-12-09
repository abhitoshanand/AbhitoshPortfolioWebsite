import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryModalProps {
  images: Array<{ url: string; caption: string }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function GalleryModal({ images, currentIndex, onClose, onNext, onPrev }: GalleryModalProps) {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
      >
        <X size={24} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors duration-300"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="max-w-4xl max-h-[80vh] relative">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].caption}
          className="max-w-full max-h-[80vh] object-contain"
        />
        <p className="text-white text-center mt-4">{images[currentIndex].caption}</p>
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors duration-300"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}