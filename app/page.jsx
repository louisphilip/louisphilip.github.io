import AboutThree from "@/components/about/AboutThree";
import HeaderFour from "@/components/headers/HeaderFour";
import HeaderThree from "@/components/headers/HeaderThree";
import PersonalInfoThree from "@/components/personalInfo/PersonalInfoThree";
import React from "react";

export const metadata = {
  title: "LP Shahim",
  description:
    "Discover more about me...",
};

export default function Home() {
  return (
    <>
      <div className="page-wrapper home-3">
        <HeaderFour />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfoThree />
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <HeaderThree />
              <AboutThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
