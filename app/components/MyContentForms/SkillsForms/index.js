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
import Button from '../../Button';
import Dropdown from '../../FormComponents/Dropdown';
import Tag from '../../Tag';
import './style.scss';

function SkillsForm({ editorState, resumeJSONState, dispatch }) {
  const skillData = [
    { key: 'Music', value: 'Music' },
    { key: 'B', value: 'B' },
    { key: 'Delhi', value: 'Delhi' },
    { key: 'Kolkata', value: 'Kolkata' },
    { key: 'Mumbai', value: 'Mumbai' },
    { key: 'New Delhi', value: 'New Delhi' },
    { key: 'Ghaziabad', value: 'Ghaziabad' },
    { key: 'Other', value: 'Other' },
  ];
  const blankSkillsField = [];
  const [data, setData] = useState([]);
  const updateData = value => {
    setData([...data, value]);
  };

  const handleSave = values => {
    const updatedSkills = [...values];
    const history = { history: updatedSkills };
    updateCanvas('skills', 'ADD', values, editorState);
    dispatch(updateResumeJSONState(history, 'Skill'));
  };

  return (
    <Formik
      initialValues={blankSkillsField}
      onSubmit={(values, actions) => {
        console.log(values);
        handleSave(values);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <React.Fragment>
          <div className="tagContainer">
            {data.map(item => (
              <Tag>{item.value}</Tag>
            ))}
          </div>
          <Form className="socialFormContainer">
            <Dropdown
              onSelect={updateData}
              name="skills"
              multiSelect
              options={skillData}
            />
            <div className={cx('footerContainer')}>
              <Button as="submit" fullWidth type="primary">
                Save Details
              </Button>
            </div>
          </Form>
        </React.Fragment>
      )}
    </Formik>
  );
}

SkillsForm.propTypes = {
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
export default withCompose(SkillsForm);
