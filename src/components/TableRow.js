import React, { useState } from "react";
import ChildRow from "./ChildRow";

const TableRow = ({ state, distracts, townships }) => {
  const [isExpand, setIsExpand] = useState(false);
  const isChildren = state?.children?.length > 0;
  const toggleExpand = () => {
    setIsExpand((prevState) => !prevState);
  };

  return (
    <>
      <tr>
        <td>
          {state?.name}
          {isChildren && (
            <button onClick={toggleExpand}>{isExpand ? "-" : "+"}</button>
          )}
        </td>
        {state?.columnData.map((col) => (
          <td>{col}</td>
        ))}
      </tr>
      {isExpand &&
        isChildren &&
        state?.children?.map((distractId) => {
          const child = distracts.filter((item) => item.id === distractId)?.[0];

          return <ChildRow distract={child} townships={townships} />;
        })}
    </>
  );
};

export default TableRow;
