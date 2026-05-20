import type { Route } from "./+types/index";
import { Welcome } from "../../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio App | Welcome" },
    { name: "description", content: "Welcome to My Portfolio!" },
  ];
}

export default function Home() {
  console.log("Home page rendered");
  return <div>My App</div>;
}
