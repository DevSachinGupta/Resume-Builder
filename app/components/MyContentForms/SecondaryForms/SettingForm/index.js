/**
 *
 * SettingForm
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import { Formik, Form } from 'formik';
import SettingInputs from './SettingItems';
import Button from '../../../Button';
import './style.scss';

function SettingForm() {
  const blankSettingsFields = {
    'mysettings.general.name': 'Dennis Stücken',
    'mysettings.general.username': 'dstuecken',
    'mysettings.general.color-theme': 'purple',
    'mysettings.general.email': 'dstuecken@react-settings-pane.com',
    'mysettings.general.picture': 'earth',
    'mysettings.profile.firstname': 'Dennis',
    'mysettings.profile.lastname': 'Stücken',
  };

  const handleSave = values => {
    // call fetch with post method in saga
    console.log(values);
  };

  return (
    <Formik
      initialValues={blankSettingsFields}
      onSubmit={values => {
        console.log(values);
        handleSave(values);
      }}
    >
      {() => (
        <Form>
          <div className="contactUsSections">
            <div className="contactUsContainer">
              <SettingInputs />
            </div>
            <div className={cx('footerContainer')}>
              <Button as="submit" fullWidth type="primary">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

SettingForm.propTypes = {};

export default memo(SettingForm);
