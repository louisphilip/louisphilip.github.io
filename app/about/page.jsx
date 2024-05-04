import AboutTwo from "@/components/about/AboutTwo";
import HeaderTwo from "@/components/headers/HeaderTwo";
import PersonalInfoTwo from "@/components/personalInfo/PersonalInfoTwo";
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
            <AboutTwo />
          </div>
        </div>
      </div>
    </>
  );
}
