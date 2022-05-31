const columnData = ["col1", "col2", "col3"];

export const tableData = {
  states: [
    {
      id: "stateId1",
      name: "state1",
      children: ["distractId1", "distractId2"],
      columnData,
    },
    {
      id: "stateId2",
      name: "state2",
      children: [],
      columnData,
    },
    {
      id: "stateId3",
      name: "state3",
      children: ["distractId3"],
      columnData,
    },
  ],
  distracts: [
    {
      id: "distractId1",
      name: "distractId1",
      children: ["township1", "township2"],
      columnData,
    },
    {
      id: "distractId2",
      name: "distractId2",
      children: ["township3"],
      columnData,
    },
    {
      id: "distractId3",
      name: "distractId3",
      children: ["township4"],
      columnData,
    },
  ],
  townships: [
    {
      id: "township1",
      name: "township1",
      children: [],
      columnData,
    },
    {
      id: "township2",
      name: "township2",
      children: [],
      columnData,
    },
    {
      id: "township3",
      name: "township3",
      children: [],
      columnData,
    },
    {
      id: "township4",
      name: "township4",
      children: [],
      columnData,
    },
  ],
};
