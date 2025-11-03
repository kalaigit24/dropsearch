import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc",
      content: "Working with Dsignxt transformed our digital presence completely. Their strategic approach and creative execution exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthCo",
      content: "The ROI we've seen from their campaigns is incredible. They truly understand how to connect brands with their audience.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, StyleHub",
      content: "From branding to development, every touchpoint was handled with professionalism and creativity. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-8 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.position}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
