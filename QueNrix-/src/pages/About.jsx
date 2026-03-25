import { Target, Eye, Award, Users, Zap, Shield, Heart, Globe, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/Components/SectionHeading.jsx";
import TeamCard from "@/Components/TeamCard.jsx";
import StatCard from "@/Components/StatCard.jsx";

// Placeholder images
const team1 = "https://i.pravatar.cc/300?img=12";
const team2 = "https://i.pravatar.cc/300?img=47";
const team3 = "https://i.pravatar.cc/300?img=33";
const team4 = "https://i.pravatar.cc/300?img=56";
const whyChooseUs = [
  { icon: Award, title: "Award Winning", desc: "Recognized by Awwwards, CSS Design Awards, and Webby Awards for design excellence." },
  { icon: Users, title: "Dedicated Teams", desc: "A specialized team assigned to every project — designer, developer, PM, and QA." },
  { icon: Zap, title: "Fast Delivery", desc: "Agile sprints that ship high-quality products on time, every time." },
  { icon: Shield, title: "Reliable Support", desc: "24/7 ongoing maintenance and support long after launch, so you're never alone." },
  { icon: Heart, title: "Client-First", desc: "Your goals are our goals. We measure our success by your growth and satisfaction." },
  { icon: TrendingUp, title: "Data-Driven", desc: "Every decision backed by analytics, user research, and measurable outcomes." },
];
const team = [
  { image: team1, name: "Alex Johnson", role: "CEO & Founder", bio: "10+ years in tech leadership. Previously at Google and Stripe." },
  { image: team2, name: "Maria Garcia", role: "Lead Designer", bio: "Award-winning designer passionate about accessible, human-centered design." },
  { image: team3, name: "Robert Kim", role: "CTO", bio: "Full-stack architect specializing in scalable cloud-native applications." },
  { image: team4, name: "Zara Williams", role: "Creative Director", bio: "Brand storyteller with a background in advertising and visual arts." },
];
const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "15+", label: "Countries Served" },
  { value: "35+", label: "Team Members" },
];
const timeline = [
  { year: "2018", title: "Founded", desc: "QueNrix was born in a small Hyderabad co-working space with a team of three passionate creators." },
  { year: "2019", title: "First Major Client", desc: "Secured our first enterprise client and expanded the team to 10 members." },
  { year: "2020", title: "Remote-First", desc: "Went fully remote, onboarding talent from around the globe and serving clients in 8 countries." },
  { year: "2021", title: "Award Season", desc: "Won our first Awwwards Site of the Day and CSS Design Award for outstanding web design." },
  { year: "2023", title: "35+ Team", desc: "Grew to 35+ professionals across design, engineering, strategy, and project management." },
  { year: "2025", title: "Global Impact", desc: "Now serving 150+ clients in 15 countries with a focus on AI-powered digital solutions." },
];
const About = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Intro */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 font-heading tracking-wide uppercase">
                About Us
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Crafting Digital <span className="text-primary">Excellence</span> Since 2018
              </h1>
              <p className="text-slate-600 leading-relaxed mb-4">
                QueNrix is a full-service digital innovation studio passionate about transforming ideas into impactful digital experiences. We blend creativity with technology to help businesses thrive in the digital age.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Founded in San Francisco, we've grown from a small team of three to a diverse group of 35+ designers, engineers, strategists, and storytellers. Our work spans across startups, scale-ups, and Fortune 500 companies in 15+ countries.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We believe that great design is not just about aesthetics — it's about solving real problems for real people. That philosophy drives everything we do.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white border border-slate-300 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <p className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-xs text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto">
          <SectionHeading label="Our Purpose" title="Mission & Vision" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-300 rounded-xl p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Target size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in an ever-evolving digital landscape.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We achieve this by combining world-class design, robust engineering, and data-driven strategy to deliver products that users love and businesses depend on.
              </p>
            </div>
            <div className="bg-white border border-slate-300 rounded-xl p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Eye size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                To be the leading digital transformation partner that sets the standard for creativity, innovation, and excellence — building a future where technology and design work seamlessly together.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We envision a world where every digital interaction is intuitive, beautiful, and meaningful — and we're committed to making that vision a reality, one project at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading label="Our Journey" title="How We Got Here" description="From a small startup to a global powerhouse — here's our story." />
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 opacity-0 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="shrink-0 w-16 text-right">
                  <span className="font-bold text-primary">{item.year}</span>
                </div>
                <div className="shrink-0 w-px bg-slate-300 relative">
                  <div className="absolute top-1 -left-1 w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <div className="pb-6">
                  <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto">
          <SectionHeading label="Our Team" title="Meet the Minds Behind QueNrix" description="A diverse group of thinkers, makers, and innovators dedicated to your success." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <TeamCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading label="Why Us" title="Why Choose QueNrix?" description="Here's what sets us apart from the rest." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-white border border-slate-300 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl opacity-0 animate-fade-in" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Want to Join Our Team?</h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion for design, technology, and innovation. Check out our open positions.
          </p>
          <Link to="/contact" className="inline-flex px-8 py-3.5 rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition-all" style={{ backgroundColor: '#6366f1', color: '#ffffff' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};
export default About;