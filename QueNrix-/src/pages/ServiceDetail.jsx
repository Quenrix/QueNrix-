import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { services } from "@/data/services.js";
import SectionHeading from "@/Components/SectionHeading.jsx";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-slate-600 text-lg">Service not found.</p>
        <Link to="/services" className="text-primary underline">Back to Services</Link>
      </div>
    );
  }

  const currentIndex = services.findIndex((s) => s.id === id);
  const prev = services[currentIndex - 1] || null;
  const next = services[currentIndex + 1] || null;

  return (
    <div className="pt-16 bg-white min-h-screen">

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={15} /> Back to All Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <service.icon size={32} className="text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{service.tagline}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{service.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed mb-10 text-base">{service.description}</p>

              <h2 className="text-xl font-bold text-slate-900 mb-5">What's Included</h2>
              <div className="space-y-4 mb-10">
                {service.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <CheckCircle size={17} className="text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-slate-700 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all"
                style={{ backgroundColor: "#6366f1", color: "#ffffff" }}
              >
                Get Started →
              </Link>
            </div>

            {/* Right */}
            <div className="lg:w-72 shrink-0">
              <div className="bg-white border border-slate-300 rounded-xl p-6 mb-6">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">Key Capabilities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg p-3">
                      <feat.icon size={15} className="text-primary shrink-0" />
                      <span className="text-xs font-medium text-slate-700">{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-300 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">Other Services</h3>
                <div className="flex flex-col gap-1">
                  {services
                    .filter((s) => s.id !== id)
                    .map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.id}`}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary py-2 border-b border-slate-100 last:border-0 transition-colors"
                      >
                        <s.icon size={13} className="shrink-0" />
                        {s.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl flex items-center justify-between gap-4">
          {prev ? (
            <Link
              to={`/services/${prev.id}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              <span>{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to={`/services/${next.id}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              <span>{next.title}</span>
              <ArrowRight size={16} />
            </Link>
          ) : <div />}
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
