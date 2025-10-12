import { useState } from "react";
import beforeToilet from "@/assets/before-toilet.jpg";
import afterToilet from "@/assets/after-toilet.jpg";
import beforeSink from "@/assets/before-sink.jpg";
import afterSink from "@/assets/after-sink.jpg";
import { Card } from "@/components/ui/card";

const transformations = [
  {
    before: beforeToilet,
    after: afterToilet,
    title: "Toilet Deep Clean"
  },
  {
    before: beforeSink,
    after: afterSink,
    title: "Sink Restoration"
  }
];

const BeforeAfter = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([0, 0]);

  const toggleImage = (transformIndex: number) => {
    setActiveIndex(prev => {
      const newIndex = [...prev];
      newIndex[transformIndex] = newIndex[transformIndex] === 0 ? 1 : 0;
      return newIndex;
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Before & After
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the transformative power of our professional cleaning services
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {transformations.map((transformation, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] cursor-pointer group" onClick={() => toggleImage(index)}>
                <img 
                  src={activeIndex[index] === 0 ? transformation.before : transformation.after}
                  alt={`${transformation.title} - ${activeIndex[index] === 0 ? 'Before' : 'After'}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full font-semibold">
                  {activeIndex[index] === 0 ? 'BEFORE' : 'AFTER'}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <p className="text-white text-lg font-semibold">Click to toggle</p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5">
                <h3 className="text-2xl font-bold text-center">{transformation.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
