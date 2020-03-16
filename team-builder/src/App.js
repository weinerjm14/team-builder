import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from "./form";

function App(props) {
  let [team, setTeam] = useState({
    'name' : props.name,
    'email': props.email,
    "role": props.role

  })
  return (
    <div className="App">
     
      <div className='teamList'>
        <h1>Team Members</h1>
      </div>
      <Form></Form>
    </div>
  );
}

export default App;
