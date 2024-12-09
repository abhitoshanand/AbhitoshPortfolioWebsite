import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  grade: string;
  image: string;
  text: string;
}

export function TestimonialCard({ name, grade, image, text }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[300px] bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
      <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
      <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-4">{text}</p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{grade}</p>
        </div>
      </div>
    </div>
  );
}