import type { Project } from "../../types";
import type { Route } from "./+types";

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const res = await fetch(`http://localhost:3001/projects/${params.id}`);
  if (!res.ok) {
    throw new Response("Failed to fetch project details", { status: 404 });
  }
  const project: Project = await res.json();
  return project;
}

export function HydrateFallback() {
  return <div>Loading project details...</div>;
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData;
  return <>Project Details</>;
};

export default ProjectDetailsPage;
