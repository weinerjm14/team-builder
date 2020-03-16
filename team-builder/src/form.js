import React from "react";
import styled from "styled-components";

function Form () {

        //styled elements
        const FormSContainertyle = styled.section`
                width: 35%;
                background-color: linen;
                border: 3px inset tan;
                padding-bottom: 1%;
                margin-left: 2%;
        `
        const LabelStyle =  styled.label`
                color: black;
                font-weight: bold;
                margin-right: 1%;
        `
        const InputStyle = styled.input`
                margin-bottom: 1%;
                
        `
        const SelectStyle = styled.select`
                margin-bottom: 2%;
        `
        const FormStyle = styled.form`
                text-aligh: right;
        `

        //form components
        return (

                <FormSContainertyle id="newMemberForm">
                        <h3>Add New Member</h3>
                        <FormStyle>
                        <LabelStyle for="name">Name:   </LabelStyle>
                        <InputStyle type="text" name="name" id="name" placeholder="Enter Name"></InputStyle>
                        <br />
                        <LabelStyle for="email">Email:   </LabelStyle>
                        <InputStyle type="email" name="email" id="email" placeholder="Enter email."></InputStyle> <br />
                        <LabelStyle for="teamId">Team ID:   </LabelStyle>
                        <InputStyle type="text" name="teamId" id="teamId" placeholder="Enter Team Id"></InputStyle> <br/>
                        <LabelStyle for="role">Team Role:   </LabelStyle>
                        <SelectStyle id="role" name="role">
                                <option></option>
                                <option>React Dev</option>
                                <option>Front End Dev</option>
                                <option>UI/UX Dev</option>
                                <option>iOs Dev</option>
                                <option>Android Dev</option>
                                <option>Senior/Lead Dev</option>

                        </SelectStyle> <br />
                        <input type="submit"></input>


                </FormStyle>
                </FormSContainertyle>
               
        )
}

export default Form;