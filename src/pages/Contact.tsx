import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Carousel from "@/components/Carousel";
import { Mail, MapPin, Phone, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { toast } = useToast();

  // Google Form Configuration
  const googleFormAction =
    "https://docs.google.com/forms/d/e/1FAIpQLSfEZM0Nyi9_5dP29zNh31tpVJPPEoi3_Jn3mm3kRidHMn-DfQ/formResponse";
  const nameEntryId = "entry.1234567890"; // Replace with your actual IDs
  const emailEntryId = "entry.2345678901";
  const subjectEntryId = "entry.3456789012";
  const messageEntryId = "entry.4567890123";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Submit to Google Form
    const form = document.createElement("form");
    form.action = googleFormAction;
    form.method = "POST";
    form.target = "_blank";

    const createInput = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      return input;
    };

    form.appendChild(createInput(nameEntryId, formData.name));
    form.appendChild(createInput(emailEntryId, formData.email));
    form.appendChild(createInput(subjectEntryId, formData.subject));
    form.appendChild(createInput(messageEntryId, formData.message));

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    toast({
      title: "Message Sent!",
      description: "Your message has been sent via Google Form.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center mb-4 text-4xl font-bold gradient-text">Contact Us</h1>

        {/* Committee Carousel */}
        <div className="mt-12 mb-16">
          <h2 className="text-center text-3xl font-bold mb-8 gradient-text">
            Committee Members
          </h2>
          <Carousel />
        </div>

        <p className="text-center text-muted-foreground text-lg mt-6 mb-12 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as
          possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@nie.ac.in"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-festive hover:shadow-glow-primary transition-all"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl glow-hover">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Electronics and Communication Department (NRN Block)
                    <br />
                    The National Institute of Engineering
                    <br />
                    Manandavadi Road, Mysuru - 570008
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="glass-card p-6 rounded-2xl glow-hover">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <a
                    href="mailto:info@techfiesta.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@techfiesta.com
                  </a>
                  <br />
                  <a
                    href="mailto:sponsors@techfiesta.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sponsors@techfiesta.com
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="glass-card p-6 rounded-2xl glow-hover">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    +91 12345 67890
                    <br />
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div> */}

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/vaidyuthak_2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 hover:shadow-glow-primary transition-all rounded-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 hover:shadow-glow-primary transition-all rounded-lg"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="glass-card p-2 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.4742226869243!2d76.6414748!3d12.2838184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf65561e102919%3A0xf947b18cc5ad3d88!2sThe%20National%20Institute%20of%20Engineering%20South%20Campus%20(NIE%20South)!5e0!3m2!1sen!2sin!4v1759238988262!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
