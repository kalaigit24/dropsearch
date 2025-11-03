import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      title: "E-Commerce Growth Strategy",
      category: "Digital Marketing",
      result: "300% Revenue Increase",
      description: "Complete digital transformation resulting in unprecedented growth.",
    },
    {
      title: "Brand Identity Redesign",
      category: "Branding & Design",
      result: "50% Brand Recognition",
      description: "Modern brand identity that resonates with target audience.",
    },
    {
      title: "SaaS Platform Launch",
      category: "Development",
      result: "10K+ Active Users",
      description: "Full-stack development and successful market entry.",
    },
    {
      title: "Social Media Campaign",
      category: "Content Marketing",
      result: "2M+ Reach",
      description: "Viral campaign that exceeded all engagement metrics.",
    },
  ];

  return (
    <section id="cases" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped brands achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 p-8 group cursor-pointer hover:shadow-glow"
            >
              <div className="mb-4">
                <span className="text-primary text-sm font-bold uppercase tracking-wider">
                  {caseStudy.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {caseStudy.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {caseStudy.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Result</p>
                  <p className="text-xl font-bold text-primary">{caseStudy.result}</p>
                </div>
                <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" size={24} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
