const TeamCard = ({ image, name, role, bio }) => {
  return (
    <div className="group text-center transition-all duration-300 hover:-translate-y-2">
      <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-slate-300 group-hover:border-primary transition-colors">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
      </div>
      <h4 className="font-semibold text-slate-900">{name}</h4>
      <p className="text-sm text-primary mb-2">{role}</p>
      {bio && <p className="text-xs text-slate-600 max-w-[200px] mx-auto">{bio}</p>}
    </div>
  );
};
export default TeamCard;
