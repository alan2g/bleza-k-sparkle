import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const handleCall = () => {
    window.location.href = "tel:+14129238769";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
      <Button
        size="lg"
        onClick={handleCall}
        className="rounded-full w-16 h-16 shadow-2xl bg-gradient-to-r from-primary to-accent hover:scale-110 transition-transform duration-300"
      >
        <Phone className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingCTA;
