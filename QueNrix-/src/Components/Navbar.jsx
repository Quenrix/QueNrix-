import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services.js";

const baseLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/training", label: "Training" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
            <img src="/logo.svg" alt="QueNrix Logo" className="w-9 h-9" />
            <span className="text-2xl font-black" style={{ color: '#6366f1' }}>QueNrix</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {/* Home, About */}
            {baseLinks.slice(0, 2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  location.pathname === link.to 
                    ? "bg-primary/10 text-primary border border-primary/30" 
                    : "text-slate-900 hover:text-primary hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(o => !o)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  isServicesActive 
                    ? "bg-primary/10 text-primary border border-primary/30" 
                    : "text-slate-900 hover:text-primary hover:bg-slate-100"
                }`}
              >
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50">
                  <Link
                    to="/services"
                    className="block px-4 py-2.5 text-xs font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-100 hover:bg-slate-50"
                  >
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        location.pathname === `/services/${s.id}`
                          ? "bg-indigo-50 text-primary font-medium"
                          : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                      }`}
                    >
                      <s.icon size={14} className="shrink-0" />
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Portfolio, Training, Contact */}
            {baseLinks.slice(2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  location.pathname === link.to 
                    ? "bg-primary/10 text-primary border border-primary/30" 
                    : "text-slate-900 hover:text-primary hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/get-started"
              className="px-6 py-3 rounded-xl font-black text-white bg-indigo-500 hover:bg-indigo-600 hover:text-white shadow-lg hover:shadow-xl transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-primary p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {baseLinks.slice(0, 2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-all font-bold ${
                  location.pathname === link.to
                    ? "bg-primary text-white shadow-lg"
                    : "text-slate-900 hover:bg-slate-100 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services Group */}
            <div>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-all font-bold ${
                  location.pathname === "/services"
                    ? "bg-primary text-white shadow-lg"
                    : "text-slate-900 hover:bg-slate-100 hover:text-primary"
                }`}
              >
                All Services
              </Link>
              {services.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 py-2.5 px-6 rounded-lg text-sm transition-all ${
                    location.pathname === `/services/${s.id}`
                      ? "text-primary font-semibold"
                      : "text-slate-600 hover:text-primary"
                  }`}
                >
                  <s.icon size={13} />
                  {s.title}
                </Link>
              ))}
            </div>

            {baseLinks.slice(2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-all font-bold ${
                  location.pathname === link.to
                    ? "bg-primary text-white shadow-lg"
                    : "text-slate-900 hover:bg-slate-100 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/get-started"
              onClick={() => setIsOpen(false)}
              className="block mt-4 py-3 px-4 rounded-lg text-center font-black text-white bg-indigo-500 hover:bg-indigo-600 shadow-lg hover:shadow-xl transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
