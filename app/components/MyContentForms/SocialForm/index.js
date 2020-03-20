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
              label={input.placeholder}
              validate={() => {}}
              name={`social[0].${input.name}`}
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
