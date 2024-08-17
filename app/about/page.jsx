import About from "@/components/about/About";
import React from "react";
export const metadata = {
  title: "About || LP Shahim",
  description:
    "Discover more about me",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <div className="bostami-page-area z-index-3">
          <div className="container">
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
