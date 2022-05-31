import React, { useState } from "react";

const ChildRow = ({ distract, townships }) => {
  const [isExpand, setIsExpand] = useState(false);
  const isChildren = distract?.children?.length > 0;
  const toggleExpand = () => {
    setIsExpand((prevState) => !prevState);
  };

  return (
    <>
      <tr>
        <td>
          {distract?.name}
          {isChildren && (
            <button onClick={toggleExpand}>{isExpand ? "-" : "+"}</button>
          )}
        </td>
        {distract?.columnData.map((col) => (
          <td>{col}</td>
        ))}
      </tr>
      {isExpand &&
        isChildren &&
        distract?.children?.map((townshipId) => {
          const child = townships.filter((item) => item.id === townshipId)?.[0];

          return <ChildRow distract={child} />;
        })}
    </>
  );
};

export default ChildRow;
