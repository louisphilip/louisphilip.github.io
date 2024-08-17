import HeaderBg from "@/components/headers/HeaderBg";
import Header from "@/components/headers/Header";
import PersonalInfo from "@/components/personalInfo/PersonalInfo";
import Github from "@/components/github/Github";

import React from "react";
export const metadata = {
  title: "Github || LP Shahim",
  description:
    "Discover what keeps me busy",
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
              <Github />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}