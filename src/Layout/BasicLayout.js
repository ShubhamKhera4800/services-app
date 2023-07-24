import React from "react";
import ResponsiveAppBar from "../Components/Navbar";
import { Footer } from "../Components/Footer";
export function BasicLayout({ children }) {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="w-100">
        <div className="container-fluid">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
