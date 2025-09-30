const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      title: "TechFiesta 2024 Opening Ceremony",
    },
    {
      url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
      title: "Hackathon in Action",
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      title: "Cultural Night Performance",
    },
    {
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      title: "Battle of Bands Winner",
    },
    {
      url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      title: "Dance Competition",
    },
    {
      url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      title: "DJ Night",
    },
    {
      url: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
      title: "Robot Wars Arena",
    },
    {
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
      title: "Crowd Enjoying",
    },
    {
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
      title: "Award Ceremony",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center mb-6">Gallery</h1>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Relive the magic of TechFiesta through these unforgettable moments from previous years
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden glow-hover group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="p-4 text-sm font-medium">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
