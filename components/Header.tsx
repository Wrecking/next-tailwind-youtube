import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import {
  MdViewHeadline,
  MdOutlineVideoCall,
  MdNotificationsNone,
  MdOutlineSearch,
  MdKeyboardVoice
} from "react-icons/md";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="sticky top-0 z-50">
      <header className="flex p-2 justify-between items-center bg-[#212121fa] border-b border-zinc-800 shadow-xl">
        <div className="flex left justify-items-center">
          <a href="#">
            <MdViewHeadline className="text-2xl text-slate-200 cursor-pointer ml-4 mr-10" />
          </a>
          <a href="#" className="mt-[2px]">
            <Image
              src={logo}
              width={90}
              height={20}
              alt="logo"
              layout="fixed"
            />
          </a>
        </div>
        <div className="flex middle">
          <input
            type="text"
            placeholder="Search"
            className="hidden md:block bg-[#131212fa] w-[10em] h-10 text-zinc-300 outline outline-[0.1px] outline-zinc-700 indent-2 md:w-[18em] xl:w-[35em]"
          />
          <button className="bg-[#212121fa] text-zinc-300 bg-zinc-800 h-10 px-5 outline outline-[0.1px] outline-zinc-700">
            <MdOutlineSearch className="text-[1.5em]" />
          </button>
          <button className="bg-[#131212fa] text-zinc-300 bg-zinc-800 h-10 px-2 ml-4 outline outline-[0.1px] outline-zinc-700 rounded-full">
            <MdKeyboardVoice className="text-[1.5em]" />
          </button>
        </div>
        <div className="flex right items-center">
          <div className="flex items-center">
            <a href="#" className="text-slate-200 mr-6">
              <MdOutlineVideoCall className="text-[29px] text-slate-200" />
            </a>
            <a href="#" className="text-slate-200 mr-6">
              <MdNotificationsNone className="text-[29px] text-slate-200" />
            </a>
          </div>
          <div className="text-2xl px-2 bg-red-600 text-zinc-300 border-2 border-zinc-700 mr-4 rounded-full select-none">
            <a href="#" className="">
              T
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
