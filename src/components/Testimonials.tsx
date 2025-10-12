import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Pittsburgh, PA",
    text: "Bleza K Cleaning transformed my home! The attention to detail is incredible. Every corner sparkles and the team is professional and friendly.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    location: "Pittsburgh, PA",
    text: "Best cleaning service I've ever used. They made my move-out so much easier. The apartment looked better than when I moved in!",
    rating: 5
  },
  {
    name: "Emily Chen",
    location: "Pittsburgh, PA",
    text: "I use them for my Airbnb and my guests always comment on how clean everything is. Reliable, fast, and thorough. Highly recommend!",
    rating: 5
  },
  {
    name: "David Thompson",
    location: "Pittsburgh, PA",
    text: "Outstanding deep cleaning service! They tackled areas I didn't even know needed cleaning. My office has never looked better.",
    rating: 5
  },
  {
    name: "Jennifer Martinez",
    location: "Pittsburgh, PA",
    text: "Professional, punctual, and perfection! The post-construction cleanup was flawless. Will definitely use them again.",
    rating: 5
  },
  {
    name: "Robert Anderson",
    location: "Pittsburgh, PA",
    text: "Exceptional service from start to finish. Great communication and the results speak for themselves. Worth every penny!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
