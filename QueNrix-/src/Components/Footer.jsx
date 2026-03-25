import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, CheckCircle } from "lucide-react";

const Footer = () => {
  const [newsEmail, setNewsEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleNewsletterJoin = () => {
    if (!newsEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsEmail)) return;
    const subject = encodeURIComponent("Newsletter Subscription Request");
    const body = encodeURIComponent(
      `Hello QueNrix Team,\n\nI would like to subscribe to your newsletter.\n\nMy email: ${newsEmail}\n\nThank you!`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&to=quenrix46@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
    setJoined(true);
    setNewsEmail("");
    setTimeout(() => setJoined(false), 4000);
  };
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="QueNrix Logo" className="w-8 h-8" />
              <h3 className="font-heading text-xl font-bold" style={{ color: '#6366f1' }}>QueNrix</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              We craft digital experiences that inspire and transform businesses through innovative design and technology.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Trusted by 20+ companies worldwide since 2018. Let us help you build something extraordinary.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-slate-900">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Portfolio", "Training", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm text-slate-600 hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-slate-900">Contact Info</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <span className="flex items-center gap-2"><Mail size={14} className="text-primary" /> quenrix46@gmail.com</span>
              <span className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 93920 96698</span>
              <span className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Hyderabad, Telangana 500038, IN</span>
            </div>
            <div className="mt-4 text-sm text-slate-600">
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p>Sat – Sun: Closed</p>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-slate-900">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {[
                { Icon: Twitter, link: "https://twitter.com" },
                { Icon: Linkedin, link: "https://www.linkedin.com/company/quenrix/about/" },
                { Icon: Github, link: "https://github.com" },
                { Icon: Instagram, link: "https://instagram.com" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:text-primary hover:bg-slate-200 transition-all hover:scale-110"
                >
                  <item.Icon size={18} />
                </a>
              ))}
            </div>
            <h4 className="font-heading font-semibold mb-2 text-slate-900">Newsletter</h4>
            <p className="text-xs text-slate-600 mb-2">Stay updated with our latest insights.</p>
            {joined ? (
              <div className="flex items-center gap-2 text-xs text-green-600 font-semibold py-2">
                <CheckCircle size={14} />
                Gmail khul raha hai — subscribe karo!
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleNewsletterJoin()}
                  className="flex-1 bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={handleNewsletterJoin}
                  className="px-3 py-2 rounded-lg text-xs font-semibold hover:scale-105 transition-transform"
                  style={{ backgroundColor: '#6366f1', color: '#ffffff' }}
                >
                  Join
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} QueNrix. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;