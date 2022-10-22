import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="grid grid-cols-[250px_auto] gap-4">
      <Sidebar />
      <div className="py-6">
        <div className="px-24 md:px-12 lg:px-0">
          <div className="cards flex flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
