import React from 'react';
import{Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  );
}

export default App;
