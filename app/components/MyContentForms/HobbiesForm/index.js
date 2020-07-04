import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik, Form } from 'formik';
import cx from 'classnames';
import { createStructuredSelector } from 'reselect';
import { useToasts } from 'react-toast-notifications';
import { makeUpdateResumeJSONState } from 'containers/Builder/selectors';
import {
  updateResumeJSONState,
  updateEditorCanvas,
  updateResumeKeyValue,
} from 'containers/Builder/actions';
import { FaTimes } from 'react-icons/fa';
import { toggleModal } from 'containers/App/actions';
import { setModalContent } from '../../../containers/MyContent/actions';
// import { updateResumeKeyValue } from '../index';
import Input from '../../FormComponents/Input';
import Button from '../../Button';
import Icons from '../../Icons';
import './style.scss';

function HobbiesForm({ resumeJSONState, dispatch }) {
  let hobbyData = [
    { icon_temp: 'icon-adventurer', value: 'Music', icon: <Icons icon="music" /> },
    { icon_temp: 'icon-adventurer', value: 'Singing', icon: <Icons icon="singing" /> },
    { icon_temp: 'icon-adventurer', value: 'Reading', icon: <Icons icon="reading" /> },
    { icon_temp: 'icon-adventurer', value: 'Writing', icon: <Icons icon="writing" /> },
    { icon_temp: 'icon-adventurer', value: 'Blogging', icon: <Icons icon="blogging" /> },
    { icon_temp: 'icon-adventurer', value: 'Poetry', icon: <Icons icon="poetry" /> },
    { icon_temp: 'icon-adventurer', value: 'Sketching', icon: <Icons icon="sketching" /> },
    { icon_temp: 'icon-adventurer', value: 'Photography', icon: <Icons icon="photography" /> },
    { icon_temp: 'icon-adventurer', value: 'Designing', icon: <Icons icon="designing" /> },
    { icon_temp: 'icon-adventurer', value: 'Painting', icon: <Icons icon="painting" /> },
    { icon_temp: 'icon-adventurer', value: 'Volunteering', icon: <Icons icon="volunteering" /> },
    { icon_temp: 'icon-adventurer', value: 'Socializing', icon: <Icons icon="socializing" /> },
    { icon_temp: 'icon-adventurer', value: 'Gaming', icon: <Icons icon="gaming" /> },
    { icon_temp: 'icon-adventurer', value: 'Sport', icon: <Icons icon="sport" /> },
    { icon_temp: 'icon-adventurer', value: 'Cycling', icon: <Icons icon="cycling" /> },
    { icon_temp: 'icon-adventurer', value: 'Swimming', icon: <Icons icon="swimming" /> },
    { icon_temp: 'icon-adventurer', value: 'Hiking', icon: <Icons icon="hiking" /> },
    { icon_temp: 'icon-adventurer', value: 'Camping', icon: <Icons icon="camping" /> },
    { icon_temp: 'icon-adventurer', value: 'Traveling', icon: <Icons icon="traveling" /> },
    { icon_temp: 'icon-adventurer', value: 'Cricket', icon: <Icons icon="cricket" /> },
    { icon_temp: 'icon-adventurer', value: 'Dancing', icon: <Icons icon="dancing" /> },
    { icon_temp: 'icon-adventurer', value: 'Theatre', icon: <Icons icon="theatre" /> },
    { icon_temp: 'icon-adventurer', value: 'Acting', icon: <Icons icon="acting" /> },
    { icon_temp: 'icon-adventurer', value: 'Youtuber', icon: <Icons icon="youtuber" /> },
    { icon_temp: 'icon-adventurer', value: 'Coding', icon: <Icons icon="coding" /> },
    { icon_temp: 'icon-adventurer', value: 'Cooking', icon: <Icons icon="cooking" /> },
    { icon_temp: 'icon-adventurer', value: 'Art & Craft', icon: <Icons icon="artandcraft" /> },
    { icon_temp: 'icon-adventurer', value: 'Gardening', icon: <Icons icon="gardening" /> },
  ];
  const componentMap = {
    url: {
      key: ['href', 'title'],
      valueMap: ['value', 'value'],
      componentType: 'attribute',
    },
    icon: {
      key: ['class'],
      valueMap: ['icon_temp'],
      componentType: 'attribute',
    },
  };

  let storeHobbies = null;
  if (resumeJSONState.hobbies) {
    storeHobbies = resumeJSONState.hobbies.history;
    hobbyData = hobbyData.filter(
      data =>
        !storeHobbies
          .map(tempData => tempData.value.toLowerCase())
          .includes(data.value.toLowerCase()),
    );
  }

  const [hobbies, setHobbies] = useState(storeHobbies || []);
  const [hobbiesData, setHobbiesData] = useState(hobbyData);

  const getValues = data => {
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

  const { addToast } = useToasts();

  const handleSave = values => {
    const updatedHob = values;
    const history = { history: updatedHob };
    dispatch(updateEditorCanvas('hobbies', 'ADD', values, componentMap));
    dispatch(updateResumeJSONState(history, 'hobbies'));
    dispatch(updateResumeKeyValue('hobbies', values, addToast));
    dispatch(toggleModal());
  };
  const handleSaveAndNext = values => {
    handleSave(values);
    dispatch(setModalContent('publication'));
  };
  const handlePrevious = () => {
    dispatch(toggleModal());
    dispatch(setModalContent('social'));
  };

  return (
    <Formik
      initialValues={[...hobbies]}
      onSubmit={values => {
        console.log('val and action', values);
        if (values.publish === 0) {
          handleSave(values);
        } else if (values.publish === 1) {
          handleSaveAndNext(values);
        } else if (values.publish === 2) {
          handlePrevious(values);
        }
      }}
      enableReinitialize
    >
      {({ setFieldValue, handleSubmit }) => (
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
              <div className="mx-2 flex justify-between">
                <div className="flex justify-left">
                  <div className="pr-2">
                    <Button
                      type="primary"
                      onClick={() => {
                        setFieldValue('publish', 2, false);
                        handleSubmit();
                      }}
                    >
                      Previous
                    </Button>
                  </div>
                  <div className="pr-2">
                    <Button
                      type="primary"
                      onClick={() => {
                        setFieldValue('publish', 0, false);
                        handleSubmit();
                      }}
                    >
                      Save
                    </Button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="pl-6 pr-2">
                    <Button
                      type="primary"
                      onClick={() => {
                        setFieldValue('publish', 1, false);
                        handleSubmit();
                      }}
                    >
                      Save and Next
                    </Button>
                  </div>
                </div>
              </div>
              {/* <Button as="submit" type="primary">
                Save Details
              </Button>
              <Button as="submit" type="primary">
                Save and Next
              </Button> */}
            </div>
            {/* <div className={cx('footerContainer')}>
              <Button as="submit" fullWidth type="primary">
                Save Details
              </Button>
            </div> */}
          </div>
        </Form>
      )}
    </Formik>
  );
}
HobbiesForm.propTypes = {
  resumeJSONState: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
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
