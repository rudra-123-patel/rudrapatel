const SkillsCard = ({ title, icon }) => {
  return (
    <div className="skills-card mr-4 mt-16 flex items-center border border-gray-300 h-16 w-44 rounded-lg text-center ">
      {icon && (
        <div className="h-10 w-10 ml-4 ">
          <img
            src={icon}
            alt={title}
            className="object-contain h-full w-full"
          />
        </div>
      )}
      <h3 className="text-lg ml-2 font-medium">{title}</h3>
    </div>
  );
};

export default SkillsCard;
