import BlogsThree from "@/components/blogs/BlogsThree";
import HeaderBg from "@/components/headers/HeaderBg";
import Header from "@/components/headers/Header";
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
        <HeaderBg />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfoThree />
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <Header />
              <BlogsThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
