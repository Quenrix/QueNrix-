import { Target, Eye, Award, Users, Zap, Shield, Heart, Globe, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/Components/SectionHeading.jsx";
import ProjectCard from "@/Components/ProjectCard.jsx";

// Project images
const portfolio1 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop";
const portfolio2 = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop";
const portfolio3 = "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop";
const portfolio4 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop";

const projects = [
  {
    image: portfolio1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for a multi-vendor online retail platform with real-time analytics, inventory management, and order tracking.",
    category: "Web Development",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    image: portfolio2,
    title: "FitTrack Mobile App",
    description: "A fitness tracking application with workout planning, progress analytics, social features, and integration with wearable devices.",
    category: "UI/UX Design",
    tech: ["Figma", "React Native", "Firebase"],
  },
  {
    image: portfolio3,
    title: "Heredity Brand Identity",
    description: "Complete brand identity system for a biotech startup including logo, stationery, brand guidelines, and digital asset library.",
    category: "Branding",
    tech: ["Illustrator", "InDesign", "Figma"],
  },
  {
    image: portfolio4,
    title: "SaaS Analytics Platform",
    description: "Enterprise data visualization dashboard with real-time charts, custom reports, team collaboration, and automated insights.",
    category: "Web Development",
    tech: ["Next.js", "D3.js", "Python", "AWS"],
  },
];
const clientLogos = [
  "TechVault", "CloudSync", "GreenLeaf", "Nexora", "Pinnacle", "Vortex Labs",
];
const Portfolio = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Header */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Recent Work"
            description="A selection of projects we're proud of — each one a story of collaboration, craft, and measurable results. Hover over each project to see details."
          />
        </div>
      </section>
      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={i} index={i} {...project} />
            ))}
          </div>
        </div>
      </section>
      {/* Project Details */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto">
          <SectionHeading title="Impact We've Delivered" description="Numbers that speak louder than words." />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "3x", label: "Average Revenue Growth" },
              { value: "50%", label: "Faster Load Times" },
              { value: "200%", label: "Increase in User Engagement" },
              { value: "40+", label: "Awards Won by Client Projects" },
            ].map((stat, i) => (
              <div key={i} className="p-6 text-center transition-all duration-300 bg-white border border-slate-300 rounded-xl hover:-translate-y-2 hover:shadow-xl">
                <p className="mb-2 text-2xl font-bold md:text-3xl text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Trusted By */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading title="Companies We've Worked With" />
          <div className="flex flex-wrap justify-center gap-6">
            {clientLogos.map((name, i) => (
              <div key={i} className="px-8 py-4 text-lg font-semibold transition-colors bg-white border cursor-default border-slate-300 rounded-xl text-slate-900 hover:text-primary hover:border-primary/30">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
            Want Your Project Featured Here?
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-slate-600">
            Let's create something remarkable together. Tell us about your project and we'll show you what's possible.
          </p>
          <Link to="/contact" className="inline-flex px-8 py-3.5 rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition-all" style={{ backgroundColor: '#6366f1', color: '#ffffff' }}>
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Portfolio;