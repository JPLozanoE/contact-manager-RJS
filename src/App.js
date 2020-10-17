import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ContactManager from './Components/ContactManager';


const contacts = ['James Smith', "Thomas Andersnon", "Bruce Wayne"]

function App() {
  return (
    <div className="App">
      <Header/>
      <ContactManager data={contacts}/>
    </div>
  );
}

export default App;
