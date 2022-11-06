import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-2xl p-2 md:flex rounded-lg border-2 border-stone-900 hover:border-stone-800">
      <img
        className="w-full md:w-[15rem] h-40 rounded-lg"
        src="https://res.cloudinary.com/doo5jbomi/image/upload/v1661442940/Video%20Library/web_dev_destjb.jpg"
        alt="project"
      />
      <div className="grid p-4 gap-1 md:gap-2">
        <h2 className="text-xl md:text-2xl">Project Name</h2>
        <p className="text-sm text-slate-400">type</p>
        <p className="hidden md:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem
          totam dignissimos
        </p>
      </div>
    </div>
  );
};
