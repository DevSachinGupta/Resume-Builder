import React from 'react';
import Input from '../../FormComponents/Input';
import './style.scss';

function PersonalDetails() {
  const [val, setVal] = React.useState('');
  const handleChange = e => {
    setVal(e.target.value);
  };
  return (
    <div>
      <Input placeholder="First Name" val={val} onChange={handleChange} />
      <Input placeholder="Last Name" val={val} onChange={handleChange} />
      <Input placeholder="Email" val={val} onChange={handleChange} />
      <Input placeholder="Phone number" val={val} onChange={handleChange} />
      
      <input type="date" placeholder="Date of Birth"/>
      <label>Gender</label>
      <input type="radio" name="gender" value="Male"/> Male <input name="gender" type="radio" value="Female"/> Female <input name="gender" type="radio" value="Other"/> Others

      <Input placeholder="Address" val={val} onChange={handleChange} />
      <Input placeholder="City" val={val} onChange={handleChange} />
      <Input placeholder="State" val={val} onChange={handleChange} />
      <Input placeholder="Country" val={val} onChange={handleChange} />
      <Input placeholder="Zip Code" val={val} onChange={handleChange} />
      <Input placeholder="Summary" val={val} onChange={handleChange} />
    </div>
  );
}
export default PersonalDetails;
