import React from 'react';



const TeamList = props => {
    return (
      <div className="team-member-list">
        {props.teamlist.map(teamMember => (
          <div className="team-member" key={teamMember.id}>
            <h2>{teamMember.name}</h2>
            <p>{teamMember.email}</p>
            <p>{teamMember.role}</p>
          </div>
        ))}
      </div>
    );
  };

  export default TeamList;