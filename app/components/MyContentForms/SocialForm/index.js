import React, { useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
  FaGlobeAsia,
  FaTimes,
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
                      // name={`social[0].${input.name}`}
                      name={`social.${idx}.${item.name}`}
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
