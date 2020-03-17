// import styled from "styled-components";
import React from 'react';

const TeamList = props => {
      return (
        <div className="team-list">
          {props.teamList.map(teamMember => (
            <div className="team-member" >
              <h2>{teamMember.name}</h2>
              <p>{teamMember.email}</p>
              <p>{teamMember.role}</p>
            </div>
            
          ))}
        </div>
      );
    };

export default TeamList;



// lecture code for reference
// const Notes = props => {
//     return (
//       <div className="note-list">
//         {props.notes.map(note => (
//           <div className="note" key={note.id}>
//             <h2>{note.title}</h2>
//             <p>{note.body}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };
  