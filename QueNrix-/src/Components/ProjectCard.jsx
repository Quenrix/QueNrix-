const ProjectCard = ({ image, title, description, category, tech, index }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-slate-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-slate-900 text-center mb-2">{title}</h3>
        <p className="text-sm text-slate-600 text-center mb-3">{description}</p>
        {tech && (
          <div className="flex flex-wrap gap-2 justify-center">
            {tech.map((t, i) => (
              <span key={i} className="px-2 py-0.5 rounded bg-slate-100 border border-slate-300 text-xs text-slate-700">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
