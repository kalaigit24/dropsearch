import { Target, Palette, TrendingUp, Users, Code, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "End-to-End ROI & Business Consulting",
      description: "We align business goals with creative strategies to deliver measurable growth. From ROI planning to execution, every step is designed to maximise impact.",
    },
    {
      icon: Palette,
      title: "Branding, Design & Development",
      description: "From logos to full-scale brand identities, we create designs that resonate with audiences and development solutions that perform.",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing & SEO",
      description: "Data-driven campaigns that deliver results. We optimize every channel to ensure maximum ROI and sustainable growth.",
    },
    {
      icon: Users,
      title: "Social Media & Content Marketing",
      description: "Engaging content that builds communities and drives conversions. We create stories that connect with your audience.",
    },
    {
      icon: Code,
      title: "Web & App Development",
      description: "Cutting-edge digital solutions built for performance and scalability. We transform ideas into powerful digital experiences.",
    },
    {
      icon: Award,
      title: "Strategic Brand Consulting",
      description: "Expert guidance to position your brand for success. We help you navigate market challenges and seize opportunities.",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From branding and marketing to visuals and consulting, we deliver solutions 
            that elevate your brand and drive measurable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 p-8 group hover:shadow-glow"
            >
              <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
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
