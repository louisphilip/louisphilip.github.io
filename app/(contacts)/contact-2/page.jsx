import ContactTwo from "@/components/homes/contact/ContactTwo";

import HeaderTwo from "@/components/homes/headers/HeaderTwo";

import React from "react";
export const metadata = {
  title: "Contact-2 || Bostami - Professional portfolio NextJS Template",
  description:
    "Discover Botami,the most impressive portfolio template for work showcase, blog",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <ContactTwo />
      </div>
    </>
  );
}
