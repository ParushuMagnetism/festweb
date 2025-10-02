import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";

const images = [
  {
    src: "https://i.ibb.co/jPpWv6b5/IMG-20250930-211224.jpg",
    name: "Keerthi Bhushan K S",
    role: "Chair Person",
    phone: "+91 80505 06064",
  },
  {
    src: "https://i.ibb.co/jPjg9S6D/IMG-20250930-211041.jpg",
    name: "Gopinath R",
    role: "President",
    phone: "+91 87226 16520",
  },
  {
    src: "https://i.ibb.co/RGqdWkFT/IMG-20250930-211327.jpg",
    name: "Shayan Shetty",
    role: "Vice President",
    phone: "+91 87920 05208",
  },
  {
    src: "https://i.ibb.co/KcMndrmD/IMG-20250930-211304.jpg",
    name: "Shivani Singh S A",
    role: "Secretary",
    phone: "+91 #",
  },
  {
    src: "https://i.ibb.co/1YjjY6nb/IMG-20250930-211344.jpg",
    name: "Koshitha M J",
    role: "Treasurer",
    phone: "+91 #",
  }, {
    src: "https://i.ibb.co/0RpbdJpy/IMG-20250930-211514.jpg",
    name: "Parushuram M",
    role: "Website Head",
    phone: "+91 89040 42579",
  },
  {
    src: "https://i.ibb.co/tp7fdQWj/IMG-20250930-211244.jpg",
    name: "Nakul L",
    role: "Cultural Secretary",
    phone: "+91 99458 22777",
  },
  {
    src: "https://i.ibb.co/YFvDc6tn/IMG-20250930-211205.jpg",
    name: "Lekhana N",
    role: "Technical Head",
    phone: "+91 #",
  },
  {
    src: "https://i.ibb.co/fgc8F92/IMG-20250930-211358.jpg",
    name: "Sanjay S Hanchinal",
    role: "Technical Head",
    phone: "+91 81057 81505",
  },
  {
    src: "https://i.ibb.co/JjZMRM0B/IMG-20250930-211415.jpg",
    name: "Akash C S",
    role: "Sports Secretary",
    phone: "+91 74117 26345",
  },
  {
    src: "https://i.ibb.co/wFfjcZGX/IMG-20250930-211128.jpg",
    name: "Kruthi Gowda",
    role: "Sports Secretary",
    phone: "+91 #",
  },
  {
    src: "https://i.ibb.co/ns87X1bN/IMG-20250930-211110.jpg",
    name: "Sadashiv",
    role: "Sports Secretary",
    phone: "+91 87221 99999",
  },
 
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  // Scroll when index changes
  useEffect(() => {
    if (containerRef.current && slideRef.current) {
      const slideWidth = slideRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto overflow-hidden bg-white rounded-2xl shadow-lg p-6">
      {/* Left Button */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div ref={containerRef} className="flex overflow-hidden">
        {images.map((item, index) => (
          <div
            key={index}
            ref={index === 0 ? slideRef : null}
            className="flex-none w-full md:w-1/2 lg:w-1/3 px-4"
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-auto rounded-xl shadow-md mb-4"
            />
            <h1 className="text-xl font-bold text-center">{item.name}</h1>
            <p className="text-gray-500 text-center">{item.role}</p>
            <p className="text-gray-600 text-center flex items-center justify-center gap-1">
              <Phone className="w-4 h-4" /> {item.phone}
            </p>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        disabled={currentIndex === images.length - 1}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;
