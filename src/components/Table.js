import React from "react";
import "./Table.css";
import TableRow from "./TableRow";
import { TABLE_LEVEL } from "../assets/constants/constants";
import { tableHeader } from "../assets/constants/data";

const Table = ({ rows }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {tableHeader?.map(({ name, id }) => (
              <th key={`column-${id}`} className={`column-${id}`}>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.length > 0 ? (
            rows.map((state) => (
              <TableRow key={state.id} data={state} level={TABLE_LEVEL} />
            ))
          ) : (
            <tr colSpan="4">
              <td className="empty-row" colSpan="4">
                No row found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
