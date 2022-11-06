import React from "react";
import { ProjectCard } from "../Components/ProjectCard";
import { projects } from "../Components/projects";

export const Projects = () => {
  return (
    <main className="flex-1 h-screen w-full grid place-items-center text-white overflow-y-auto">
      <article className="w-[90%] md:w-[auto] grid gap-8 mb-[10%] mt-[10%]">
        <h1 className="text-4xl md:text-5xl text-center">Projects</h1>
        <section className="grid gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </section>
      </article>
    </main>
  );
};
