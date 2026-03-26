import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, Send, Clock, Globe, CheckCircle, ChevronDown } from "lucide-react";
import SectionHeading from "@/Components/SectionHeading.jsx";
import { toast } from "sonner";

const faqs = [
  { q: "How long does a typical project take?", a: "Timelines vary based on scope. A branding project typically takes 4–6 weeks, a website 6–10 weeks, and a full web application 10–16 weeks. We'll provide a detailed timeline during our discovery phase." },
  { q: "What is your pricing model?", a: "We offer project-based pricing and retainer models. Every engagement starts with a free consultation where we scope the work and provide a transparent quote — no surprises." },
  { q: "Do you work with startups?", a: "Absolutely! We love working with startups. We offer flexible packages tailored to early-stage companies and can scale our engagement as you grow." },
  { q: "What technologies do you specialize in?", a: "Our core stack includes React, TypeScript, Next.js, Node.js, Python, PostgreSQL, and AWS. We also have deep expertise in Figma, design systems, and brand strategy." },
];

// ⚠️ Replace with your key from https://web3forms.com (enter quenrix46@gmail.com → get key in email)
const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Load saved form data from localStorage on mount
  useEffect(() => {
    const savedForm = localStorage.getItem("contactFormDraft");
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, []);

  // Save form data to localStorage on change
  useEffect(() => {
    if (form.name || form.email || form.message) {
      localStorage.setItem("contactFormDraft", JSON.stringify(form));
    }
  }, [form]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);

    // Save to localStorage
    const submission = { ...form, submittedAt: new Date().toISOString(), id: Date.now() };
    const existingSubmissions = JSON.parse(localStorage.getItem("contactFormSubmissions") || "[]");
    existingSubmissions.push(submission);
    localStorage.setItem("contactFormSubmissions", JSON.stringify(existingSubmissions));
    localStorage.removeItem("contactFormDraft");

    // Send email via Web3Forms → delivers to quenrix46@gmail.com
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Contact Inquiry from ${form.name} — QueNrix`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          company: form.company || "Not provided",
          budget: form.budget || "Not specified",
          message: form.message,
        }),
      });
      const result = await res.json();
      if (!result.success) console.error("Web3Forms error:", result);
    } catch (err) {
      console.error("Web3Forms failed:", err);
    }

    setLoading(false);
    setSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", company: "", budget: "", message: "" });
    setErrors({});
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-16 bg-white">
      {/* Intro */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="Let's Work Together"
            description="Have a project in mind? Reach out and let's start a conversation. We respond to every inquiry within 24 hours."
          />
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="p-8 bg-white border border-slate-300 rounded-xl">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">Send Us a Message</h3>
                
                {submitted && (
                  <div className="flex items-center gap-2 p-4 mb-6 text-green-700 border rounded-lg bg-green-500/10 border-green-500/30">
                    <CheckCircle size={20} />
                    Your message has been sent successfully!
                  </div>
                )}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.name ? 'border-red-500' : 'border-slate-300'} text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors`}
                      placeholder="Your full name"
                    />
                    {errors.name && <span className="block mt-1 text-sm text-red-600">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.email ? 'border-red-500' : 'border-slate-300'} text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <span className="block mt-1 text-sm text-red-600">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 transition-colors bg-white border rounded-lg border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full px-4 py-3 transition-colors bg-white border rounded-lg border-slate-300 text-slate-900 focus:outline-none focus:border-primary"
                    >
                      <option value="">Select a range</option>
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="10k-25k">$10,000 – $25,000</option>
                      <option value="25k-50k">$25,000 – $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.message ? 'border-red-500' : 'border-slate-300'} text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors min-h-37.5`}
                    placeholder="Tell us about your project — goals, timeline, and anything else we should know..."
                  />
                  {errors.message && <span className="block mt-1 text-sm text-red-400">{errors.message}</span>}
                </div>

                <button type="submit" disabled={loading} className="flex items-center justify-center w-full gap-2 px-8 py-4 font-semibold transition-transform rounded-lg shadow-lg hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed" style={{ backgroundColor: '#6366f1', color: '#ffffff' }}>
                  <Send size={20} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
                
                <p className="mt-4 text-sm text-center text-slate-600">
                  We'll respond within 24 hours. No spam, ever.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 bg-white border border-slate-300 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                  <Mail className="text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Email Us</h3>
                <a href="mailto:quenrix46@gmail.com" className="transition-colors text-primary hover:text-secondary">quenrix46@gmail.com</a>
              </div>

              <div className="p-6 bg-white border border-slate-300 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                  <Phone className="text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Call Us</h3>
                <a href="tel:+919392096698" className="transition-colors text-primary hover:text-secondary">+91 93920 96698</a>
              </div>

              <div className="p-6 bg-white border border-slate-300 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                  <MapPin className="text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Visit Us</h3>
                <p className="text-slate-600">Hyderabad, Telangana<br />500038, IN</p>
              </div>

              <div className="p-6 bg-white border border-slate-300 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                  <Clock className="text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Business Hours</h3>
                <p className="text-slate-600">Mon – Fri: 9:00 AM – 6:00 PM (PST)</p>
              </div>

              <div className="p-6 bg-white border border-slate-300 rounded-xl">
                <h3 className="mb-4 text-lg font-semibold text-slate-900">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="https://twitter.com/quenrix" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 border rounded-lg cursor-pointer bg-slate-100 border-slate-300 text-slate-600" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="https://www.linkedin.com/company/quenrix/about/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 border rounded-lg cursor-pointer bg-slate-100 border-slate-300 text-slate-600" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://github.com/quenrix" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 border rounded-lg cursor-pointer bg-slate-100 border-slate-300 text-slate-600" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href="https://instagram.com/quenrix" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 border rounded-lg cursor-pointer bg-slate-100 border-slate-300 text-slate-600" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Frequently Asked Questions" 
            description="Quick answers to common questions about working with us." 
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden bg-white border border-slate-300 rounded-xl">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full p-6 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <ChevronDown className={`text-primary shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 pb-6 text-slate-600 ${openFaq === i ? 'block' : 'hidden'}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;