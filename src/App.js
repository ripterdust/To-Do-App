import React from 'react';

// My css code
import './app.css';

// My components imports
import List from './components/List';

function App() {
  return <>
    <div className="bg"></div>
    <div className="todo">
      <h1>Todo</h1>
      <List/>
    </div>
  </>
}

export default App;
