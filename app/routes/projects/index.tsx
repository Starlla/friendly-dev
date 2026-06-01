import type { Project } from "~/types";
import type { Route } from "./+types";
import ProjectCard from "~/components/ProjectCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:3001/projects");
  const data = await res.json();
  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { projects } = loaderData;

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  return (
    <>
      <h2 className="font-bold text-3xl">Projects</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-1 rounded ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-200"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <AnimatePresence>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 shadow-sm transition-shadow hover:shadow-md"
        >
          {currentProjects.map((project) => (
            <motion.div layout key={project.id}>
              {" "}
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default ProjectsPage;
