import React from "react";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div>
      <h1>Layouts</h1>
      <Outlet />
    </div>
  );
};

export default Layouts;
