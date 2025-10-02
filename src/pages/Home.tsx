import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const chiefs = [
  
  {
    name: "Dr. Parameshwar S",
    role: "Head of the Department",
    image: "https://i.ibb.co/WWgK91vR/IMG-20250930-233027.jpg",
  },
  {
    name: "Mr. Puneeth S",
    role: "Faculty Coordinator",
    image: "https://i.ibb.co/cStFxTGj/IMG-20250930-233047.jpg",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 to-background" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-float mb-6">
            {/* <Sparkles className="w-16 h-16 mx-auto text-primary" /> */}
          
          
          {/* Logo */}
          <img
            src="https://res.cloudinary.com/dylzolnfu/image/upload/v1731179034/Untitled__1_-removebg-preview_vznmb0.png"
            alt="Vaidyuthak Logo"
            className="w-32 h-32 mx-auto mb-6 rounded-full object-cover"
          />
          </div>

          <h1 className="mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
            Vaidyuthak 2025
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Where Innovation Meets Celebration
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            Oct-Nov, 2025 | ECE | National Institute Of Engineering, Mysore
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            {/* <a
              href="https://forms.gle/your-registration-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-festive hover:shadow-glow-primary transition-all text-lg px-8">
                Register Now
              </Button>
            </a> */}
            <Link to="/events">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Events
              </Button>
            </Link>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
            <CountdownTimer />
          </div>
        </div>
      </section>

   {/* Chief Patrons */}
<section className="py-20 bg-background/80">
  <div className="container mx-auto px-4">
    <h2 className="text-center mb-12 gradient-text">Chief Patrons</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center">
      {chiefs.map((chief, index) => (
        <div
          key={index}
          className="glass-card p-6 rounded-2xl flex flex-col items-center glow-hover"
        >
          <img
            src={chief.image}
            alt={chief.name}
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-bold">{chief.name}</h3>
          <p className="text-muted-foreground">{chief.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 gradient-text">About Vaidyuthak</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vaidyuthak is the annual technical and cultural extravaganza organized by our college Electronics And Communication department. 
              It brings together students, innovators, and creative minds from across the country for three days 
              of competitions, workshops, performances, and unforgettable experiences.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
