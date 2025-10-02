import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  participants: string;
  image: string;
  registerLink?: string; // Google Form link
}

const EventCard = ({
  title,
  description,
  category,
  date,
  time,
  venue,
  participants,
  image,
  registerLink,
}: EventCardProps) => {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "technical":
        return "bg-primary/20 text-primary";
      case "cultural":
        return "bg-secondary/20 text-secondary";
      case "sports":
        return "bg-accent/20 text-accent";
      default:
        return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden glow-hover group flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
              category
            )}`}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Event Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold mb-2 gradient-text">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{venue}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            <span>{participants}</span>
          </div>
        </div>

        {/* Register Button */}
        {registerLink && (
          <a href={registerLink} target="_blank" rel="noopener noreferrer" className="mt-auto">
            <Button className="w-full bg-gradient-festive hover:shadow-glow-primary transition-all">
              Register Now
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
