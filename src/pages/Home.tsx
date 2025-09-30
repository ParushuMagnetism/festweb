import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import { Calendar, Trophy, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

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
          <div className="animate-float">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary" />
          </div>
          
          <h1 className="mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
            TechFiesta 2025
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Where Innovation Meets Celebration
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            April 15-17, 2025 | College Campus
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-festive hover:shadow-glow-primary transition-all text-lg px-8">
                Register Now
              </Button>
            </Link>
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

      {/* Quick Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center glow-hover">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold gradient-text mb-2">30+</div>
              <div className="text-muted-foreground">Events</div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center glow-hover">
              <Users className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <div className="text-4xl font-bold gradient-text mb-2">5000+</div>
              <div className="text-muted-foreground">Participants</div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center glow-hover">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold gradient-text mb-2">₹5L+</div>
              <div className="text-muted-foreground">Prize Pool</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 gradient-text">About TechFiesta</h2>
            <p className="text-lg text-muted-foreground mb-8">
              TechFiesta is the annual technical and cultural extravaganza organized by our college department. 
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
