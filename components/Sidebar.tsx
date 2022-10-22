import React from "react";
import {
  MdHomeFilled,
  MdExplore,
  MdVideoLibrary,
  MdSubscriptions
} from "react-icons/md";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="hidden md:block">
      <nav className="min-h-screen border-r border-zinc-800 shadow-xl">
        <div className="flex flex-col text-1xl">
          <a className="inline-flex text-slate-200 p-3 pl-6 cursor-pointer hover:bg-zinc-700">
            <MdHomeFilled className="text-2xl" />
            <span className="pl-10">Home</span>
          </a>
          <a className="inline-flex text-slate-200 p-3 pl-6 cursor-pointer hover:bg-zinc-700">
            <MdExplore className="text-2xl" />
            <span className="pl-10">Explore</span>
          </a>
          <a className="inline-flex text-slate-200 p-3 pl-6 cursor-pointer hover:bg-zinc-700">
            <MdVideoLibrary className="text-2xl" />
            <span className="pl-10">Short</span>
          </a>
          <a className="inline-flex text-slate-200 p-3 pl-6 cursor-pointer hover:bg-zinc-700">
            <MdSubscriptions className="text-2xl" />
            <span className="pl-10">Subscriptions</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
