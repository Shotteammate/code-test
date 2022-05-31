import React from "react";
import "./Table.css";
import TableRow from "./TableRow";
import { TABLE_LEVEL } from "../assets/constants/constants";

const Table = ({ rows }) => {
  return (
    <div className="table-container">
      <table>
        <tr>
          <th className="column-0">Column0</th>
          <th className="column-1">Column1</th>
          <th className="column-2">Column2</th>
          <th className="column-3">Column3</th>
        </tr>
        <tbody>
          {rows?.map((state) => (
            <TableRow key={state.id} data={state} level={TABLE_LEVEL} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
