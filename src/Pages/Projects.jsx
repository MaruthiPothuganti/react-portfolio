import React from "react";
import { ProjectCard } from "../Components/ProjectCard";

export const Projects = () => {
  return (
    <main className="h-screen w-full grid place-items-center text-white">
      <article className="w-[90%] md:w-[auto] grid gap-8 mb-[10%] mt-[10%]">
        <h1 className="text-4xl md:text-5xl text-center">Projects</h1>
        <section className="">
          <ProjectCard />
        </section>
      </article>
    </main>
  );
};
