import React,{ useState } from 'react';
import Textfield from "../../FormComponents/TextField";

function EmploymentForm() {
  var counter = 0;
  var checkboxState = false;
  const [hobbies, setHobbies] = useState([
    {
      lable: 'Qualification',
      qualificationId : "qualification[0]",
      checkboxState : checkboxState
    },
  ]);
  const addMore = () => {
    counter = counter + 1;
    hobbies.push({
      lable: 'Employeer',
      qualificationId: "employer[" + counter+"]",
      checkboxState : checkboxState
      });
    setHobbies([...hobbies]);
  };
  const checkboxStateChange = () => {
    console.log("Checkbox state changed");
    checkboxState = "disabled"};
  return (<div>
    {hobbies.map(item => (
      <div>
        <label>Type</label>
        <select>
          <option value="">Select</option> 
          <option value="Music">Music</option> 
          <option value="Singing">Singing</option> 
          <option value="Reading">Reading</option> 
          <option value="Writing">Writing</option> 
          <option value="Bloging">Bloging</option> 
          <option value="Poetry">Poetry</option> 
          <option value="Sketching">Sketching</option> 
          <option value="Photography">Photography</option> 
          <option value="Designing">Designing</option> 
          <option value="Painting">Painting</option> 
          <option value="Volunteering">Volunteering</option> 
          <option value="Socializing">Socializing</option> 
          <option value="Gaming">Gaming</option> 
          <option value="Sport">Sport</option> 
          <option value="Cycling">Cycling</option> 
          <option value="Swimming">Swimming</option> 
          <option value="Hiking">Hiking</option> 
          <option value="Camping">Camping</option> 
          <option value="Traveling">Traveling</option> 
          <option value="Cricket">Cricket</option> 
          <option value="Dancing">Dancing</option> 
          <option value="Theater">Theater</option> 
          <option value="Acting">Acting</option> 
          <option value="Youtuber">Youtuber</option> 
          <option value="Coding">Coding</option> 
          <option value="Cooking">Cooking</option> 
          <option value="Craftandart">Craftandart</option> 
          <option value="Gardening">Gardening</option> 
        </select>
        <Textfield labeltxt="Description" type="text"></Textfield>
      </div>
    ))}
    <button type="button" onClick={addMore}>
      Add More
    </button>
  </div>);
}

export default EmploymentForm;
