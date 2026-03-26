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
const coreValues = [
  {
    title: "Passion over Pedigree",
    desc: "We prioritize zeal, curiosity, and passion for technology over traditional qualifications.",
  },
  {
    title: "Impact over Profit",
    desc: "We're driven by the desire to make a difference, not just generate revenue.",
  },
  {
    title: "Innovation through Freedom",
    desc: "Teams work on what they love, with the freedom to explore and experiment.",
  },
  {
    title: "Collaborative Energy",
    desc: "High pressure, high reward - we thrive in a culture of mutual respect and trust.",
  },
  {
    title: "AI for All",
    desc: "Democratizing access to AI technologies, ensuring ethics and responsibility guide our journey.",
  },
];
const About = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Intro */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-3xl font-bold leading-tight md:text-5xl text-slate-900">
                Crafting Digital <span className="text-primary">Excellence</span> Since 2018
              </h1>
              <p className="mb-4 leading-relaxed text-slate-600">
                QueNrix is a full-service digital innovation studio passionate about transforming ideas into impactful digital experiences. We blend creativity with technology to help businesses thrive in the digital age.
              </p>
              <p className="mb-4 leading-relaxed text-slate-600">
                Founded in San Francisco, we've grown from a small team of three to a diverse group of 35+ designers, engineers, strategists, and storytellers. Our work spans across startups, scale-ups, and Fortune 500 companies in 15+ countries.
              </p>
              <p className="leading-relaxed text-slate-600">
                We believe that great design is not just about aesthetics — it's about solving real problems for real people. That philosophy drives everything we do.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 text-center transition-all duration-300 bg-white border border-slate-300 rounded-xl hover:-translate-y-2 hover:shadow-xl">
                  <p className="mb-1 text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="px-4 pt-24 pb-14 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto">
          <SectionHeading title="Mission & Vision" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-10 transition-all duration-300 bg-white border border-slate-300 rounded-xl hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-primary/10">
                <Target size={24} className="text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Our Mission</h3>
              <p className="mb-4 leading-relaxed text-slate-600">
                At QueNrix, we're on a mission to create a vibrant ecosystem where Gen Z talent thrives, driven by passion, curiosity, and a zeal to learn. We build AI-first products that fuse ideas, knowledge, and emotions to solve real-world problems. Our high-energy environment fosters innovation, creativity, and ownership, where teams work on what they love, not just what they're told.
              </p>
              <p className="leading-relaxed text-slate-600">
                We're committed to accelerating India's position in the global AI landscape, making agentic AI, Gen AI, and intelligent automation accessible, secure, and ethically responsible. By spreading AI literacy and tools, we aim to break barriers and empower every innovator to turn their ideas into reality.
              </p>
            </div>
            <div className="p-10 transition-all duration-300 bg-white border border-slate-300 rounded-xl hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-primary/10">
                <Eye size={24} className="text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Our Vision</h3>
              <p className="mb-4 leading-relaxed text-slate-600">
                To revolutionize India's IT landscape by democratizing access to cutting-edge AI technologies, empowering every individual, startup, and enterprise to harness the power of artificial intelligence and drive meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Core Values */}
      <section className="px-4 pt-12 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading title="Core Values" description="The principles that shape every decision we make." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <div key={i} className="p-8 transition-all duration-300 bg-white border border-slate-300 rounded-xl hover:-translate-y-2 hover:shadow-xl">
                <h4 className="mb-3 text-lg font-semibold text-slate-900">{value.title}</h4>
                <p className="text-sm leading-relaxed text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading title="How We Got Here" description="From a small startup to a global powerhouse — here's our story." />
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 opacity-0 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 text-right shrink-0">
                  <span className="font-bold text-primary">{item.year}</span>
                </div>
                <div className="relative w-px shrink-0 bg-slate-300">
                  <div className="absolute top-1 -left-1 w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <div className="pb-6">
                  <h4 className="mb-1 font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto">
          <SectionHeading title="Meet the Minds Behind QueNrix" description="A diverse group of thinkers, makers, and innovators dedicated to your success." />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {team.map((member, i) => (
              <TeamCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading title="Why Choose QueNrix?" description="Here's what sets us apart from the rest." />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="p-8 transition-all duration-300 bg-white border opacity-0 border-slate-300 rounded-xl hover:-translate-y-2 hover:shadow-xl animate-fade-in" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h4 className="mb-2 font-semibold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">Want to Join Our Team?</h2>
          <p className="max-w-xl mx-auto mb-8 text-slate-600">
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