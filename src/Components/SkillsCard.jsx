const SkillsCard = ({ title, icon }) => {
  return (
    <div className="group">
      <div className="skills-card mt-16 flex items-center h-16 w-44 rounded-lg text-center sm:w-64 sm:h-20  ">
        {icon && (
          <>
            <div className="h-10 w-10 ml-4">
              <img
                src={icon}
                alt={title}
                className="object-contain transition-transform duration-300 group-hover:scale-125 h-full w-full"
              />
            </div>
            <h3 className="text-2xl text-white ml-2 poppins-light">{title}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default SkillsCard;
