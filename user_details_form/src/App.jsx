import { useRef, useState } from 'react';
import './App.css';

import { Table } from "./Components/Table";
function App() {
  const inputRef = useRef(null);
  return (
    <div className="App">
       <Table />
    </div>
  );
}

export default App;
