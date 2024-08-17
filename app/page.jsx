import About from "@/components/about/About";
import HeaderBg from "@/components/headers/HeaderBg";
import Header from "@/components/headers/Header";
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
        <HeaderBg />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfoThree />
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <Header />
              <About />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
