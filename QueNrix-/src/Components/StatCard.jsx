const StatCard = ({ value, label }) => {
  return (
    <div className="text-center group cursor-default">
      <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-3 group-hover:scale-110 transition-transform">
        {value}
      </p>
      <p className="text-slate-600 text-sm font-medium uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
