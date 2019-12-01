import React,{ useState } from 'react';
import Textfield from "../../FormComponents/TextField";

function EmploymentForm() {
  var counter = 0;
  var checkboxState = false;
  const [skills, setSkills] = useState([
    {
      lable: 'Qualification',
      qualificationId : "qualification[0]",
      checkboxState : checkboxState
    },
  ]);
  const addMore = () => {
    counter = counter + 1;
    skills.push({
      lable: 'Employeer',
      qualificationId: "employer[" + counter+"]",
      checkboxState : checkboxState
      });
    setSkills([...skills]);
  };
  const checkboxStateChange = () => {
    console.log("Checkbox state changed");
    checkboxState = "disabled"};
  return (<div>
    {skills.map(item => (
      <div>
        <Textfield labeltxt="Skills Section" type="text"></Textfield>
        <Textfield labeltxt="Skill Title" type="text"></Textfield>
        <Textfield labeltxt="Proficiency" type="text"></Textfield>
      
      </div>
    ))}
    <button type="button" onClick={addMore}>
      Add More
    </button>
  </div>);
}

export default EmploymentForm;
