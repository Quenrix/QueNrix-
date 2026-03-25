import { useState } from "react";
import SectionHeading from "@/Components/SectionHeading.jsx";
import { CheckCircle, Send } from "lucide-react";

const courseOptions = [
  "UI/UX Design Fundamentals",
  "Advanced React Development",
  "Full-Stack Web Development",
  "Brand Strategy & Identity",
  "Motion Design for Web",
  "TypeScript Masterclass",
  "Product Management Essentials",
  "Cloud & DevOps Fundamentals",
  "Data Engineering & Analytics",
];

const GetStarted = () => {
  const WEB3FORMS_KEY = "7b320124-f4ea-4465-af08-af8a976e57a4";

  const [courseForm, setCourseForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    mode: "",
    level: "",
    message: "",
  });
  const [courseSubmitted, setCourseSubmitted] = useState(false);
  const [courseLoading, setCourseLoading] = useState(false);
  const [courseErrors, setCourseErrors] = useState({});

  const [internForm, setInternForm] = useState({
    name: "",
    email: "",
    phone: "",
    field: "",
    duration: "",
    availability: "",
    portfolio: "",
    about: "",
  });
  const [internSubmitted, setInternSubmitted] = useState(false);
  const [internLoading, setInternLoading] = useState(false);
  const [internErrors, setInternErrors] = useState({});

  const inputClass = (err) =>
    `w-full px-4 py-3 rounded-lg bg-white border ${err ? "border-red-500" : "border-slate-300"} text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors`;

  const validateCourse = () => {
    const e = {};
    if (!courseForm.name.trim()) e.name = "Name is required";
    if (!courseForm.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(courseForm.email)) e.email = "Please enter a valid email";
    if (!courseForm.phone.trim()) e.phone = "Phone number is required";
    if (!courseForm.course) e.course = "Please select a course";
    if (!courseForm.mode) e.mode = "Please select a learning mode";
    return e;
  };

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

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    const errors = validateCourse();
    if (Object.keys(errors).length) {
      setCourseErrors(errors);
      return;
    }

    setCourseLoading(true);
    const entry = { ...courseForm, submittedAt: new Date().toLocaleString() };

    try {
      const existing = JSON.parse(localStorage.getItem("courseApplications") || "[]");
      existing.push(entry);
      localStorage.setItem("courseApplications", JSON.stringify(existing));
    } catch (err) {
      console.error("localStorage save failed:", err);
    }

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Course Enrollment: ${courseForm.course} - ${courseForm.name}`,
          from_name: courseForm.name,
          form_type: "Course Enrollment",
          name: courseForm.name,
          email: courseForm.email,
          phone: courseForm.phone,
          course: courseForm.course,
          mode: courseForm.mode,
          level: courseForm.level || "Not specified",
          message: courseForm.message || "None",
          submitted_at: entry.submittedAt,
        }),
      });
    } catch (err) {
      console.error("Web3Forms failed:", err);
    }

    setCourseSubmitted(true);
    setCourseLoading(false);
    setCourseForm({ name: "", email: "", phone: "", course: "", mode: "", level: "", message: "" });
    setCourseErrors({});
    setTimeout(() => setCourseSubmitted(false), 5000);
  };

  const handleInternSubmit = async (e) => {
    e.preventDefault();
    const errors = validateIntern();
    if (Object.keys(errors).length) {
      setInternErrors(errors);
      return;
    }

    setInternLoading(true);
    const entry = { ...internForm, submittedAt: new Date().toLocaleString() };

    try {
      const existing = JSON.parse(localStorage.getItem("internshipApplications") || "[]");
      existing.push(entry);
      localStorage.setItem("internshipApplications", JSON.stringify(existing));
    } catch (err) {
      console.error("localStorage save failed:", err);
    }

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Internship Application: ${internForm.field} - ${internForm.name}`,
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

  return (
    <div className="min-h-screen pt-16 bg-white">
      <section className="px-4 py-24 bg-white sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading
            label="Apply Now"
            title="Start Your Journey With Us"
            description="Apply for a course, classes, or internship - our team will get back to you within 24 hours."
          />
          <div className="grid max-w-5xl grid-cols-1 gap-10 mx-auto mt-10 lg:grid-cols-2">
            <div>
              <form onSubmit={handleCourseSubmit} className="p-8 bg-white border border-slate-300 rounded-xl">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">Course Enrollment</h3>

                {courseSubmitted && (
                  <div className="flex items-center gap-2 p-4 mb-6 text-green-700 border rounded-lg bg-green-500/10 border-green-500/30">
                    <CheckCircle size={20} />
                    Your application has been submitted successfully!
                  </div>
                )}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Full Name <span className="text-red-600">*</span></label>
                    <input className={inputClass(courseErrors.name)} placeholder="Your full name" value={courseForm.name} onChange={(e) => setCourseForm((p) => ({ ...p, name: e.target.value }))} />
                    {courseErrors.name && <span className="block mt-1 text-sm text-red-600">{courseErrors.name}</span>}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Email <span className="text-red-600">*</span></label>
                    <input type="email" className={inputClass(courseErrors.email)} placeholder="you@example.com" value={courseForm.email} onChange={(e) => setCourseForm((p) => ({ ...p, email: e.target.value }))} />
                    {courseErrors.email && <span className="block mt-1 text-sm text-red-600">{courseErrors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Phone <span className="text-red-600">*</span></label>
                    <input className={inputClass(courseErrors.phone)} placeholder="+91 XXXXX XXXXX" value={courseForm.phone} onChange={(e) => setCourseForm((p) => ({ ...p, phone: e.target.value }))} />
                    {courseErrors.phone && <span className="block mt-1 text-sm text-red-600">{courseErrors.phone}</span>}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Select Course <span className="text-red-600">*</span></label>
                    <select className={inputClass(courseErrors.course)} value={courseForm.course} onChange={(e) => setCourseForm((p) => ({ ...p, course: e.target.value }))}>
                      <option value="">-- Select a course --</option>
                      {courseOptions.map((title) => (
                        <option key={title} value={title}>{title}</option>
                      ))}
                    </select>
                    {courseErrors.course && <span className="block mt-1 text-sm text-red-600">{courseErrors.course}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Learning Mode <span className="text-red-600">*</span></label>
                    <select className={inputClass(courseErrors.mode)} value={courseForm.mode} onChange={(e) => setCourseForm((p) => ({ ...p, mode: e.target.value }))}>
                      <option value="">-- Select mode --</option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline (Hyderabad)</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                    {courseErrors.mode && <span className="block mt-1 text-sm text-red-600">{courseErrors.mode}</span>}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Experience Level</label>
                    <select className={inputClass(false)} value={courseForm.level} onChange={(e) => setCourseForm((p) => ({ ...p, level: e.target.value }))}>
                      <option value="">-- Select level --</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block mb-2 text-sm font-medium text-slate-700">Additional Message</label>
                  <textarea rows={4} className={inputClass(false)} placeholder="Any questions or special requirements..." value={courseForm.message} onChange={(e) => setCourseForm((p) => ({ ...p, message: e.target.value }))} />
                </div>

                <button type="submit" disabled={courseLoading} className="w-full flex items-center justify-center gap-2 mt-6 py-3 rounded-lg font-semibold hover:scale-[1.02] hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed" style={{ backgroundColor: "#6366f1", color: "#fff" }}>
                  <Send size={16} /> {courseLoading ? "Submitting..." : "Submit Enrollment"}
                </button>
              </form>
            </div>

            <div>
              <form onSubmit={handleInternSubmit} className="p-8 bg-white border border-slate-300 rounded-xl">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">Internship Application</h3>

                {internSubmitted && (
                  <div className="flex items-center gap-2 p-4 mb-6 text-green-700 border rounded-lg bg-green-500/10 border-green-500/30">
                    <CheckCircle size={20} />
                    Your application has been submitted successfully!
                  </div>
                )}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Full Name <span className="text-red-600">*</span></label>
                    <input className={inputClass(internErrors.name)} placeholder="Your full name" value={internForm.name} onChange={(e) => setInternForm((p) => ({ ...p, name: e.target.value }))} />
                    {internErrors.name && <span className="block mt-1 text-sm text-red-600">{internErrors.name}</span>}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Email <span className="text-red-600">*</span></label>
                    <input type="email" className={inputClass(internErrors.email)} placeholder="you@example.com" value={internForm.email} onChange={(e) => setInternForm((p) => ({ ...p, email: e.target.value }))} />
                    {internErrors.email && <span className="block mt-1 text-sm text-red-600">{internErrors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Phone <span className="text-red-600">*</span></label>
                    <input className={inputClass(internErrors.phone)} placeholder="+91 XXXXX XXXXX" value={internForm.phone} onChange={(e) => setInternForm((p) => ({ ...p, phone: e.target.value }))} />
                    {internErrors.phone && <span className="block mt-1 text-sm text-red-600">{internErrors.phone}</span>}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Field of Interest <span className="text-red-600">*</span></label>
                    <select className={inputClass(internErrors.field)} value={internForm.field} onChange={(e) => setInternForm((p) => ({ ...p, field: e.target.value }))}>
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
                    {internErrors.field && <span className="block mt-1 text-sm text-red-600">{internErrors.field}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Duration <span className="text-red-600">*</span></label>
                    <select className={inputClass(internErrors.duration)} value={internForm.duration} onChange={(e) => setInternForm((p) => ({ ...p, duration: e.target.value }))}>
                      <option value="">-- Select duration --</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 Months">2 Months</option>
                      <option value="3 Months">3 Months</option>
                      <option value="6 Months">6 Months</option>
                    </select>
                    {internErrors.duration && <span className="block mt-1 text-sm text-red-600">{internErrors.duration}</span>}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Availability</label>
                    <select className={inputClass(false)} value={internForm.availability} onChange={(e) => setInternForm((p) => ({ ...p, availability: e.target.value }))}>
                      <option value="">-- Select availability --</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Weekends Only">Weekends Only</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block mb-2 text-sm font-medium text-slate-700">Portfolio / GitHub URL</label>
                  <input className={inputClass(false)} placeholder="https://github.com/yourprofile" value={internForm.portfolio} onChange={(e) => setInternForm((p) => ({ ...p, portfolio: e.target.value }))} />
                </div>

                <div className="mt-6">
                  <label className="block mb-2 text-sm font-medium text-slate-700">About Yourself <span className="text-red-600">*</span></label>
                  <textarea rows={4} className={inputClass(internErrors.about)} placeholder="Tell us about your skills, goals, and why you want to intern at QueNrix..." value={internForm.about} onChange={(e) => setInternForm((p) => ({ ...p, about: e.target.value }))} />
                  {internErrors.about && <span className="block mt-1 text-sm text-red-600">{internErrors.about}</span>}
                </div>

                <button type="submit" disabled={internLoading} className="w-full flex items-center justify-center gap-2 mt-6 py-3 rounded-lg font-semibold hover:scale-[1.02] hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed" style={{ backgroundColor: "#6366f1", color: "#fff" }}>
                  <Send size={16} /> {internLoading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
