import { domainKnowledge } from "@/data/domainKnowledge";
import React from "react";

export default function domainKnowledge() {
  return (
    <div className="col-xl-6 col-lg-5">
      <div className="bostami-section-title-wrap mb-20">
        <h4 className="section-title">Domain Knowledge</h4>
      </div>

      <div className="knowledeges-item-wrap">
        {domainKnowledge.map((elm, i) => (
          <span key={i} className="gk-item">
            {elm}
          </span>
        ))}
      </div>
    </div>
  );
}
