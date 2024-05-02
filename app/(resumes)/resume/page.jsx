import HeaderFour from "@/components/homes/headers/HeaderFour";
import HeaderThree from "@/components/homes/headers/HeaderThree";
import PersonalInfoThree from "@/components/homes/personalInfo/PersonalInfoThree";
import ResumeThree from "@/components/homes/resume/ResumeThree";
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
        <HeaderFour />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfoThree />
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <HeaderThree />
              <ResumeThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
