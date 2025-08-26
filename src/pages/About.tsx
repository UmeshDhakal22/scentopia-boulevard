import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl mb-8 text-center">Our Story</h1>
          
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-xl mb-6 text-center">
              Founded in 2020, Essence Luxe represents the pinnacle of fragrance artistry.
            </p>
            
            <div className="space-y-6">
              <p>
                We believe that fragrance is more than just a scent – it's an expression of identity, 
                a moment captured in time, a memory waiting to be made.
              </p>
              
              <p>
                Our perfumers work with the finest ingredients sourced from around the world, 
                crafting unique compositions that tell extraordinary stories.
              </p>
              
              <p>
                Every bottle in our collection represents hours of careful formulation, 
                ensuring each fragrance delivers an unforgettable sensory experience.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/explore">
              <Button variant="luxury" size="lg">
                Explore Our Collection
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;