import type { Project } from "~/types";
import type { Route } from "./+types";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:3001/projects");
  const data = await res.json();
  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;
  console.log(projects);
  return (
    <>
      <h2 className="font-bold text-3xl">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 shadow-sm transition-shadow hover:shadow-md">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
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
              <p className="text-gray-300 text-sm mb-2">
                {project.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span className="text-xs text-gray-500">
                  {project.category}
                </span>
                <span className="text-xs text-gray-500 ml-2">
                  {project.date}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
