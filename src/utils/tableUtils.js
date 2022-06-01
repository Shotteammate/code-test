import { isEmpty } from "../utils/commonUtils";

const getFilterValues = (state) => {
  if (isEmpty(state)) return [];

  const result = [];

  function helper(node) {
    const { name, columnData, children } = node;
    result.push(name, ...columnData);
    if (children.length > 0) {
      children.forEach((child) => {
        helper(child);
      });
    }
  }
  helper(state);
  return result.map((item) => item.toLowerCase());
};

const filterTableData = (rows, searchInput) => {
  return rows.filter((state) => {
    const stateFilterParams = getFilterValues(state);
    const isMatch = stateFilterParams
      .join(" ")
      .includes(searchInput.toLowerCase());

    return isMatch;
  });
};

export { filterTableData };
