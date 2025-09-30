import { useState } from "react";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technical", "Cultural", "Sports"];

  const events = [
    {
      title: "Hackathon 24",
      description: "24-hour coding marathon to build innovative solutions for real-world problems",
      category: "Technical",
      date: "April 15, 2025",
      time: "9:00 AM - 9:00 AM (Next Day)",
      venue: "Computer Lab Block A",
      participants: "Teams of 2-4",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    },
    {
      title: "Robot Wars",
      description: "Battle of the bots - Design, build, and compete with your custom robots",
      category: "Technical",
      date: "April 16, 2025",
      time: "2:00 PM - 6:00 PM",
      venue: "Main Arena",
      participants: "Teams of 3-5",
      image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80",
    },
    {
      title: "Web Design Championship",
      description: "Showcase your creativity and technical skills in modern web design",
      category: "Technical",
      date: "April 15, 2025",
      time: "10:00 AM - 4:00 PM",
      venue: "Design Studio",
      participants: "Individual or Teams of 2",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    },
    {
      title: "Battle of Bands",
      description: "Rock the stage with your band and compete for the ultimate music crown",
      category: "Cultural",
      date: "April 16, 2025",
      time: "7:00 PM - 11:00 PM",
      venue: "Open Air Theatre",
      participants: "Bands of 4-8 members",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&q=80",
    },
    {
      title: "Dance Face-Off",
      description: "Express yourself through movement in this electrifying dance competition",
      category: "Cultural",
      date: "April 17, 2025",
      time: "5:00 PM - 9:00 PM",
      venue: "Main Auditorium",
      participants: "Solo or Groups up to 15",
      image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80",
    },
    {
      title: "Fashion Show",
      description: "Walk the ramp and showcase the latest trends and your creative designs",
      category: "Cultural",
      date: "April 17, 2025",
      time: "8:00 PM - 10:00 PM",
      venue: "Main Auditorium",
      participants: "Individual or Pairs",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
    },
    {
      title: "Cricket Tournament",
      description: "Hit sixes and take wickets in our action-packed cricket championship",
      category: "Sports",
      date: "April 15-17, 2025",
      time: "8:00 AM - 6:00 PM",
      venue: "Cricket Ground",
      participants: "Teams of 11",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80",
    },
    {
      title: "Basketball 3x3",
      description: "Fast-paced 3-on-3 basketball action on the outdoor court",
      category: "Sports",
      date: "April 16, 2025",
      time: "9:00 AM - 5:00 PM",
      venue: "Basketball Court",
      participants: "Teams of 3",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    },
  ];

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center mb-6">Events</h1>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Choose your battleground! From technical challenges to cultural showcases, we have events for every passion.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-gradient-festive hover:shadow-glow-primary"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            No events found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
