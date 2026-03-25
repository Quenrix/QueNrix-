import { Link } from "react-router-dom";

const CourseCard = ({ title, description, duration, level, topics, index }) => {
  const levelColors = {
    Beginner: "bg-green-500/10 text-green-700 border-green-500/20",
    Intermediate: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
    Advanced: "bg-red-500/10 text-red-700 border-red-500/20",
  };
  
  return (
    <div
      className="bg-white border border-slate-300 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl opacity-0 animate-fade-in flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${levelColors[level] || levelColors.Beginner}`}>
          {level}
        </span>
        <span className="text-xs text-slate-600">{duration}</span>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{description}</p>
      {topics && topics.length > 0 && (
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-900 mb-2">What you'll learn:</p>
          <ul className="space-y-1">
            {topics.map((topic, i) => (
              <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-auto">
        <Link to="/contact" className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all" style={{ backgroundColor: '#6366f1', color: '#ffffff' }}>
          Enroll Now
        </Link>
      </div>
    </div>
  );
};
export default CourseCard;
