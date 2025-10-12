import { Sparkles, Home, Truck, HardHat, Building2, Key } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Comprehensive deep cleaning for a spotless, sanitized space from top to bottom."
  },
  {
    icon: Home,
    title: "Regular Cleaning",
    description: "Weekly, biweekly, or monthly maintenance to keep your space pristine."
  },
  {
    icon: Key,
    title: "Move-In/Move-Out",
    description: "Complete cleaning services for seamless property transitions."
  },
  {
    icon: HardHat,
    title: "Post Construction",
    description: "Professional cleanup after renovation or construction projects."
  },
  {
    icon: Building2,
    title: "Airbnb Cleaning",
    description: "Fast, thorough turnaround cleaning for vacation rentals."
  },
  {
    icon: Truck,
    title: "Residential & Commercial",
    description: "Expert cleaning solutions for homes and businesses of all sizes."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 group"
            >
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
