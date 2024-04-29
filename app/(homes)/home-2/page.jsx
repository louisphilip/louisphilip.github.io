import HeaderFive from "@/components/homes/headers/HeaderFive";
import PersonalInfoTwo from "@/components/homes/personalInfo/PersonalInfoTwo";
import React from "react";

export const metadata = {
  title: "Home-2 || Bostami - Professional portfolio NextJS Template",
  description:
    "Discover Botami,the most impressive portfolio template for work showcase, blog",
};
export default function Home2() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderFive />
        <div className="bostami-page-area z-index-3">
          <div className="container">
            <PersonalInfoTwo />
          </div>
        </div>
      </div>
    </>
  );
}
