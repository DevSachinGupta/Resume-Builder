import React,{ useState } from 'react';
import Textfield from "../../FormComponents/TextField";

function EmploymentForm() {
  var counter = 0;
  var checkboxState = false;
  const [social, setSocial] = useState([
    {
      lable: 'Qualification',
      qualificationId : "qualification[0]",
      checkboxState : checkboxState
    },
  ]);
  const addMore = () => {
    counter = counter + 1;
    social.push({
      lable: 'Employeer',
      qualificationId: "employer[" + counter+"]",
      checkboxState : checkboxState
      });
    setSocial([...social]);
  };
  const checkboxStateChange = () => {
    console.log("Checkbox state changed");
    checkboxState = "disabled"};
  return (<div>
    {social.map(item => (
      <div>
        <label>Type</label>
        <select>
          <option>Select</option>
          <option>Facebook</option>
          <option>Github</option>
          <option>Google</option>
          <option>LinkedIn</option>
          <option>Twitter</option>
          <option>Custom</option>
        </select>
        <Textfield labeltxt="URL" type="text"></Textfield>
        <Textfield labeltxt="Username" type="text"></Textfield>
      </div>
    ))}
    <button type="button" onClick={addMore}>
      Add More
    </button>
  </div>);
}

export default EmploymentForm;
