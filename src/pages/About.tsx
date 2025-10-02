import { Award, Target, Users, Zap } from "lucide-react";

const committees = [
  { name: "Technical Committee", link: "https://chat.whatsapp.com/JdM8I9r05FiIECsWYCAJzC?mode=ems_wa_t", description: "Manages all technical events, workshops, and competitions." },
  { name: "Design and Creativity Committee", link: "https://chat.whatsapp.com/C5CGZAy7XT627VpQdGzIXY?mode=ems_wa_t", description: "Handles visual design, graphics, stage setups, and creative branding." },
  { name: "Cultural Committee", link: "https://chat.whatsapp.com/EJ6RKCvp9VU0IZbApvT9Mf?mode=ems_wa_t", description: "Organizes cultural events like music, dance, drama, and performances." },
  { name: "Law and Order Committee", link: "https://chat.whatsapp.com/HCZTL7DoQkm7v6VPoj3t97?mode=ems_wa_t", description: "Maintains discipline, crowd management, and safety protocols." },
  { name: "Sports Committee", link: "https://chat.whatsapp.com/J508zD0jXo13MC32VR6Esa?mode=ems_wa_t", description: "Plans and manages all sports events and tournaments." },
  { name: "Stage Committee", link: "https://chat.whatsapp.com/LqOns8q3yVX3BFsxG6djbQ?mode=ems_wa_t", description: "Manages the main stage setup, sound, lighting, and smooth execution of performances and events." },
  { name: "Social Media Committee", link: "#", description: "Manages official social media accounts (Youtube) and online engagement." },
  // { name: "Photography Committee", link: "#", description: "Captures the fest’s moments through photography and videography." },
  // { name: "Marketing and Sponsorship Committee", link: "#", description: "Secures sponsors, manages marketing campaigns, and promotions." },
  // { name: "Decoration Committee", link: "#", description: "Handles all decorations, lighting, and ambiance for events." },
  // { name: "Video Games Committee", link: "#", description: "Organizes gaming competitions and manages gaming setups." },
];

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-12">About Vaidyuthak</h1>

          <div className="glass-card p-8 rounded-2xl mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Vaidyuthak is more than just a fest – it's a celebration of innovation, creativity, and talent. 
              Since its inception, Vaidyuthak has been the flagship event of our college's technical department, 
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

            {/* <div className="glass-card p-6 rounded-2xl glow-hover">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground">
                A diverse community of 500+ participants, united by passion and curiosity.
              </p>
            </div> */}
          </div>

          <div className="glass-card p-8 rounded-2xl mb-12">
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

          {/* Committees Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Our Committees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committees.map((committee, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl hover:shadow-glow-primary transition-all">
                  <h3 className="text-xl font-bold mb-2">{committee.name}</h3>
                  <p className="text-muted-foreground mb-4">{committee.description}</p>
                  <a
                    href={committee.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:shadow-glow-primary transition-all"
                  >
                    Join WhatsApp Group
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
