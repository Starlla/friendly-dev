import ProjectCard from "./ProjectCard";

type FeaturedProjectsProps = {
  projects: any[];
  count: number;
};

const FeaturedProjects = ({ projects, count = 4 }: FeaturedProjectsProps) => {
  console.log("FeaturedProjects rendered with projects:", projects);
  const featured = projects
    .filter((project) => project.featured)
    .slice(0, count);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
