import React, { useMemo } from "react";
import "./App.css";
import Table from "./components/Table";
import { tableData } from "./assets/constants/data";
import Navbar from "./components/Navbar";
import { simpleDeepClone } from "./utils/commonUtils";

function App() {
  const rows = useMemo(() => {
    const states = simpleDeepClone(tableData?.states) ?? [];
    const distracts = simpleDeepClone(tableData?.distracts) ?? [];
    const townships = simpleDeepClone(tableData?.townships) ?? [];

    distracts.forEach((distract) => {
      if (distract?.children?.length > 0) {
        distract.children = townships.filter((township) =>
          distract.children.includes(township.id)
        );
      }
    });

    states.forEach((state) => {
      if (state?.children?.length > 0) {
        state.children = distracts.filter((distract) =>
          state.children.includes(distract.id)
        );
      }
    });

    return states;
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Table rows={rows} />
    </div>
  );
}

export default App;
