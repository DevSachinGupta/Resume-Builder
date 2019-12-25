import React,{ useState } from 'react';
import Textfield from "../../FormComponents/TextField";

function EmploymentForm() {
  var counter = 0;
  var checkboxState = false;
  const [projects, setProjects] = useState([
    {
      lable: 'Qualification',
      qualificationId : "qualification[0]",
      checkboxState : checkboxState
    },
  ]);
  const addMore = () => {
    counter = counter + 1;
    projects.push({
      lable: 'Employeer',
      qualificationId: "employer[" + counter+"]",
      checkboxState : checkboxState
      });
    setProjects([...projects]);
  };
  const checkboxStateChange = () => {
    console.log("Checkbox state changed");
    checkboxState = "disabled"};
  return (<div>
    {projects.map(item => (
      <div>
        <Textfield labeltxt="Title" type="text"></Textfield>
        <Textfield labeltxt="Summary" type="text"></Textfield>
        <Textfield labeltxt="Description" type="text"></Textfield>
        <Textfield labeltxt="Technology Used" type="text"></Textfield>
        <Textfield labeltxt="Reference Link" type="text"></Textfield>
        <Textfield labeltxt="Start date" type="date"></Textfield>
        <Textfield labeltxt="End date" type="date"></Textfield>
        <Textfield labeltxt="Till date" type="checkbox" disabled={item.checkboxState} onClick={checkboxStateChange}></Textfield>
        {/* <Textfield labeltxt="Percentage" type="text"></Textfield> */}
        
      </div>
    ))}
    <button type="button" onClick={addMore}>
      Add More
    </button>
  </div>);
}

export default EmploymentForm;
