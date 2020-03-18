import React from 'react';



const TeamList = props => {
    return (
      <div className="note-list">
        {props.teamlist.map(teamMember => (
          <div className="note" >
            <h2>{teamMember.name}</h2>
            <p>{teamMember.email}</p>
            <p>{teamMember.role}</p>
          </div>
        ))}
      </div>
    );
  };

  export default TeamList;