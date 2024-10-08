import ZealGridLogo from "../../assets/ZealGrid.svg";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/dashboard/${project.name}`}
      className="flex flex-col items-center justify-center rounded-lg 
      w-full h-[200px] no-underline shadow-lg p-4 transition-transform
      transform hover:scale-105 hover:shadow-xl bg-custom-gradient"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4">
          <img src={ZealGridLogo} alt={project.name} className="w-12 h-12" />
        </div>
        <h4 className="text-white text-lg font-semibold mb-1">
          {project.name}
        </h4>
        <p className="text-white text-sm">{project.company_detail.name}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
