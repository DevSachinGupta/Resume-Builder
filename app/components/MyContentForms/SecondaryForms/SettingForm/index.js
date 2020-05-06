/**
 *
 * SettingForm
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import { Formik, Form } from 'formik';
import SettingInputs from './SettingItems';
import { Row, Column } from '../../../Layout';
import Input from '../../../FormComponents/Input';
import { validationMap } from './validation';
import TextArea from '../../../FormComponents/TextArea';
import Select from '../../../FormComponents/Select';
import SettingsMenu from './SettingsMenu';
import SettingsContent from './SettingsContent';
import SettingsPage from './SettingsPage';
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
  const [settings, setSettings] = useState(blankSettingsFields);
  const [currentPage, setCurrentPage] = useState('/settings/general');
  // console.log('blank setting', blankSettingsFields, settings);
  // Define your menu
  const settingMenu = [
    {
      title: 'General',
      url: '/settings/general',
    },
    {
      title: 'Profile',
      url: '/settings/profile',
    },
    {
      title: 'Notifications',
      url: '/settings/notifications',
    },
    {
      title: 'Language',
      url: '/settings/language',
    },
    {
      title: 'Appearance',
      url: '/settings/appearance',
    },
    {
      title: 'Plugins',
      url: '/settings/plugins',
    },
    {
      title: 'About',
      url: '/settings/about',
    },
  ];

  // Save settings after close
  const paneLeaveHandler = (wasSaved, newSettings, oldSettings) => {
    // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.
    if (wasSaved && newSettings !== oldSettings) {
      // do something with the settings, e.g. save via ajax.
      setSettings(newSettings);
    }
  };

  const settingsChanged = ev => {};

  const handleFormSubmit = values => {
    // call fetch with post method in saga
    console.log(values);
  };

  // Menu
  const switchContentMenu = menuItem => {
    if (currentPage !== menuItem.url) {
      setCurrentPage(menuItem.url);
    }
  };

  // Footer
  const footorCloseClicked = ev => {
    ev.preventDefault();
    paneLeaveHandler(false, settings, settings);
  };

  return (
    <div>
      <div className="settings-pane">
        {/* <form className="settings" onSubmit={handleFormSubmit}> */}
        <Formik
          initialValues={settings}
          onSubmit={values => {
            console.log(values);
            handleFormSubmit(values);
          }}
        >
          {({ values }) => (
            <Form className="settings">
              {/* {console.log("temp values",values)} */}
              <SettingsMenu
                headline="General Settings"
                items={settingMenu}
                currentPage={currentPage}
                switchContent={switchContentMenu}
              />
              <div className="settings-content">
                <SettingsContent
                  header
                  items={settingMenu}
                  currentPage={currentPage}
                >
                  <SettingsPage handler="/settings/general" settings={settings}>
                    <Row>
                      <Column width="full" className="px-1">
                        <Input
                          placeholder="Name"
                          label="Name"
                          validate={validationMap.title}
                          name="mysettings.general.name"
                          // autoFocus
                          allowValidation={false}
                          className="form-control"
                          onChange={settingsChanged}
                          // defaultValue={settings['mysettings.general.name']}
                        />
                      </Column>
                    </Row>
                    <Row>
                      <Column width="1/2" className="px-1">
                        <Input
                          label="Username"
                          validate={validationMap.title}
                          name="mysettings.general.username"
                          className="form-control"
                          placeholder="Username"
                          allowValidation={false}
                          aria-describedby="basic-addon1"
                          onChange={settingsChanged}
                          // defaultValue={settings['mysettings.general.username']}
                        />
                      </Column>
                      <Column width="1/2" className="px-1">
                        <Input
                          label="E-Mail"
                          validate={validationMap.title}
                          className="form-control"
                          name="mysettings.general.email"
                          placeholder="E-Mail Address"
                          allowValidation={false}
                          onChange={settingsChanged}
                          // defaultValue={settings['mysettings.general.email']}
                        />
                      </Column>
                    </Row>
                    <Row>
                      <Column width="1/2" className="px-1">
                        <Input
                          label="Picture"
                          validate={validationMap.title}
                          className="form-control"
                          name="mysettings.general.picture"
                          placeholder="Picture"
                          allowValidation={false}
                          onChange={settingsChanged}
                          // defaultValue={settings['mysettings.general.picture']}
                        />
                      </Column>
                      <Column width="1/2" className="px-1">
                        <Input
                          label="Color-Theme"
                          validate={validationMap.title}
                          className="form-control"
                          name="mysettings.general.color-theme"
                          placeholder="Color-Theme"
                          allowValidation={false}
                          onChange={settingsChanged}
                          // defaultValue={
                          //   settings['mysettings.general.color-theme']
                          // }
                        />
                      </Column>
                    </Row>
                  </SettingsPage>
                  <SettingsPage handler="/settings/profile">
                    <Row>
                      <Column width="1/2" className="px-1">
                        <Input
                          label="Firstname"
                          validate={validationMap.title}
                          name="mysettings.profile.firstname"
                          className="form-control"
                          placeholder="Firstname"
                          allowValidation={false}
                          onChange={settingsChanged}
                          // defaultValue={
                          //   settings['mysettings.profile.firstname']
                          // }
                        />
                      </Column>
                      <Column width="1/2" className="px-1">
                        <Input
                          label="LastName"
                          validate={validationMap.title}
                          name="mysettings.profile.lastname"
                          className="form-control"
                          placeholder="LastName"
                          allowValidation={false}
                          onChange={settingsChanged}
                          // defaultValue={settings['mysettings.profile.lastname']}
                        />
                      </Column>
                    </Row>
                    <Row>
                      <Column width="full" className="px-1">
                        <TextArea
                          placeholder="Biography"
                          label="Biography"
                          validate={validationMap.summary}
                          name="mysettings.profile.biography"
                          allowValidation={false}
                          className="form-control"
                          onChange={settingsChanged}
                          // defaultValue={
                          //   settings['mysettings.profile.biography']
                          // }
                        />
                      </Column>
                    </Row>
                  </SettingsPage>
                </SettingsContent>

                <div className="settings-footer">
                  <Button
                    as="submit"
                    fullWidth
                    type="primary"
                    className="btn btn-primary"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        {/* </form> */}
      </div>
    </div>

    // <Formik
    //   initialValues={blankSettingsFields}
    //   onSubmit={values => {
    //     console.log(values);
    //     handleSave(values);
    //   }}
    // >
    //   {() => (
    //     <Form>
    //       <div className="contactUsSections">
    //         <div className="contactUsContainer">
    //           <SettingInputs />
    //         </div>
    //         <div className={cx('footerContainer')}>
    //           <Button as="submit" fullWidth type="primary">
    //             Submit
    //           </Button>
    //         </div>
    //       </div>
    //     </Form>
    //   )}
    // </Formik>
  );
}

SettingForm.propTypes = {};

export default memo(SettingForm);
