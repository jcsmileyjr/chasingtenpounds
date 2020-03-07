import React from 'react';

import BlueButton from './components/BlueButton';
import './App.css';

function App() {

  const test =()=> {
    alert("Hello World");
  }
  return (
    <div>
      <BlueButton title="Sign Up" action={test} buttonType="dark" />
    </div>
  );
}

export default App;
