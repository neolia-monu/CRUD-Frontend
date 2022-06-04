import './App.css';
import { React, useEffect, useState } from "react";

function App() {

  const [records, setRecords] = useState([]);

useEffect(
  () => {
    const fetchRecords = async() => {
      const res = await fetch("http://localhost:4000/api");
      const data = await res.json();

      setRecords(data);
    };

    fetchRecords();
  }, 
  []
)

  return (
    <div className="App">
      <h1>Create Read Update Delete (CRUD) </h1>


          <h1>Get Records</h1>
            {
            records.map(record => 
              <div>
                <h2>{record.name}</h2>
                <h2>{record.city}</h2>
                <h2>{record.createdAt}</h2> <hr/>
              </div>
              )
            }

    </div>
  );
}

export default App;
