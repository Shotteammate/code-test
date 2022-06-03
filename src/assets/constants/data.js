const getColumnData = (id) => {
  return [`${id}-col1`, `${id}-col2`, `${id}-col3`];
};

export const tableData = {
  states: [
    {
      id: "stateId1",
      name: "state1",
      children: ["districtId1", "districtId2"],
      columnData: getColumnData("stateId1"),
    },
    {
      id: "stateId2",
      name: "state2",
      children: [],
      columnData: getColumnData("stateId2"),
    },
    {
      id: "stateId3",
      name: "state3",
      children: ["districtId3"],
      columnData: getColumnData("stateId3"),
    },
  ],
  districts: [
    {
      id: "districtId1",
      name: "districtId1",
      children: ["township1", "township2"],
      columnData: getColumnData("districtId1"),
    },
    {
      id: "districtId2",
      name: "districtId2",
      children: ["township3"],
      columnData: getColumnData("districtId2"),
    },
    {
      id: "districtId3",
      name: "districtId3",
      children: ["township4"],
      columnData: getColumnData("districtId3"),
    },
  ],
  townships: [
    {
      id: "township1",
      name: "township1",
      children: [],
      columnData: getColumnData("township1"),
    },
    {
      id: "township2",
      name: "township2",
      children: [],
      columnData: getColumnData("township2"),
    },
    {
      id: "township3",
      name: "township3",
      children: [],
      columnData: getColumnData("township3"),
    },
    {
      id: "township4",
      name: "township4",
      children: [],
      columnData: getColumnData("township4"),
    },
  ],
};

export const tableHeader = [
  { id: 0, name: "Column 0" },
  { id: 1, name: "Column 1" },
  { id: 2, name: "Column 2" },
  { id: 3, name: "Column 3" },
];
