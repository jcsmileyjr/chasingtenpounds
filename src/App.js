import React from 'react';

import DarkButton from './components/DarkButton';
import './App.css';

function App() {

  const test =()=> {
    alert("Hello World");
  }
  return (
    <div>
      <DarkButton title="Sign Up" action={test} />
    </div>
  );
}

export default App;
