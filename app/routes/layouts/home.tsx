import { Outlet } from "react-router";
import Hero from "~/components/Hero";

const HomeLayout = () => {
  return (
    <>
      <Hero name="Claire" />
      <section className="max-w-6xl px-6 my-8 mx-auto">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
