const getColumnData = (id) => {
  return [`${id}-col1`, `${id}-col2`, `${id}-col3`];
};

export const tableData = {
  states: [
    {
      id: "stateId1",
      name: "state1",
      children: ["distractId1", "distractId2"],
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
      children: ["distractId3"],
      columnData: getColumnData("stateId3"),
    },
  ],
  distracts: [
    {
      id: "distractId1",
      name: "distractId1",
      children: ["township1", "township2"],
      columnData: getColumnData("distractId1"),
    },
    {
      id: "distractId2",
      name: "distractId2",
      children: ["township3"],
      columnData: getColumnData("distractId2"),
    },
    {
      id: "distractId3",
      name: "distractId3",
      children: ["township4"],
      columnData: getColumnData("distractId3"),
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
