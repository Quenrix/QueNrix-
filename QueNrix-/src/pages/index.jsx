import { Link } from "react-router-dom";
import { BrainCircuit, Sparkles, Bot, BarChart3, Database, Cloud, Settings2, Quote, ArrowRight, CheckCircle, Users, Globe, Award } from "lucide-react";
import ServiceCard from "@/Components/ServiceCard.jsx";
import SectionHeading from "@/Components/SectionHeading.jsx";
import StatCard from "@/Components/StatCard.jsx";
import CardSlider from "@/Components/CardSlider.jsx";
import { trainingToolCategories } from "@/data/trainingTools.js";

// Placeholder image - replace with actual hero background
const heroBg = "https://via.placeholder.com/1920x1080/6366f1/ffffff?text=Hero+Background";
const testimonials = [
  {
    quote: "QueNrix transformed our brand completely. Their design team delivered beyond our expectations with stunning visuals and seamless UX. The attention to detail was remarkable.",
    name: "Arjun Singh",
    company: "TechVault India",
    role: "CEO",
  },
  {
    quote: "The web application they built for us handles thousands of users daily without a hitch. Truly world-class development. Their team communicated flawlessly throughout.",
    name: "Priya Sharma",
    company: "CloudSync Solutions",
    role: "CTO",
  },
  {
    quote: "Their branding strategy helped us stand out in a crowded market. Revenue increased 40% within three months of launch. I cannot recommend them enough.",
    name: "Vikram Kapoor",
    company: "GreenLeaf Innovations",
    role: "Marketing Director",
  },
];
const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "35+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];
const processSteps = [
  { step: "01", title: "Discovery", desc: "We start by understanding your business, goals, audience, and competition through in-depth research and strategy sessions." },
  { step: "02", title: "Design", desc: "Our designers create wireframes, mockups, and prototypes that bring your vision to life with pixel-perfect precision." },
  { step: "03", title: "Development", desc: "Our engineers build scalable, performant applications using cutting-edge technologies and industry best practices." },
  { step: "04", title: "Launch & Support", desc: "We deploy, test, and optimize your project, providing ongoing support and maintenance to ensure long-term success." },
];
const toolCategories = trainingToolCategories.map(({ id, title }) => ({ id, title }));
const Index = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-slate-50">
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-white to-slate-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDk5LCAxMDIsIDI0MSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>
        
        <div className="container relative z-10 px-4 py-32 mx-auto text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full bg-primary/10 border-primary/20 backdrop-blur-sm animate-bounce">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-primary"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary"></span>
            </span>
            <span className="text-sm font-semibold text-primary">Award-Winning AI & Engineering Partner</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] text-center">
            <span className="block">AI, RAG, Data, Cloud{" "}
              <span className="text-slate-900">
                Solutions
              </span>
            </span>
            <span className="block">and DevOps Built for{" "}
              <span className="text-slate-900">
                Real Business Growth
              </span>
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed sm:text-xl text-slate-600">
            We deliver Gen AI, Agentic AI, RAG, Data Science, Data Engineering, Cloud, DevOps,
            and modern app or website development to help teams ship faster and scale with confidence.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold transition-all shadow-xl group rounded-xl hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: '#6366f1', color: '#ffffff' }}
            >
              Discuss Your Use Case
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold transition-all bg-white border-2 rounded-xl border-slate-300 text-slate-900 hover:border-primary hover:text-primary"
            >
              View Our Work
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-primary/20 filter blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-secondary/20 filter blur-3xl animate-pulse"></div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <StatCard key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <SectionHeading
            title="Services We Offer"
            description="From AI strategy to production engineering, we provide end-to-end capabilities across intelligent systems, data platforms, cloud operations, and product development so your business can innovate and scale sustainably."
          />
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 xl:grid-cols-4">
            <ServiceCard icon={BrainCircuit} title="AI Solutions" description="Applied AI systems tailored to business workflows for automation, prediction, and decision support." link="/services/ai-solutions" />
            <ServiceCard icon={Sparkles} title="Gen AI" description="Generative AI applications for content, copilots, and intelligent product experiences with measurable ROI." link="/services/gen-ai" />
            <ServiceCard icon={Bot} title="Agentic AI" description="Multi-step AI agents that plan, reason, and take actions across tools and enterprise processes." link="/services/agentic-ai" />
            <ServiceCard icon={BarChart3} title="Data Science" description="Modeling, experimentation, and analytics to turn raw data into insights, forecasts, and smarter decisions." link="/services/data-science" />
            <ServiceCard icon={Database} title="Data Engineering" description="Reliable data pipelines, warehousing, and governance foundations that power trustworthy analytics and AI." link="/services/data-engineering" />
            <ServiceCard icon={Cloud} title="Cloud Engineering" description="Cloud architecture, migration, and optimization across secure, scalable, and cost-efficient environments." link="/services/cloud-engineering" />
            <ServiceCard icon={Settings2} title="DevOps" description="CI/CD, IaC, observability, and release automation to improve velocity, resilience, and operational excellence." link="/services/devops" />
            <ServiceCard icon={Globe} title="App & Website Development" description="Responsive websites and scalable applications built with modern technologies for fast, secure, and user-friendly digital experiences." link="/services/app-website-development" />
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-lg font-semibold transition-colors text-primary hover:text-secondary group">
              View All Services 
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">Tools & Technologies</h3>
            <p className="max-w-3xl mx-auto text-slate-600">
              Click a category to open its detailed tools and learning information on the Training page.
            </p>
          </div>
          <div className="mt-10">
            <CardSlider
              items={toolCategories}
              ariaLabel="Tools and technologies slider"
              itemWidth="clamp(280px, 22vw, 340px)"
              renderItem={(group) => (
                <Link
                  to={`/training#${group.id}`}
                  className="flex items-center justify-center h-48 p-6 text-center transition-all bg-white border border-slate-200 rounded-2xl hover:border-primary/40 hover:shadow-lg"
                >
                  <h4 className="text-2xl font-extrabold leading-tight xl:text-3xl text-slate-900">{group.title}</h4>
                </Link>
              )}
            />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <SectionHeading
            title="How We Work"
            description="A proven four-step process that ensures every project is delivered with precision, on time, and beyond expectations."
          />
          <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, i) => (
              <div 
                key={i} 
                className="relative p-8 transition-all duration-300 bg-white border group border-slate-200 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                <div className="absolute inset-0 transition-opacity opacity-0 bg-linear-to-br from-primary/5 to-transparent rounded-2xl group-hover:opacity-100"></div>
                <span className="relative text-5xl font-black text-primary">{item.step}</span>
                <h3 className="relative mt-4 mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="relative text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl text-slate-900">
                We Don't Just Build Websites — We Drive{" "}
                <span className="text-primary">
                  Digital Transformation
                </span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Every project we take on is treated as a strategic partnership. We dig deep into your business goals, understand your users, and deliver solutions that move the needle.
              </p>
              <div className="space-y-4">
                {[
                  "Full-stack design & development under one roof",
                  "Agile methodology with transparent communication",
                  "Post-launch analytics and continuous optimization",
                  "Dedicated project manager for every engagement",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <CheckCircle className="transition-transform text-primary shrink-0 group-hover:scale-110" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, title: "Expert Team", desc: "35+ seasoned professionals across design, engineering, and strategy." },
                { icon: Globe, title: "Global Reach", desc: "Clients across 15 countries from startups to Fortune 500." },
                { icon: Award, title: "Award Winning", desc: "Recognized by Awwwards, CSS Design Awards, and more." },
                { icon: Settings2, title: "Modern Stack", desc: "React, TypeScript, Node.js, AWS, and cutting-edge tools." },
              ].map((item, i) => (
                <div key={i} className="p-6 transition-all duration-300 bg-white border group border-slate-200 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                  <item.icon className="mb-4 transition-transform text-primary group-hover:scale-110" size={28} />
                  <h4 className="mb-2 font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <SectionHeading 
            title="What Our Clients Say" 
            description="Don't just take our word for it — hear from the businesses we've helped transform." 
          />
          <div className="mt-16">
            <CardSlider
              items={testimonials}
              ariaLabel="Client testimonials slider"
              renderItem={(t) => (
                <div className="h-full p-8 transition-all duration-300 bg-white border group border-slate-200 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2">
                  <Quote className="mb-6 transition-colors text-primary/30 group-hover:text-primary/50" size={36} />
                  <p className="mb-6 leading-relaxed text-slate-700">"{t.quote}"</p>
                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-lg font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm font-semibold text-primary">{t.role}</p>
                    <p className="text-sm text-slate-500">{t.company}</p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl p-12 mx-auto text-center bg-white border shadow-2xl backdrop-blur-xl border-slate-200 rounded-3xl lg:p-16">
            <h2 className="mb-6 text-4xl font-extrabold lg:text-5xl text-slate-900">
              Ready to Start Your{" "}
              <span className="text-primary">
                Next Project
              </span>
              ?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-slate-600">
              Let's collaborate to create something amazing. Whether you need a brand refresh, a new web app, or a complete digital strategy — we're here to help.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold transition-all shadow-xl group rounded-xl hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: '#6366f1', color: '#ffffff' }}
              >
                Get a Free Quote 
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </Link>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold transition-all bg-white border-2 rounded-xl border-slate-300 text-slate-900 hover:border-primary hover:text-primary"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Index;
