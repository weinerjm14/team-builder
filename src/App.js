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
    }
  ])
  return (
    <div className="App">
      <h2>Team List</h2>
      <TeamList teamlist = {teamList} />
      <Form />
    </div>
  );
}

export default App;
