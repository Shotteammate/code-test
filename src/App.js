import React, { useMemo } from "react";
import "./App.css";
import Table from "./components/Table";
import { tableData } from "./assets/constants/data";
import Navbar from "./components/Navbar";

function App() {
  const states = useMemo(() => tableData?.states, []);
  const distracts = useMemo(() => tableData?.distracts, []);
  const townships = useMemo(() => tableData?.townships, []);

  return (
    <div className="App">
      <Navbar />
      <Table states={states} distracts={distracts} townships={townships} />
    </div>
  );
}

export default App;
