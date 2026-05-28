import { Link } from "react-router";
import type { Project } from "~/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block rounded-lg overflow-hidden shadow-sm transition-shadow hover:scale-102 duration-300 bg-gray-800 border border-gray-700"
    >
      <div
        key={project.id}
        className="block p-4rounded-lg hover:shadow-lg  overflow-hidden
            transition-shadow hover:shadow-md rounded-lg bg-gray-800 border border-gray-700"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="font-bold text-xl mt-2 text-blue-400">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-2">{project.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span className="text-xs text-gray-500">{project.category}</span>
            <span className="text-xs text-gray-500 ml-2">{project.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
