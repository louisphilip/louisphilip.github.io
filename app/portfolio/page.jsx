import HeaderBg from "@/components/headers/HeaderBg";
import Header from "@/components/headers/Header";
import PersonalInfoThree from "@/components/personalInfo/PersonalInfoThree";
import PortfolioThree from "@/components/portfolio/PortfolioThree";

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
            <PersonalInfoThree />
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <Header />
              <PortfolioThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
