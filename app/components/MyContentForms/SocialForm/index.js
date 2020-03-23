import React, { useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
  FaGlobeAsia,
} from 'react-icons/fa';
import { Formik, Form, FieldArray } from 'formik';
import cx from 'classnames';
import { validationMap } from './validation';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import './style.scss';

function SocialForm() {
  const blankSocialFields = {
    icon: FaGlobeAsia,
    name: 'other',
    placeholder: 'Other',
  };
  const storeSocial = null;

  // const [allInputs, setAllInputs] = useState([
  const allInputs = [
    {
      icon: FaFacebook,
      name: 'facebook',
      placeholder: 'https://facebook.com',
    },
    {
      icon: FaTwitter,
      name: 'twitter',
      placeholder: 'https://twitter.com',
    },
    {
      icon: FaDribbble,
      name: 'dribble',
      placeholder: 'https://dribbe.com',
    },
    {
      icon: FaLinkedin,
      name: 'linkedIn',
      placeholder: 'https://linkedIn.com',
    },
    {
      icon: FaGlobeAsia,
      name: 'website',
      placeholder: 'your website url',
    },
  ];

  const socailDataURLMap = {
    'facebook.com': {
      icon: FaFacebook,
      name: 'facebook',
      placeholder: 'https://facebook.com',
    },
    'twitter.com': {
      icon: FaTwitter,
      name: 'twitter',
      placeholder: 'https://twitter.com',
    },
    'dribble.com': {
      icon: FaDribbble,
      name: 'dribble',
      placeholder: 'https://dribbe.com',
    },
    'linkedIn.com': {
      icon: FaLinkedin,
      name: 'linkedIn',
      placeholder: 'https://linkedIn.com',
    },
  };

  const updateSocialValue = (e, setFieldValue, value, idx) => {
    let data = {};
    const baseURL = e.target.value
      .replace(/^(www.|http[s]*:\/\/[www\.]*)/gim, '')
      .split('/')[0];
    data = socailDataURLMap[baseURL];
    console.log('data : ', data);
    if (!data) {
      data = value;
    }
    setFieldValue(`social.${idx}`, data);
  };

  // if (resumeJSONState.Social) {
  //   storeSocial = resumeJSONState.Social.history;
  // }

  const [socials, setSocials] = useState(storeSocial || allInputs);

  return (
    <div>
      <Formik
        initialValues={{ social: socials }}
        onSubmit={(values, actions) => {
          console.log(values);
          // handleSave(values);
        }}
      >
        {({ values, setFieldValue }) => (
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
                      name={`social.${idx}.${item.name}`}
                      onInput={e => {
                        updateSocialValue(
                          e,
                          setFieldValue,
                          values.social[idx],
                          idx,
                        );
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
                    <Button as="submit" fullWidth type="primary">
                      Save Details
                    </Button>
                  </div>
                </React.Fragment>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SocialForm;
