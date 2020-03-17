import React, {useState} from "react";
// import styled from "styled-components";

function Form (props) {
        const [formState, setFormState] = useState({
                name: "",
                email: "",
                role: ""
              });
        const changeHandler = event => {
                setFormState({
                  ...formState,
                  [event.target.name]: event.target.value
                });
              };
        const formSubmitHandler = event => {
                event.preventDefault();
            
                props.setTeamList({
                  ...formState,
                  id: Date.now()
                });};
            
              return (

                <div id="newMemberForm">
                        <h3>Add New Member</h3>
                        <form onSubmit={formSubmitHandler}>
                        <label htmlFor="name">Name:   </label>
                        <input type="text" name="name" id="name" placeholder="Enter Name" onChange={changeHandler}></input>
                        <br />
                        <label htmlFor="email">Email:   </label>
                        <input type="email" name="email" id="email" placeholder="Enter email." onChange={changeHandler}></input> <br />
                        <label htmlFor="role">Team Role:   </label>
                        <select id="role" name="role" onChange={changeHandler}>
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