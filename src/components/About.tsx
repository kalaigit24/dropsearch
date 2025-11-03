import founderImage from "@/assets/founder.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-full"></div>
              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-glow">
                <img
                  src={founderImage}
                  alt="Prasanth Subramanian - Founder"
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6 border-4 border-primary"
                />
                <h3 className="text-2xl font-bold text-center mb-2">Prasanth Subramanian</h3>
                <p className="text-primary text-center font-semibold">Founder of Dsignxt</p>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">
                ABOUT DSIGNXT
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bold Ideas. <span className="text-primary">Real Impact.</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded by Prashanth, Creative Director with over 13 years of experience in 
              Branding, Design & Digital Strategy, Dsignxt was built to transform ambitious 
              brands and disruptive startups into industry leaders.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              From global brand collaborations to launching a full-stack agency in Chennai, 
              Bangalore, and Texas, our journey is driven by passion and experience. We partner 
              with bold startups and growing businesses to make them visible, profitable, and 
              unforgettable—breaking barriers along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
