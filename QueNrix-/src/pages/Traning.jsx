import { useEffect, useState } from "react";
import SectionHeading from "@/Components/SectionHeading.jsx";
import CourseCard from "@/Components/CourseCard.jsx";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Award, CheckCircle, Send, Briefcase, FileCheck, MessageSquareText } from "lucide-react";
import { trainingToolCategories, slugifyToolName } from "@/data/trainingTools.js";
const courses = [
  {
    title: "UI/UX Design Fundamentals",
    description: "Learn the core principles of user interface and experience design. Master Figma, wireframing, user research, and design thinking to create user-centered digital products.",
    duration: "8 Weeks",
    level: "Beginner",
    topics: ["Design Thinking Process", "Figma Mastery", "User Research Methods", "Wireframing & Prototyping", "Usability Testing"],
  },
  {
    title: "Advanced React Development",
    description: "Deep dive into React patterns, hooks, state management, performance optimization, testing strategies, and building production-ready applications.",
    duration: "10 Weeks",
    level: "Advanced",
    topics: ["Custom Hooks & Patterns", "State Management (Redux/Zustand)", "Performance Optimization", "Testing with Vitest", "Deployment & CI/CD"],
  },
  {
    title: "Full-Stack Web Development",
    description: "From frontend to backend — learn HTML, CSS, JavaScript, React, Node.js, Express, PostgreSQL, and cloud deployment in one comprehensive bootcamp.",
    duration: "16 Weeks",
    level: "Beginner",
    topics: ["HTML, CSS & JavaScript", "React & TypeScript", "Node.js & Express", "PostgreSQL & APIs", "Cloud Deployment (AWS)"],
  },
  {
    title: "Brand Strategy & Identity",
    description: "Master the art of building memorable brands. Learn strategy, competitive analysis, visual identity design, messaging, and brand storytelling techniques.",
    duration: "6 Weeks",
    level: "Intermediate",
    topics: ["Brand Discovery Workshops", "Competitive Analysis", "Logo & Visual Identity", "Brand Guidelines", "Storytelling & Messaging"],
  },
  {
    title: "Motion Design for Web",
    description: "Create stunning animations and micro-interactions using CSS animations, Framer Motion, GSAP, and Lottie for modern, engaging web experiences.",
    duration: "6 Weeks",
    level: "Intermediate",
    topics: ["CSS Animations & Transitions", "Framer Motion Deep Dive", "GSAP for Complex Animations", "Lottie Animations", "Performance Best Practices"],
  },
  {
    title: "TypeScript Masterclass",
    description: "Become proficient in TypeScript — types, generics, utility types, declaration files, and integrating TypeScript into real-world React and Node.js projects.",
    duration: "4 Weeks",
    level: "Intermediate",
    topics: ["Type System Fundamentals", "Generics & Utility Types", "TypeScript with React", "TypeScript with Node.js", "Advanced Patterns"],
  },
  {
    title: "Product Management Essentials",
    description: "Learn how to define, build, and launch successful digital products. Covers roadmapping, user stories, agile methodologies, and stakeholder management.",
    duration: "5 Weeks",
    level: "Beginner",
    topics: ["Product Discovery", "User Stories & Epics", "Agile & Scrum", "Roadmapping", "Launch Strategy"],
  },
  {
    title: "Cloud & DevOps Fundamentals",
    description: "Master cloud infrastructure with AWS, Docker, CI/CD pipelines, monitoring, and infrastructure-as-code for modern application deployment.",
    duration: "8 Weeks",
    level: "Intermediate",
    topics: ["AWS Core Services", "Docker & Containers", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging"],
  },
  {
    title: "Data Engineering & Analytics",
    description: "Build production-grade data pipelines and analytics workflows using modern tools for ETL, warehousing, orchestration, and reporting.",
    duration: "10 Weeks",
    level: "Intermediate",
    topics: ["Data Pipeline Design", "ETL/ELT Workflows", "Warehouse Modeling", "Airflow Orchestration", "Power BI & Tableau Dashboards"],
  },
];
const trainingStats = [
  { icon: GraduationCap, value: "2,500+", label: "Students Trained" },
  { icon: BookOpen, value: "8", label: "Active Courses" },
  { icon: Users, value: "50+", label: "Industry Mentors" },
  { icon: Award, value: "95%", label: "Completion Rate" },
];

const careerPaths = [
  {
    title: "AI Engineer Track",
    focus: "Gen AI, Agentic AI, RAG, evaluation, and production deployment workflows.",
    roles: ["AI Engineer", "LLM Engineer", "RAG Developer"],
  },
  {
    title: "Data Engineer Track",
    focus: "Data pipelines, warehouses, orchestration, and reliable analytics foundations.",
    roles: ["Data Engineer", "Analytics Engineer", "BI Developer"],
  },
  {
    title: "Cloud & DevOps Track",
    focus: "Cloud architecture, CI/CD, IaC, observability, and release automation.",
    roles: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer"],
  },
  {
    title: "Full-Stack Developer Track",
    focus: "Frontend-backend development with modern frameworks and database integration.",
    roles: ["Full-Stack Developer", "Backend Developer", "Frontend Engineer"],
  },
];

const programHighlights = [
  "Weekly live mentorship and doubt-solving sessions",
  "Real-world capstone projects with portfolio-ready output",
  "Interview preparation with mock assessments",
  "Industry-aligned curriculum updated every quarter",
  "Dedicated progress tracking and feedback checkpoints",
  "Certificate + project review support for job applications",
];

const placementSupport = [
  {
    icon: Briefcase,
    title: "Career Guidance",
    desc: "Role mapping sessions to help you choose the right learning track and job direction.",
  },
  {
    icon: FileCheck,
    title: "Resume & Portfolio Review",
    desc: "Hands-on feedback on resume, GitHub, and portfolio projects to improve interview readiness.",
  },
  {
    icon: MessageSquareText,
    title: "Mock Interview Practice",
    desc: "Technical and HR mock interview rounds with actionable improvement suggestions.",
  },
];

const trainingFaqs = [
  {
    q: "Do I need prior experience to join?",
    a: "Not always. We offer beginner, intermediate, and advanced levels so you can start at the right stage.",
  },
  {
    q: "Will I get practical projects?",
    a: "Yes. Every track includes hands-on assignments and portfolio-focused projects based on real scenarios.",
  },
  {
    q: "Are classes available online and offline?",
    a: "Yes. You can choose Online, Offline (Hyderabad), or Hybrid mode based on your convenience.",
  },
  {
    q: "Will I get certificate and placement support?",
    a: "Yes. We provide completion certificates and structured career support including mock interviews and profile reviews.",
  },
];

const techTracks = trainingToolCategories;

const Training = () => {
  const location = useLocation();

  // ⚠️ Replace with your key from https://web3forms.com (enter quenrix46@gmail.com → get key in email)
  const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

  // ── Course Enrollment Form State ──
  const [courseForm, setCourseForm] = useState({
    name: "", email: "", phone: "", course: "", mode: "", level: "", message: ""
  });
  const [courseSubmitted, setCourseSubmitted] = useState(false);
  const [courseLoading, setCourseLoading] = useState(false);
  const [courseErrors, setCourseErrors] = useState({});

  const validateCourse = () => {
    const e = {};
    if (!courseForm.name.trim()) e.name = "Name is required";
    if (!courseForm.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(courseForm.email)) e.email = "Please enter a valid email";
    if (!courseForm.phone.trim()) e.phone = "Phone number is required";
    if (!courseForm.course) e.course = "Please select a course";
    if (!courseForm.mode) e.mode = "Please select a learning mode";
    return e;
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    const errors = validateCourse();
    if (Object.keys(errors).length) { setCourseErrors(errors); return; }
    const entry = { ...courseForm, submittedAt: new Date().toLocaleString() };
    try {
      const existing = JSON.parse(localStorage.getItem("courseApplications") || "[]");
      existing.push(entry);
      localStorage.setItem("courseApplications", JSON.stringify(existing));
      console.log("✅ Course application saved to localStorage:", entry);
      console.log("📦 All course applications:", existing);
    } catch (err) {
      console.error("❌ localStorage save failed:", err);
    }
    // Also send to Gmail
    const subject = encodeURIComponent(`Course Enrollment: ${courseForm.course} — ${courseForm.name}`);
    const body = encodeURIComponent(
      `New Course Enrollment Application\n\n` +
      `Name: ${courseForm.name}\n` +
      `Email: ${courseForm.email}\n` +
      `Phone: ${courseForm.phone}\n` +
      `Course: ${courseForm.course}\n` +
      `Mode: ${courseForm.mode}\n` +
      `Level: ${courseForm.level || "Not specified"}\n` +
      `Message: ${courseForm.message || "None"}\n` +
      `Submitted At: ${entry.submittedAt}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&to=quenrix46@gmail.com&su=${subject}&body=${body}`, "_blank");
    setCourseSubmitted(true);
    setCourseForm({ name: "", email: "", phone: "", course: "", mode: "", level: "", message: "" });
    setCourseErrors({});
    setTimeout(() => setCourseSubmitted(false), 5000);
  };

  // ── Internship Application Form State ──
  const [internForm, setInternForm] = useState({
    name: "", email: "", phone: "", field: "", duration: "", availability: "", portfolio: "", about: ""
  });
  const [internSubmitted, setInternSubmitted] = useState(false);
  const [internLoading, setInternLoading] = useState(false);
  const [internErrors, setInternErrors] = useState({});

  const validateIntern = () => {
    const e = {};
    if (!internForm.name.trim()) e.name = "Name is required";
    if (!internForm.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(internForm.email)) e.email = "Please enter a valid email";
    if (!internForm.phone.trim()) e.phone = "Phone number is required";
    if (!internForm.field) e.field = "Please select a field";
    if (!internForm.duration) e.duration = "Please select a duration";
    if (!internForm.about.trim()) e.about = "Please tell us about yourself";
    return e;
  };

  const handleInternSubmit = async (e) => {
    e.preventDefault();
    const errors = validateIntern();
    if (Object.keys(errors).length) { setInternErrors(errors); return; }
    setInternLoading(true);
    const entry = { ...internForm, submittedAt: new Date().toLocaleString() };
    try {
      const existing = JSON.parse(localStorage.getItem("internshipApplications") || "[]");
      existing.push(entry);
      localStorage.setItem("internshipApplications", JSON.stringify(existing));
    } catch (err) {
      console.error("localStorage save failed:", err);
    }
    // Send email via Web3Forms → delivers to quenrix46@gmail.com
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Internship Application: ${internForm.field} — ${internForm.name}`,
          from_name: internForm.name,
          form_type: "Internship Application",
          name: internForm.name,
          email: internForm.email,
          phone: internForm.phone,
          field: internForm.field,
          duration: internForm.duration,
          availability: internForm.availability || "Not specified",
          portfolio: internForm.portfolio || "None",
          about: internForm.about,
          submitted_at: entry.submittedAt,
        }),
      });
    } catch (err) {
      console.error("Web3Forms failed:", err);
    }
    setInternLoading(false);
    setInternSubmitted(true);
    setInternForm({ name: "", email: "", phone: "", field: "", duration: "", availability: "", portfolio: "", about: "" });
    setInternErrors({});
    setTimeout(() => setInternSubmitted(false), 5000);
  };

  const inputClass = (err) =>
    `w-full px-4 py-3 rounded-lg bg-white border ${err ? "border-red-500" : "border-slate-300"} text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors`;  

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.replace("#", "");
    const timer = setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="pt-16 bg-white">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading
            label="Training"
            title="Level Up Your Skills"
            description="Industry-led courses designed by professionals and taught by experts. Accelerate your career in design, development, and digital strategy."
          />
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {trainingStats.map((stat, i) => (
              <div key={i} className="bg-white border border-slate-300 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <stat.icon size={28} className="text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-xs text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-14">
            <SectionHeading
              label="Tools & Technologies"
              title="Category-Wise Training Information"
              description="Click any category to jump to complete tool-level information and learning coverage."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
              {techTracks.map((track) => (
                <a
                  key={track.id}
                  href={`#${track.id}`}
                  className="bg-white border border-slate-300 rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{track.title}</h4>
                  <p className="text-xs text-slate-600 mb-2">{track.tools.length} tools covered</p>
                  <p className="text-xs text-primary font-medium">View details</p>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8 mb-16">
            {techTracks.map((track) => (
              <section key={track.id} id={track.id} className="bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 scroll-mt-28">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{track.title}</h3>
                  <p className="text-slate-600">{track.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {track.tools.map((tool) => (
                    <Link
                      key={tool.name}
                      to={`/training/tools/${slugifyToolName(tool.name)}`}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-primary/40 hover:bg-white hover:shadow-sm transition-all block"
                    >
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">{tool.name}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{tool.info}</p>
                      <p className="text-xs text-primary font-medium mt-3">Open full details</p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <CourseCard key={i} index={i} {...course} />
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading
              label="Career Paths"
              title="Choose Your Professional Roadmap"
              description="Structured learning paths designed for high-demand roles in AI, data, cloud, DevOps, and full-stack development."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {careerPaths.map((path) => (
                <div key={path.title} className="bg-white border border-slate-300 rounded-xl p-6 hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{path.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{path.focus}</p>
                  <div className="flex flex-wrap gap-2">
                    {path.roles.map((role) => (
                      <span key={role} className="px-3 py-1 text-xs rounded-full border border-primary/30 bg-primary/10 text-primary font-medium">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto">
          <SectionHeading label="How It Works" title="Your Learning Journey" description="A structured, hands-on learning experience from enrollment to certification." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Choose a Course", desc: "Browse our catalog and select the course that matches your goals and experience level." },
              { step: "02", title: "Learn & Practice", desc: "Engage with video lessons, live workshops, and hands-on projects with mentor feedback." },
              { step: "03", title: "Build a Portfolio", desc: "Complete real-world capstone projects that showcase your skills to potential employers." },
              { step: "04", title: "Get Certified", desc: "Earn a QueNrix certificate recognized by our network of 100+ hiring partners." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-300 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <span className="text-2xl font-bold text-primary">{item.step}</span>
                <h4 className="font-semibold text-slate-900 mt-2 mb-2">{item.title}</h4>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-14 bg-white border border-slate-300 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-5 text-center">Program Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <CheckCircle size={18} className="text-primary mt-0.5" />
                  <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-300 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Placement & Career Support</h3>
              <div className="space-y-4">
                {placementSupport.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <item.icon size={20} className="text-primary mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-300 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Training FAQs</h3>
              <div className="space-y-4">
                {trainingFaqs.map((item, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">{item.q}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Apply Forms Section ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            label="Apply Now"
            title="Start Your Journey With Us"
            description="Apply for a course, classes, or internship — our team will get back to you within 24 hours."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto mt-10">

            {/* ── Course / Classes Enrollment Form ── */}
            <div>
              <form onSubmit={handleCourseSubmit} className="bg-white border border-slate-300 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Course Enrollment</h3>

                {courseSubmitted && (
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 mb-6">
                    <CheckCircle size={20} />
                    Your application has been submitted successfully!
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name <span className="text-red-600">*</span></label>
                    <input className={inputClass(courseErrors.name)} placeholder="Your full name" value={courseForm.name} onChange={e => setCourseForm(p => ({...p, name: e.target.value}))} />
                    {courseErrors.name && <span className="text-sm text-red-600 mt-1 block">{courseErrors.name}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email <span className="text-red-600">*</span></label>
                    <input type="email" className={inputClass(courseErrors.email)} placeholder="you@example.com" value={courseForm.email} onChange={e => setCourseForm(p => ({...p, email: e.target.value}))} />
                    {courseErrors.email && <span className="text-sm text-red-600 mt-1 block">{courseErrors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone <span className="text-red-600">*</span></label>
                    <input className={inputClass(courseErrors.phone)} placeholder="+91 XXXXX XXXXX" value={courseForm.phone} onChange={e => setCourseForm(p => ({...p, phone: e.target.value}))} />
                    {courseErrors.phone && <span className="text-sm text-red-600 mt-1 block">{courseErrors.phone}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Select Course <span className="text-red-600">*</span></label>
                    <select className={inputClass(courseErrors.course)} value={courseForm.course} onChange={e => setCourseForm(p => ({...p, course: e.target.value}))}>
                      <option value="">-- Select a course --</option>
                      {courses.map((c, i) => <option key={i} value={c.title}>{c.title}</option>)}
                    </select>
                    {courseErrors.course && <span className="text-sm text-red-600 mt-1 block">{courseErrors.course}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Learning Mode <span className="text-red-600">*</span></label>
                    <select className={inputClass(courseErrors.mode)} value={courseForm.mode} onChange={e => setCourseForm(p => ({...p, mode: e.target.value}))}>
                      <option value="">-- Select mode --</option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline (Hyderabad)</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                    {courseErrors.mode && <span className="text-sm text-red-600 mt-1 block">{courseErrors.mode}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Experience Level</label>
                    <select className={inputClass(false)} value={courseForm.level} onChange={e => setCourseForm(p => ({...p, level: e.target.value}))}>
                      <option value="">-- Select level --</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Additional Message</label>
                  <textarea rows={4} className={inputClass(false)} placeholder="Any questions or special requirements..." value={courseForm.message} onChange={e => setCourseForm(p => ({...p, message: e.target.value}))} />
                </div>

                <button type="submit" disabled={courseLoading} className="w-full flex items-center justify-center gap-2 mt-6 py-3 rounded-lg font-semibold hover:scale-[1.02] hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed" style={{ backgroundColor: '#6366f1', color: '#fff' }}>
                  <Send size={16} /> {courseLoading ? "Submitting..." : "Submit Enrollment"}
                </button>
              </form>
            </div>

            {/* ── Internship Application Form ── */}
            <div>
              <form onSubmit={handleInternSubmit} className="bg-white border border-slate-300 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Internship Application</h3>

                {internSubmitted && (
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 mb-6">
                    <CheckCircle size={20} />
                    Your application has been submitted successfully!
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name <span className="text-red-600">*</span></label>
                    <input className={inputClass(internErrors.name)} placeholder="Your full name" value={internForm.name} onChange={e => setInternForm(p => ({...p, name: e.target.value}))} />
                    {internErrors.name && <span className="text-sm text-red-600 mt-1 block">{internErrors.name}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email <span className="text-red-600">*</span></label>
                    <input type="email" className={inputClass(internErrors.email)} placeholder="you@example.com" value={internForm.email} onChange={e => setInternForm(p => ({...p, email: e.target.value}))} />
                    {internErrors.email && <span className="text-sm text-red-600 mt-1 block">{internErrors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone <span className="text-red-600">*</span></label>
                    <input className={inputClass(internErrors.phone)} placeholder="+91 XXXXX XXXXX" value={internForm.phone} onChange={e => setInternForm(p => ({...p, phone: e.target.value}))} />
                    {internErrors.phone && <span className="text-sm text-red-600 mt-1 block">{internErrors.phone}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Field of Interest <span className="text-red-600">*</span></label>
                    <select className={inputClass(internErrors.field)} value={internForm.field} onChange={e => setInternForm(p => ({...p, field: e.target.value}))}>
                      <option value="">-- Select a field --</option>
                      <option value="Web Development">Web Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="React / Frontend">React / Frontend</option>
                      <option value="Node.js / Backend">Node.js / Backend</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Brand Design">Brand Design</option>
                      <option value="Content Writing">Content Writing</option>
                      <option value="Other">Other</option>
                    </select>
                    {internErrors.field && <span className="text-sm text-red-600 mt-1 block">{internErrors.field}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Duration <span className="text-red-600">*</span></label>
                    <select className={inputClass(internErrors.duration)} value={internForm.duration} onChange={e => setInternForm(p => ({...p, duration: e.target.value}))}>
                      <option value="">-- Select duration --</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 Months">2 Months</option>
                      <option value="3 Months">3 Months</option>
                      <option value="6 Months">6 Months</option>
                    </select>
                    {internErrors.duration && <span className="text-sm text-red-600 mt-1 block">{internErrors.duration}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Availability</label>
                    <select className={inputClass(false)} value={internForm.availability} onChange={e => setInternForm(p => ({...p, availability: e.target.value}))}>
                      <option value="">-- Select availability --</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Weekends Only">Weekends Only</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Portfolio / GitHub URL</label>
                  <input className={inputClass(false)} placeholder="https://github.com/yourprofile" value={internForm.portfolio} onChange={e => setInternForm(p => ({...p, portfolio: e.target.value}))} />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">About Yourself <span className="text-red-600">*</span></label>
                  <textarea rows={4} className={inputClass(internErrors.about)} placeholder="Tell us about your skills, goals, and why you want to intern at QueNrix..." value={internForm.about} onChange={e => setInternForm(p => ({...p, about: e.target.value}))} />
                  {internErrors.about && <span className="text-sm text-red-600 mt-1 block">{internErrors.about}</span>}
                </div>

                <button type="submit" disabled={internLoading} className="w-full flex items-center justify-center gap-2 mt-6 py-3 rounded-lg font-semibold hover:scale-[1.02] hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed" style={{ backgroundColor: '#6366f1', color: '#fff' }}>
                  <Send size={16} /> {internLoading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Not Sure Which Course Is Right for You?</h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8">
            Book a free 15-minute consultation with one of our learning advisors. We'll help you find the perfect course based on your goals and background.
          </p>
          <Link to="/contact" className="inline-flex px-8 py-3.5 rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition-all" style={{ backgroundColor: '#6366f1', color: '#ffffff' }}>
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Training;