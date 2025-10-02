import { ExternalLink } from "lucide-react";

const Sponsors = () => {
  const sponsors = [
    {
      name: "TechCorp",
      tier: "Platinum",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&q=80",
      website: "https://techcorp.example.com",
      description: "Leading technology solutions provider",
    },
    {
      name: "InnovateLabs",
      tier: "Gold",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80",
      website: "https://innovatelabs.example.com",
      description: "Innovation and research company",
    },
    // {
    //   name: "CodeMasters",
    //   tier: "Gold",
    //   logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=80",
    //   website: "https://codemasters.example.com",
    //   description: "Software development excellence",
    // },
    // {
    //   name: "DigitalFirst",
    //   tier: "Silver",
    //   logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80",
    //   website: "https://digitalfirst.example.com",
    //   description: "Digital transformation specialists",
    // },
    // {
    //   name: "CloudTech",
    //   tier: "Silver",
    //   logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80",
    //   website: "https://cloudtech.example.com",
    //   description: "Cloud infrastructure provider",
    // },
    {
      name: "StartupHub",
      tier: "Bronze",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
      website: "https://startuphub.example.com",
      description: "Supporting innovation ecosystem",
    },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return "text-primary";
      case "Gold":
        return "text-accent";
      case "Silver":
        return "text-secondary";
      default:
        return "text-muted-foreground";
    }
  };

  const getTierSize = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return "md:col-span-2";
      case "Gold":
        return "md:col-span-1";
      default:
        return "md:col-span-1";
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center mb-6">Our Sponsors</h1>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Vaidyuthak 2025 is powered by these amazing partners who believe in innovation and talent
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-8 glow-hover ${getTierSize(sponsor.tier)}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 glass-card p-4">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <span className={`text-sm font-semibold mb-2 ${getTierColor(sponsor.tier)}`}>
                  {sponsor.tier} Sponsor
                </span>
                
                <h3 className="text-2xl font-bold mb-2">{sponsor.name}</h3>
                
                <p className="text-muted-foreground text-sm mb-4">{sponsor.description}</p>
                
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Become a Sponsor</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Partner with Vaidyuthak and reach 500+ talented students, innovators, and future leaders. 
            Contact us to explore sponsorship opportunities.
          </p>
          <a
            href="https://www.instagram.com/vaidyuthak_2025"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg"
          >
            Vaidyuthak_2025
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
