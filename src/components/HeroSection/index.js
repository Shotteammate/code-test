/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import useTableData from "../../hooks/useTableData";
import Table from "../Table";
import "./index.css";

const index = () => {
  const rows = useTableData();

  return (
    <div className="hero-container">
      <Table rows={rows} />
    </div>
  );
};

export default index;
