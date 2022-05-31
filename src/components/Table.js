import React from "react";
import "./Table.css";
import TableRow from "./TableRow";

const Table = ({ states, distracts, townships }) => {
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
          {states.map((state) => (
            <TableRow
              key={state.stateId}
              state={state}
              distracts={distracts}
              townships={townships}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
