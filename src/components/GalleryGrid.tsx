interface GalleryGridProps {
  images: Array<{ url: string; caption: string }>;
  onImageClick: (index: number) => void;
}

export function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className="grid grid-flow-col auto-cols-[250px] gap-4 py-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group cursor-pointer"
          onClick={() => onImageClick(index)}
        >
          <img
            src={image.url}
            alt={image.caption}
            className="w-[250px] h-[350px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
            <p className="text-white p-4 text-sm">{image.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}