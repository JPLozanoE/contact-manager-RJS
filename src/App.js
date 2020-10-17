import React from 'react';
import './App.css';
import AddPersonForm from './Components/AddPersonForm';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddPersonForm/>
    </div>
  );
}

export default App;
