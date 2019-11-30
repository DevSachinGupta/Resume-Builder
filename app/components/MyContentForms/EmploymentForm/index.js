import React,{ useState } from 'react';
import Textfield from "../../FormComponents/TextField";

function EmploymentForm() {
  var counter = 0;
  const [employments, setEmployments] = useState([
    {
      lable: 'Qualification',
      qualificationId : "qualification[0]"
    },
  ]);
  const addMore = () => {
    counter = counter + 1;
    employments.push({
      lable: 'Employeer',
      qualificationId: "employer[" + counter+"]"
      });
    setEmployments([...employments]);
  };
  return (<div>
    {employments.map(item => (
      <div>
        <Textfield labeltxt="Job title" type="text"></Textfield>
        <Textfield labeltxt="Employeer" type="text"></Textfield>
        <Textfield labeltxt="State" type="text"></Textfield>
        <Textfield labeltxt="Country" type="text"></Textfield>
        <Textfield labeltxt="Start date" type="date"></Textfield>
        <Textfield labeltxt="End date" type="date"></Textfield>
        <Textfield labeltxt="Till date" type="checkbox"></Textfield>
        {/* <Textfield labeltxt="Percentage" type="text"></Textfield> */}
        <Textfield labeltxt="Description" type="text"></Textfield>
      </div>
    ))}
    <button type="button" onClick={addMore}>
      Add More
    </button>
  </div>);
}

export default EmploymentForm;
