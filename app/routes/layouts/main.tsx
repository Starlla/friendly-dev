import { Outlet } from "react-router";
import Hero from "~/components/Hero";
import type HomeLayout from "./home";

const MainLayout = () => {
  return (
    <>
      <section className="max-w-6xl px-6 my-8 mx-auto">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
