import { useState } from "react";
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react";
import SectionHeading from "@/Components/SectionHeading.jsx";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What services does QueNrix offer?",
        a: "We specialize in web development, UI/UX design, branding, digital marketing, and custom software solutions. Our team of experts works closely with clients to deliver tailored solutions that meet their unique business needs."
      },
      {
        q: "How long does a typical project take?",
        a: "Project timelines vary based on scope and complexity. A branding project typically takes 4-6 weeks, a website 6-10 weeks, and a full web application 10-16 weeks. We'll provide a detailed timeline during our discovery phase."
      },
      {
        q: "Do you work with startups?",
        a: "Absolutely! We love working with startups and offer flexible packages tailored to early-stage companies. We can scale our engagement as you grow and provide strategic guidance throughout your journey."
      },
      {
        q: "What is your pricing model?",
        a: "We offer both project-based pricing and retainer models. Every engagement starts with a free consultation where we scope the work and provide a transparent quote with no hidden fees or surprises."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What technologies do you specialize in?",
        a: "Our core stack includes React, TypeScript, Next.js, Node.js, Python, PostgreSQL, and AWS. We also have expertise in Figma, design systems, modern DevOps practices, and cloud infrastructure."
      },
      {
        q: "Do you provide ongoing support and maintenance?",
        a: "Yes! We offer comprehensive support packages including bug fixes, security updates, performance monitoring, feature enhancements, and 24/7 technical support. We're committed to your long-term success."
      },
      {
        q: "Can you help with mobile app development?",
        a: "Yes, we build cross-platform mobile applications using React Native and Flutter, as well as native iOS and Android apps. We can help you reach your audience across all devices."
      },
      {
        q: "How do you ensure code quality?",
        a: "We follow industry best practices including code reviews, automated testing, continuous integration, security audits, and comprehensive documentation. Quality is at the heart of everything we build."
      }
    ]
  },
  {
    category: "Process",
    questions: [
      {
        q: "What is your development process?",
        a: "We follow an agile methodology with regular sprints, daily standups, and bi-weekly demos. You'll have full visibility into progress and can provide feedback at every stage. We believe in collaborative development."
      },
      {
        q: "How do you handle project communication?",
        a: "We use Slack for daily communication, hold weekly video calls for status updates, and provide access to project management tools like Jira or Asana. You'll always know what's happening with your project."
      },
      {
        q: "Can I make changes during development?",
        a: "Yes, we embrace flexibility. While major scope changes may affect timeline and budget, we accommodate reasonable adjustments and encourage iterative refinement to ensure the final product meets your vision."
      },
      {
        q: "What happens after project delivery?",
        a: "We provide comprehensive training, documentation, and a warranty period. We're available for ongoing support, future enhancements, and scaling as your business grows. We're partners in your success."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, credit cards, PayPal, and cryptocurrency. We typically structure payments in milestones: 30% upfront, 40% at midpoint, and 30% on completion."
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes, we can customize payment schedules based on your cash flow needs. We're flexible and work with clients to find arrangements that make sense for their business."
      },
      {
        q: "What's included in your pricing?",
        a: "Our quotes include all development work, design, testing, deployment, training, and documentation. We're transparent about costs and don't believe in surprise fees or hidden charges."
      },
      {
        q: "Do you offer refunds?",
        a: "We stand behind our work. If you're not satisfied with deliverables at agreed milestones, we'll work to resolve issues. Our contracts include clear terms regarding revisions and satisfaction guarantees."
      }
    ]
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...faqs.map(cat => cat.category)];

  const filteredFAQs = faqs.filter(cat => 
    activeCategory === "All" || cat.category === activeCategory
  ).map(cat => ({
    ...cat,
    questions: cat.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle size={48} className="text-primary" />
          </div>
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services, process, and pricing. Can't find what you're looking for? Contact us anytime."
          />
          
          {/* Search */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-slate-900 shadow-lg shadow-primary/30"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-600 text-lg">
                No questions found. Try a different search term or category.
              </p>
            </div>
          ) : (
            filteredFAQs.map((cat, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                  {cat.category}
                </h2>
                <div className="space-y-4">
                  {cat.questions.map((faq, index) => {
                    const globalIndex = `${catIndex}-${index}`;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div
                        key={index}
                        className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                        >
                          <span className="font-semibold text-slate-900 pr-4">
                            {faq.q}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="text-primary flex-shrink-0" size={20} />
                          ) : (
                            <ChevronDown className="text-slate-500 flex-shrink-0" size={20} />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-slate-600 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:scale-105 transition-transform shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
