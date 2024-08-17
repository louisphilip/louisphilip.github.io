import ContactThree from "@/components/contact/ContactThree";
import HeaderBg from "@/components/headers/HeaderBg";
import Header from "@/components/headers/Header";
import PersonalInfoThree from "@/components/personalInfo/PersonalInfoThree";

import React from "react";
export const metadata = {
  title: "Contact || LP Shahim",
  description:
    "Get in touch!",
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
              <ContactThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
