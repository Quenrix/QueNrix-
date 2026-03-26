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
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 pt-16">
        <p className="text-lg text-slate-600">Service not found.</p>
        <Link to="/services" className="underline text-primary">Back to Services</Link>
      </div>
    );
  }

  const currentIndex = services.findIndex((s) => s.id === id);
  const prev = services[currentIndex - 1] || null;
  const next = services[currentIndex + 1] || null;

  return (
    <div className="min-h-screen pt-16 bg-white">

      {/* Hero */}
      <section className="px-4 py-20 border-b sm:px-6 lg:px-8 bg-slate-50 border-slate-200">
        <div className="container max-w-5xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 mb-8 text-sm transition-colors text-slate-500 hover:text-primary"
          >
            <ArrowLeft size={15} /> Back to All Services
          </Link>
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 shrink-0">
              <service.icon size={32} className="text-primary" />
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-primary">{service.tagline}</p>
              <h1 className="text-3xl font-bold md:text-4xl text-slate-900">{service.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col gap-12 lg:flex-row">

            {/* Left */}
            <div className="flex-1">
              <h2 className="mb-4 text-xl font-bold text-slate-900">Overview</h2>
              <p className="mb-10 text-base leading-relaxed text-slate-600">{service.description}</p>

              <h2 className="mb-5 text-xl font-bold text-slate-900">What's Included</h2>
              <div className="mb-10 space-y-4">
                {service.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 border rounded-lg bg-slate-50 border-slate-200">
                    <CheckCircle size={17} className="text-primary mt-0.5 shrink-0" />
                    <p className="text-sm leading-relaxed text-slate-700">{detail}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 py-3 font-semibold transition-all rounded-lg px-7 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "#6366f1", color: "#ffffff" }}
              >
                Get Started →
              </Link>
            </div>

            {/* Right */}
            <div className="lg:w-72 shrink-0">
              <div className="p-6 mb-6 bg-white border border-slate-300 rounded-xl">
                <h3 className="mb-4 text-sm font-semibold tracking-wide uppercase text-slate-900">Key Capabilities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 border rounded-lg bg-slate-50 border-slate-200">
                      <feat.icon size={15} className="text-primary shrink-0" />
                      <span className="text-xs font-medium text-slate-700">{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-white border border-slate-300 rounded-xl">
                <h3 className="mb-4 text-sm font-semibold tracking-wide uppercase text-slate-900">Other Services</h3>
                <div className="flex flex-col gap-1">
                  {services
                    .filter((s) => s.id !== id)
                    .map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.id}`}
                        className="flex items-center gap-2 py-2 text-sm transition-colors border-b text-slate-600 hover:text-primary border-slate-100 last:border-0"
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
      <section className="px-4 py-10 border-t sm:px-6 lg:px-8 border-slate-200">
        <div className="container flex items-center justify-between max-w-5xl gap-4 mx-auto">
          {prev ? (
            <Link
              to={`/services/${prev.id}`}
              className="flex items-center gap-2 text-sm font-medium transition-colors text-slate-600 hover:text-primary"
            >PRACTICAL AI FOR REAL BUSINESS OUTCOMES


              <ArrowLeft size={16} />
              <span>{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to={`/services/${next.id}`}
              className="flex items-center gap-2 text-sm font-medium transition-colors text-slate-600 hover:text-primary"
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
