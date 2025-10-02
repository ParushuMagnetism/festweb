import { useState } from "react";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technical", "Cultural", "Sports"];

  const events = [
    {
      title: "Hackathon 24",
      description: "24-hour coding marathon to build innovative solutions",
      category: "Technical",
      date: "oct 15, 2025",
      time: "9:00 AM - 9:00 AM (Next Day)",
      venue: "Computer Lab Block A",
      participants: "Teams of 2-4",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      registerLink: "https://forms.gle/gWL5DkPuqgGM3sDm8",
    },
    {
      title: "Battle of Bands",
      description: "Rock the stage with your band and compete for the ultimate music crown",
      category: "Cultural",
      date: "oct 16, 2025",
      time: "7:00 PM - 11:00 PM",
      venue: "Open Air Theatre",
      participants: "Bands of 4-8 members",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&q=80",
      registerLink: "https://forms.gle/your-battleofbands-form",
    },
    {
      title: "Cricket Tournament",
      description: "Hit sixes and take wickets in our action-packed cricket championship",
      category: "Sports",
      date: "oct 15-17, 2025",
      time: "8:00 AM - 6:00 PM",
      venue: "Cricket Ground",
      participants: "Teams of 11",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80",
      registerLink: "https://forms.gle/your-cricket-form",
    },
    // Add more events with unique Google Form links as needed
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
