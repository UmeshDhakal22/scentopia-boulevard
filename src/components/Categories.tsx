import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import categoryBanner from "@/assets/category-banner.jpg";

const Categories = () => {
  const categories = [
    {
      name: "For Her",
      description: "Elegant feminine fragrances",
      image: categoryBanner,
      link: "/explore?category=women",
      gradient: "bg-gradient-rose"
    },
    {
      name: "For Him",
      description: "Sophisticated masculine scents",
      image: categoryBanner,
      link: "/explore?category=men",
      gradient: "bg-gradient-primary"
    },
    {
      name: "Unisex",
      description: "Versatile fragrances for everyone",
      image: categoryBanner,
      link: "/explore?category=unisex",
      gradient: "bg-gradient-champagne"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Find the perfect fragrance for every personality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.link}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="relative overflow-hidden h-80 border-0 shadow-medium hover:shadow-luxury transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent z-10" />
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="font-heading text-2xl mb-2 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;