import React from "react";
import {
  BiHome,
  BsLightningCharge,
  BsPen,
  RiGhostSmileLine,
  BiMessage,
} from "./Icons";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const menu = [
    {
      name: "Home",
      icon: BiHome,
      path: "/home",
    },
    {
      name: "Projects",
      icon: BsLightningCharge,
      path: "/projects",
    },
    {
      name: "Blogs",
      icon: BsPen,
      path: "/blogs",
    },
    {
      name: "About",
      icon: RiGhostSmileLine,
      path: "/about",
    },
    {
      name: "Contact",
      icon: BiMessage,
      path: "/contact",
    },
  ];

  return (
    <nav className="flex flex-col absolute top-[40%] left-8 bg-[#1e1e1e] border-[#28282852] p-1 rounded-md">
      {menu.map((menuItem) => (
        <NavLink
          to={menuItem.path}
          key={menuItem.name}
          className={({ isActive }) =>
            isActive ? "text-sky-300" : "text-slate-400"
          }
        >
          <div className="m-2 bg-[#0d0d0d] p-2 rounded-md">
            <menuItem.icon size={28} title={menuItem.name} />
          </div>
        </NavLink>
      ))}
    </nav>
  );
};
