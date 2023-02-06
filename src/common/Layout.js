import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <>
      <Navigation title="REACTJS" content="Hello" heading="this is heading" />
      <div className="site-content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
