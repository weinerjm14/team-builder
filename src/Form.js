import React from 'react';


function Form() {
    return(
        <div id="newMemberForm">
        <h3>Add New Member</h3>
        <form >
        <label htmlFor="name">Name:   </label>
        <input type="text" name="name" id="name" placeholder="Enter Name" ></input>
        <br />
        <label htmlFor="email">Email:   </label>
        <input type="email" name="email" id="email" placeholder="Enter email." ></input> <br />
        <label htmlFor="role">Team Role:   </label>
        <select id="role" name="role" >
                <option></option>
                <option>React Dev</option>
                <option>Front End Dev</option>
                <option>UI/UX Dev</option>
                <option>iOS Dev</option>
                <option>Android Dev</option>
                <option>Senior Dev</option>
                <option>Lead Dev</option>

        </select> <br />
 <input type="submit"></input>
 </form>
 </div>
 )
 }

 export default Form;
