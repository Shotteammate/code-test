import React, { useState } from "react";
import "./TableRow.css";

const TableRow = ({ data, level }) => {
  const [isExpand, setIsExpand] = useState(false);
  const { name, columnData, children } = data;
  const isChildren = children?.length > 0;
  const toggleExpand = () => {
    setIsExpand((prevState) => !prevState);
  };

  return (
    <>
      <tr>
        <td>
          <span style={{ marginLeft: `${level * 1}rem` }}>{name}</span>
          {isChildren && (
            <button className="expand-btn" onClick={toggleExpand}>
              {isExpand ? "-" : "+"}
            </button>
          )}
        </td>
        {columnData.map((col) => (
          <td key={col}>{col}</td>
        ))}
      </tr>
      {isExpand &&
        isChildren &&
        children?.map((child) => {
          return <TableRow key={child.id} data={child} level={level + 1} />;
        })}
    </>
  );
};

export default TableRow;
