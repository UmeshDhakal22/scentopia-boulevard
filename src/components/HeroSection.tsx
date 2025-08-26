import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroPerfume from "@/assets/hero-perfume.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroPerfume})` }}
      />
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/20" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 70px)`,
        }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Exclusive Collection 2024
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
            Discover Your
            <span className="block font-medium bg-gradient-champagne bg-clip-text text-transparent">
              Signature Scent
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Immerse yourself in our curated collection of luxury fragrances. 
            Each bottle holds a unique story waiting to be discovered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/explore">
              <Button size="xl" variant="luxury" className="group">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="xl" variant="outline">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-rose rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-champagne rounded-full blur-3xl opacity-20 animate-pulse" />
    </section>
  );
};

export default HeroSection;