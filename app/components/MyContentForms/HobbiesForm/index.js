import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik, Form } from 'formik';
import cx from 'classnames';
import { createStructuredSelector } from 'reselect';
import {
  makeUpdateResumeJSONState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import { updateResumeJSONState } from 'containers/Builder/actions';
import updateCanvas from 'components/Builder/BuilderEditor/ComponentEditor';
import { FaTimes } from 'react-icons/fa';
import Input from '../../FormComponents/Input';
// import Textfield from '../../FormComponents/TextField';
import Button from '../../Button';
import Icons from '../../Icons';
// import MultiselectAutocomplete from '../../FormComponents/MultiselectAutocomplete';
import './style.scss';

function HobbiesForm({ editorState, resumeJSONState, dispatch }) {
  const hobbyData = [
    { value: 'Music', icon: <Icons icon="music" /> },
    { value: 'Singing', icon: <Icons icon="singing" /> },
    { value: 'Reading', icon: <Icons icon="reading" /> },
    { value: 'Writing', icon: <Icons icon="writing" /> },
    { value: 'Blogging', icon: <Icons icon="blogging" /> },
    { value: 'Poetry', icon: <Icons icon="poetry" /> },
    { value: 'Sketching', icon: <Icons icon="sketching" /> },
    { value: 'Photography', icon: <Icons icon="photography" /> },
    { value: 'Designing', icon: <Icons icon="designing" /> },
    { value: 'Painting', icon: <Icons icon="painting" /> },
    { value: 'Volunteering', icon: <Icons icon="volunteering" /> },
    { value: 'Socializing', icon: <Icons icon="socializing" /> },
    { value: 'Gaming', icon: <Icons icon="gaming" /> },
    { value: 'Sport', icon: <Icons icon="sport" /> },
    { value: 'Cycling', icon: <Icons icon="cycling" /> },
    { value: 'Swimming', icon: <Icons icon="swimming" /> },
    { value: 'Hiking', icon: <Icons icon="hiking" /> },
    { value: 'Camping', icon: <Icons icon="camping" /> },
    { value: 'Traveling', icon: <Icons icon="traveling" /> },
    { value: 'Cricket', icon: <Icons icon="cricket" /> },
    { value: 'Dancing', icon: <Icons icon="dancing" /> },
    { value: 'Theatre', icon: <Icons icon="theatre" /> },
    { value: 'Acting', icon: <Icons icon="acting" /> },
    { value: 'Youtuber', icon: <Icons icon="youtuber" /> },
    { value: 'Coding', icon: <Icons icon="coding" /> },
    { value: 'Cooking', icon: <Icons icon="cooking" /> },
    { value: 'Art & Craft', icon: <Icons icon="artandcraft" /> },
    { value: 'Gardening', icon: <Icons icon="gardening" /> },
  ];
  // const blankHobbiesField = {
  //   name: '',
  // };
  const [hobbiesData, setHobbiesData] = useState(hobbyData);
  const [hobbies, setHobbies] = useState([]);
  const getValues = data => {
    // console.log("value recieved:- ", data);
    setHobbies([...hobbies, data]);
    const hobbyDataTemp = hobbiesData.filter(
      hData => hData.value.toLowerCase() !== data.value.toLowerCase(),
    );
    setHobbiesData(hobbyDataTemp);
  };
  const removeValue = e => {
    const removeData = hobbies.find(
      data => data.value.toLowerCase() === e.currentTarget.value.toLowerCase(),
    );
    const hobbyDataTemp = [...hobbiesData, removeData];
    const hobby = hobbies.filter(
      data => data.value.toLowerCase() !== e.currentTarget.value.toLowerCase(),
    );
    setHobbiesData(hobbyDataTemp);
    setHobbies(hobby);
  };
  let hobbiesUI;
  if (hobbies) {
    hobbiesUI = hobbies.map((data, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="hobby" key={`hobby-${index}`}>
        <span className="">{data.icon}</span>
        <span className="">{data.value}</span>
        <button type="button" onClick={removeValue} value={data.value}>
          <FaTimes />
        </button>
      </div>
    ));
  }

  const handleSave = values => {
    const updatedHob = [...values];
    const history = { history: updatedHob };
    updateCanvas('hobbies', 'ADD', values, editorState);
    dispatch(updateResumeJSONState(history, 'Hobbies'));
  };

  return (
    <Formik
      initialValues={{ ...hobbies }}
      onSubmit={values => {
        // eslint-disable-next-line no-console
        console.log(values);
        handleSave(values);
      }}
      enableReinitialize
    >
      {() => (
        <Form>
          <div className="hobbbiesSections">
            {hobbies.length ? (
              <div className="selectedHobbies">{hobbiesUI}</div>
            ) : (
              ''
            )}
            <Input
              type="autocomplete"
              placeholder="Select Your Hobbies"
              label="Choose From List"
              name="hobbies"
              options={hobbiesData}
              allowCustomText={false}
              allowMultiselect
              allowIconsInOptionList
              updateValues={getValues}
              allowValidation={false}
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
HobbiesForm.propTypes = {
  editorState: PropTypes.object,
  resumeJSONState: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editorState: makeUpdateEditorState(),
  resumeJSONState: makeUpdateResumeJSONState(),
});
const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(HobbiesForm);
