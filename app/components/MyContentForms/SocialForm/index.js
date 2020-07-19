import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
  FaGlobeAsia,
} from 'react-icons/fa';
import { Formik, Form, FieldArray } from 'formik';
import cx from 'classnames';
import { useToasts } from 'react-toast-notifications';
import { createStructuredSelector } from 'reselect';
import {
  toggleModal,
  updateResumeJsonInUserData,
} from 'containers/App/actions';
import {
  updateEditorCanvas,
  updateResumeKeyValue,
} from 'containers/Builder/actions';
import { makeSelectResumeJsonStateFromUserData } from '../../../containers/App/selectors';
import { setModalContent } from '../../../containers/MyContent/actions';
import { componentMapSocial, formatValuesSocial } from '../dataLoadStructure';
import { validationMap } from './validation';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import './style.scss';

function SocialForm({ resumeDataStore, dispatch }) {
  const blankSocialFields = {
    icon: FaGlobeAsia,
    name: 'other',
    placeholder: 'Other',
    url: '',
    icon_temp: 'icon-github',
  };

  const allInputs = [
    {
      icon: FaFacebook,
      name: 'facebook',
      placeholder: 'https://facebook.com',
      icon_temp: 'icon-facebook',
      url: '',
    },
    {
      icon: FaTwitter,
      name: 'twitter',
      placeholder: 'https://twitter.com',
      icon_temp: 'icon-twitter',
      url: '',
    },
    {
      icon: FaDribbble,
      name: 'dribble',
      placeholder: 'https://dribbe.com',
      icon_temp: 'icon-dribble',
      url: '',
    },
    {
      icon: FaLinkedin,
      name: 'linkedIn',
      placeholder: 'https://linkedIn.com',
      icon_temp: 'icon-linkedin',
      url: '',
    },
    {
      icon: FaGlobeAsia,
      name: 'website',
      placeholder: 'your website url',
      icon_temp: 'icon-github',
      url: '',
    },
  ];

  let storeSocial = null;
  if (resumeDataStore.social) {
    storeSocial = resumeDataStore.social.history;
  }
  const [socials, setSocials] = useState(storeSocial || allInputs);

  const socailDataURLMap = {
    'facebook.com': {
      icon: FaFacebook,
      name: 'facebook',
      placeholder: 'https://facebook.com',
      icon_temp: 'icon-facebook',
    },
    'twitter.com': {
      icon: FaTwitter,
      name: 'twitter',
      placeholder: 'https://twitter.com',
      icon_temp: 'icon-twitter',
    },
    'dribble.com': {
      icon: FaDribbble,
      name: 'dribble',
      placeholder: 'https://dribbe.com',
      icon_temp: 'icon-dribble',
    },
    'linkedIn.com': {
      icon: FaLinkedin,
      name: 'linkedIn',
      placeholder: 'https://linkedIn.com',
      icon_temp: 'icon-linkedin',
    },
  };

  const updateSocialValue = (e, setFieldValue, value, name, idx) => {
    let data = {};
    const baseURL = e.target.value
      .replace(/^(www.|http[s]*:\/\/[www\.]*)/gim, '')
      .split('/')[0];
    data = socailDataURLMap[baseURL];
    if (!data) {
      data = value;
    }
    setFieldValue(`social.${idx}`, data);
  };

  const httpsValidation = (e, setFieldValue, idx) => {
    let baseURL = e.target.value;
    if (baseURL !== '') {
      const prefixHttp = 'http://';
      if (baseURL.substr(0, prefixHttp.length) === prefixHttp) {
        baseURL = baseURL.replace(prefixHttp, '');
      }
      const prefixHttps = 'https://';
      if (baseURL.substr(0, prefixHttps.length) !== prefixHttps) {
        baseURL = prefixHttps + baseURL;
      }
      e.target.value = baseURL;
      setFieldValue(`social.${idx}.url`, baseURL);
    }
  };

  const { addToast } = useToasts();

  const handleSave = values => {
    const updatedSoc = formatValuesSocial(
      JSON.parse(JSON.stringify(values.social)),
    );
    const history = { history: values.social };
    dispatch(
      updateEditorCanvas('social', 'ADD', updatedSoc, componentMapSocial),
    );
    dispatch(updateResumeJsonInUserData('social', history));
    dispatch(updateResumeKeyValue('social', values.social, addToast));
    dispatch(toggleModal());
  };

  const handleSaveAndNext = values => {
    handleSave(values);
    dispatch(setModalContent('hobbies'));
  };
  const handlePrevious = () => {
    dispatch(toggleModal());
    dispatch(setModalContent('affilication'));
  };

  return (
    <div>
      <Formik
        initialValues={{ social: socials }}
        onSubmit={(values, actions) => {
          console.log('val and action', values, actions);
          if (values.publish === 0) {
            handleSave(values);
          } else if (values.publish === 1) {
            handleSaveAndNext(values);
          } else if (values.publish === 2) {
            handlePrevious(values);
          }
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <Form>
            <FieldArray
              name="social"
              render={arrayHelpers => (
                <React.Fragment>
                  {values.social.map((item, idx) => (
                    <Input
                      inputIcon={<item.icon />}
                      placeholder={item.placeholder}
                      label={item.placeholder}
                      clearable
                      validate={validationMap.url}
                      name={`social.${idx}.url`}
                      key={`social.${idx}`}
                      onInput={e => {
                        updateSocialValue(
                          e,
                          setFieldValue,
                          values.social[idx],
                          item.name,
                          idx,
                        );
                      }}
                      onBlur={e => {
                        httpsValidation(e, setFieldValue, idx);
                      }}
                      onKeyDown={e => {
                        if (e.keyCode === 13)
                          httpsValidation(e, setFieldValue, idx);
                      }}
                    />
                  ))}

                  <Button
                    onClick={() => arrayHelpers.push(blankSocialFields)}
                    fullWidth
                    type="flat"
                  >
                    Add Another
                  </Button>
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
                  </div>
                  {/* <div className={cx('footerContainer')}>
                    <Button as="submit" fullWidth type="primary">
                      Save Details
                    </Button>
                  </div> */}
                </React.Fragment>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

SocialForm.propTypes = {
  resumeDataStore: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  resumeDataStore: makeSelectResumeJsonStateFromUserData(),
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
export default withCompose(SocialForm);
