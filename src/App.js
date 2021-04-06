import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      {monsters?.map((monster, index) => {
        return (
          <div key={index}>
            <h2>{monster?.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
