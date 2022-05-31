import React, { useMemo } from "react";
import { tableData } from "../../assets/constants/data";
import { simpleDeepClone } from "../../utils/commonUtils";
import Table from "../Table";
import "./index.css";

const index = () => {
  const rows = () => {
    const states = simpleDeepClone(tableData?.states) ?? [];
    const distracts = simpleDeepClone(tableData?.distracts) ?? [];
    const townships = simpleDeepClone(tableData?.townships) ?? [];

    distracts.forEach((distract) => {
      if (distract?.children?.length > 0) {
        distract.children = townships.filter((township) =>
          distract.children.includes(township.id)
        );
      }
    });

    states.forEach((state) => {
      if (state?.children?.length > 0) {
        state.children = distracts.filter((distract) =>
          state.children.includes(distract.id)
        );
      }
    });

    return states;
  };
  console.log("rows: ", rows);

  return (
    <div className="hero-container">
      <Table rows={rows()} />
    </div>
  );
};

export default index;
