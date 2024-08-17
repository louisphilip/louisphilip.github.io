import HeaderBg from "@/components/headers/HeaderBg";
import Header from "@/components/headers/Header";
import PersonalInfo from "@/components/personalInfo/PersonalInfo";
import ResumeThree from "@/components/resume/ResumeThree";
import React from "react";
export const metadata = {
  title: "Resume || LP Shahim",
  description:
    "Discover what I can do",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper home-3">
        <HeaderBg />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <Header />
              <ResumeThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
