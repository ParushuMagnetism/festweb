import { Award, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-12">About TechFiesta</h1>

          <div className="glass-card p-8 rounded-2xl mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              TechFiesta is more than just a fest – it's a celebration of innovation, creativity, and talent. 
              Since its inception, TechFiesta has been the flagship event of our college's technical department, 
              bringing together brilliant minds from across the nation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over three action-packed days, participants engage in cutting-edge technical competitions, 
              vibrant cultural performances, and networking opportunities that shape future leaders and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-6 rounded-2xl glow-hover">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To create a platform that fosters innovation, encourages creativity, and builds connections 
                that last a lifetime.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl glow-hover">
              <Zap className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the premier technical and cultural fest that inspires the next generation of 
                technologists and artists.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl glow-hover">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground">
                A diverse community of 5000+ participants from over 100 colleges nationwide, united by 
                passion and curiosity.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl glow-hover">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Recognized as one of the top college fests in the region, with industry partnerships and 
                prestigious awards.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">What Makes Us Special?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Diverse Events:</strong> From hackathons and robotics to 
                  dance and music competitions, we have something for everyone.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Industry Connections:</strong> Network with professionals, 
                  attend workshops by industry leaders, and explore career opportunities.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Massive Prize Pool:</strong> Compete for prizes worth 
                  over ₹5 lakhs across various events.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Memorable Experience:</strong> Create lasting memories with 
                  late-night performances, food stalls, and unforgettable moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
