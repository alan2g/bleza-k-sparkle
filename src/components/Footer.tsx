import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const phoneNumber = "+14129238769";
  const email = "Kahbleza@gmail.com";
  
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Logo & Company */}
          <div className="text-center md:text-left">
            <img 
              src={logo} 
              alt="Bleza K Cleaning Service" 
              className="w-32 h-32 mx-auto md:mx-0 mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Bleza K Cleaning Service</h3>
            <p className="text-white/80">
              Professional cleaning services for residential and commercial properties.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-accent">Contact Us</h4>
            <div className="space-y-4">
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-3 hover:text-accent transition-colors group justify-center md:justify-start"
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">+1 (412) 923-8769</span>
              </a>
              
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-3 hover:text-accent transition-colors group justify-center md:justify-start"
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">{email}</span>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Deep Cleaning</li>
              <li>Regular Cleaning</li>
              <li>Move-In/Move-Out</li>
              <li>Post Construction</li>
              <li>Airbnb Cleaning</li>
              <li>Residential & Commercial</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Bleza K Cleaning Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
