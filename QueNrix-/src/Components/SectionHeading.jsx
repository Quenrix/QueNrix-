const SectionHeading = ({ label, title, description }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 font-heading tracking-wide uppercase">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {description && (
        <p className="text-slate-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
};
export default SectionHeading;
