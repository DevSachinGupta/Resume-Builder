import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import cx from 'classnames';
import { FaTimes } from 'react-icons/fa';
import Input from '../../FormComponents/Input';
// import Textfield from '../../FormComponents/TextField';
import Button from '../../Button';
import Icons from '../../Icons';
// import MultiselectAutocomplete from '../../FormComponents/MultiselectAutocomplete';
import './style.scss';

function HobbiesForm() {
  const hobbyData = [
    { name: 'Music', icon: <Icons icon="music" /> },
    { name: 'Singing', icon: <Icons icon="singing" /> },
    { name: 'Reading', icon: <Icons icon="reading" /> },
    { name: 'Writing', icon: <Icons icon="writing" /> },
    { name: 'Blogging', icon: <Icons icon="blogging" /> },
    { name: 'Poetry', icon: <Icons icon="poetry" /> },
    { name: 'Sketching', icon: <Icons icon="sketching" /> },
    { name: 'Photography', icon: <Icons icon="photography" /> },
    { name: 'Designing', icon: <Icons icon="designing" /> },
    { name: 'Painting', icon: <Icons icon="painting" /> },
    { name: 'Volunteering', icon: <Icons icon="volunteering" /> },
    { name: 'Socializing', icon: <Icons icon="socializing" /> },
    { name: 'Gaming', icon: <Icons icon="gaming" /> },
    { name: 'Sport', icon: <Icons icon="sport" /> },
    { name: 'Cycling', icon: <Icons icon="cycling" /> },
    { name: 'Swimming', icon: <Icons icon="swimming" /> },
    { name: 'Hiking', icon: <Icons icon="hiking" /> },
    { name: 'Camping', icon: <Icons icon="camping" /> },
    { name: 'Traveling', icon: <Icons icon="traveling" /> },
    { name: 'Cricket', icon: <Icons icon="cricket" /> },
    { name: 'Dancing', icon: <Icons icon="dancing" /> },
    { name: 'Theatre', icon: <Icons icon="theatre" /> },
    { name: 'Acting', icon: <Icons icon="acting" /> },
    { name: 'Youtuber', icon: <Icons icon="youtuber" /> },
    { name: 'Coding', icon: <Icons icon="coding" /> },
    { name: 'Cooking', icon: <Icons icon="cooking" /> },
    { name: 'Art & Craft', icon: <Icons icon="artandcraft" /> },
    { name: 'Gardening', icon: <Icons icon="gardening" /> },
  ];
  const blankHobbiesField = {
    name: '',
  };
  const [hobbies, setHobbies] = useState([]);
  const getValues = data => {
    // console.log("value recieved:- ", data);
    setHobbies([...hobbies, data]);
  };
  const removeValue = () => {};
  let hobbiesUI;
  if (hobbies) {
    hobbiesUI = hobbies.map(data => (
      <div className="hobby">
        <span className="">{data.icon}</span>
        <span className="">{data.name}</span>
        <button type="button" onClick={removeValue}>
          <FaTimes />
        </button>
      </div>
    ));
  }
  return (
    <Formik initialValues={{ blankHobbiesField }}>
      {() => (
        <Form>
          <div>
            {hobbies.length ? (
              <div className="selectedHobbies">{hobbiesUI}</div>
            ) : (
              ''
            )}
            <Input
              type="autocomplete"
              placeholder="Select Your Hobbies"
              label="Choose From List"
              name="Hobbies"
              options={hobbyData}
              allowCustomText={false}
              manageRangeVal={false}
              allowMultiselect
              allowIconsInOptionList
              updateValues={getValues}
            />
            <div className={cx('footerContainer')}>
              <Button as="submit" fullWidth type="primary">
                Save Details
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default HobbiesForm;
