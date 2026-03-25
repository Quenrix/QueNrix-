import { services } from "@/data/services.js";
import SectionHeading from "@/Components/SectionHeading.jsx";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const techStack = [
  "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL",
  "MongoDB", "Tailwind CSS", "AWS", "Docker", "GraphQL", "Figma",
  "After Effects", "Blender", "Photoshop", "Illustrator",
];

const Services = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading
            label="Our Services"
            title="What We Bring to the Table"
            description="Comprehensive digital solutions tailored to your business needs. Select a service to explore what we offer."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white border border-slate-300 rounded-xl p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-200 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-primary font-medium mb-3">{service.tagline}</p>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{service.description}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn More <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto">
          <SectionHeading label="Tech Stack" title="Technologies We Use" description="We work with the best tools and frameworks to deliver exceptional results." />
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech, i) => (
              <span key={i} className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Have a Project in Mind?</h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8">
            Whether you need a complete redesign, a new web app, or a brand overhaul — we'd love to hear about it.
          </p>
          <Link to="/contact" className="inline-flex px-8 py-3.5 rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition-all" style={{ backgroundColor: '#6366f1', color: '#ffffff' }}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Services;
