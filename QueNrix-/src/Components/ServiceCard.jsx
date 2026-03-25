import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {Icon && <Icon className="text-primary" size={32} />}
      </div>
      <h3 className="relative text-2xl font-bold text-slate-900 mb-4">
        {title}
      </h3>
      <p className="relative text-slate-600 leading-relaxed mb-6">
        {description}
      </p>
      {link && (
        <Link to={link} className="relative inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold group/link transition-colors">
          Learn More <ArrowRight className="group-hover/link:translate-x-1 transition-transform" size={16} />
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
