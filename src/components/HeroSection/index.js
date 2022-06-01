/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useState } from "react";
import useTableData from "../../hooks/useTableData";
import Table from "../Table";
import SearchInputGroup from "../SearchInputGroup";
import "./index.css";
import { filterTableData } from "../../utils/tableUtils";

const index = () => {
  const rows = useTableData();
  const [filteredRows, setFilteredRows] = useState(rows);

  const handleOnSubmit = useCallback(
    (searchInput) => {
      const data = filterTableData(rows, searchInput);
      setFilteredRows(data);
    },
    [rows]
  );

  const disableReset = rows.length === filteredRows.length;

  return (
    <div className="hero-container">
      <SearchInputGroup
        handleOnSubmit={handleOnSubmit}
        disableReset={disableReset}
      />
      <Table rows={filteredRows} />
    </div>
  );
};

export default index;
