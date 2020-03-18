import React, { useState } from 'react';
import './App.css';

import Form from './Form'
import TeamList from "./TeasList"

function App() {
  const [teamList, setTeamList] = useState([
    {
      name: 'Jenn',
      email: 'me@me.com',
      role: 'Lead Dev',
      id: 1
    }
  ])

  const addTeamHandler = newTeamMember => {
    console.log("adding note", newTeamMember);
    setTeamList([...teamList, newTeamMember]);
    //Update the state.
  };


  return (
    <div className="App">
      <h2>Team List</h2>
      <TeamList teamlist = {teamList} />
      <Form addTeamMember={addTeamHandler} />
    </div>
  );
}

export default App;
