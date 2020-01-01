import React, { useState } from 'react';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
function EmploymentForm() {
  let counter = 0;
  let checkboxState = false;
  const [accomplishments, setAccomplishments] = useState([
    {
      lable: 'Qualification',
      qualificationId: 'qualification[0]',
      checkboxState,
    },
  ]);
  const addMore = () => {
    counter += 1;
    accomplishments.push({
      lable: 'Employeer',
      qualificationId: `employer[${counter}]`,
      checkboxState,
    });
    setAccomplishments([...accomplishments]);
  };
  const checkboxStateChange = () => {
    console.log('Checkbox state changed');
    checkboxState = 'disabled';
  };
  return (
    <div>
      {accomplishments.map(item => (
        <div>
          <Input placeholder="Title" type="text" />
          <Input placeholder="Description" type="text" />
          <Input placeholder="Summary" type="text" />
          {/* <Textfield labeltxt="Technology Used" type="text"></Textfield> */}
          <Row>
            <Column width="1/2" className="px-1">
              <Input placeholder="Reference Link" type="text" />
            </Column>
            <Column width="1/2" className="px-1">
              <Input placeholder="Date" type="date" />
            </Column>
          </Row>
          {/* <Textfield labeltxt="End date" type="date"></Textfield> */}
          {/* <Textfield labeltxt="Till date" type="checkbox" disabled={item.checkboxState} onClick={checkboxStateChange}></Textfield> */}
          {/* <Textfield labeltxt="Percentage" type="text"></Textfield> */}
        </div>
      ))}
      <button type="button" onClick={addMore}>
        Add More
      </button>
    </div>
  );
}

export default EmploymentForm;
