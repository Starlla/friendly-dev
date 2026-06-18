import type { Route } from "./+types/index";
import { Welcome } from "../../welcome/welcome";
import Hero from "~/components/Hero";
import FeaturedProjects from "~/components/FeasuturedProjects";
import type { Project } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio App | Welcome" },
    { name: "description", content: "Welcome to My Portfolio!" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();
  return { projects: data };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  console.log("Home page rendered");
  const { projects } = loaderData;
  return (
    <section>
      <FeaturedProjects projects={projects} count={projects.length} />
    </section>
  );
}
