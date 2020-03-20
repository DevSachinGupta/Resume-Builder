import React, { useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
  FaGlobeAsia,
} from 'react-icons/fa';
import { Formik } from 'formik';
import cx from 'classnames';
import Button from '../../Button';
import Input from '../../FormComponents/Input';

function SocialForm() {
  const [allInputs, setAllInputs] = useState([
    {
      icon: FaFacebook,
      placeholder: 'https://facebook.com',
    },
    {
      icon: FaTwitter,
      placeholder: 'https://twitter.com',
    },
    {
      icon: FaDribbble,
      placeholder: 'https://dribbe.com',
    },
    {
      icon: FaLinkedin,
      placeholder: 'https://linkedIn.com',
    },
    {
      icon: FaGlobeAsia,
      placeholder: 'your website url',
    },
  ]);
  const addAnother = () => {
    allInputs.push({
      icon: FaGlobeAsia,
      placeholder: 'Other',
    });
    setAllInputs([...allInputs]);
  };
  return (
    <React.Fragment>
      <Formik>
        <React.Fragment>
          {allInputs.map(input => (
            <Input
              inputIcon={<input.icon />}
              placeholder={input.placeholder}
              name="abcabcabc"
            />
          ))}
          <div className={cx('footerContainer')}>
                    <Button as="submit" fullWidth type="primary">
                      Save Details
                    </Button>
                  </div>
        </React.Fragment>
      </Formik>
      <Button onClick={addAnother} fullWidth type="flat">
        Add Another
      </Button>
    </React.Fragment>
  );
}

export default SocialForm;
