import BlogsThree from "@/components/blogs/BlogsThree";
import HeaderFour from "@/components/headers/HeaderFour";
import HeaderThree from "@/components/headers/HeaderThree";
import PersonalInfoThree from "@/components/personalInfo/PersonalInfoThree";
export const metadata = {
  title: "Blog || LP Shahim",
  description:
    "Discover my blogs",
};
import React from "react";

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
              <BlogsThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
