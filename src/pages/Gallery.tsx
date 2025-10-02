import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      title: "Hackathon in Action",
      urls: [
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
        "https://images.unsplash.com/photo-1581090700227-4c4f50b4c109?w=800&q=80",
        "https://images.unsplash.com/photo-1581092160562-40aa04cd2e07?w=800&q=80",
      ],
    },
    {
      title: "Dance Competition",
      urls: [
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
        "https://images.unsplash.com/photo-1508779018996-1f1e9d7f3a19?w=800&q=80",
        "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80",
      ],
    },
    {
      title: "DJ Night",
      urls: [
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center mb-6">Gallery</h1>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Relive the magic of Vaidyuthak through these unforgettable moments
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((event, index) => (
            <GalleryCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GalleryCard = ({ event }: { event: { title: string; urls: string[] } }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? event.urls.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === event.urls.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden glow-hover group cursor-pointer">
      <div className="relative aspect-square overflow-hidden">
        {/* Image */}
        <img
          src={event.urls[currentIndex]}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />

        {/* Overlay Title */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <p className="p-4 text-sm font-medium">{event.title}</p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 p-2 rounded-full hover:bg-background transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 p-2 rounded-full hover:bg-background transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {event.urls.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition ${
                idx === currentIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
