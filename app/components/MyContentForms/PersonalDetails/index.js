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
    </div>
  );
}
export default PersonalDetails;
