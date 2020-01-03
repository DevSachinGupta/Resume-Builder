import React, { useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
  FaGlobeAsia,
} from 'react-icons/fa';
import { useFormik } from 'formik';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import { isEmpty, isLink } from '../../../utils/validations/input';
function SocialForm() {
  const [allInputs, setAllInputs] = useState([
    {
      icon: FaFacebook,
      placeholder: 'https://facebook.com',
    }, {
      icon: FaTwitter,
      placeholder: 'https://twitter.com',
    }, {
      icon: FaDribbble,
      placeholder: 'https://dribbe.com',
    }, {
      icon: FaLinkedin,
      placeholder: 'https://linkedIn.com'
    }, {
      icon: FaGlobeAsia,
      placeholder: 'your website url'
    }
  ])
  const formik = useFormik({
    onSubmit: (values) => {
    }
  });
  const addAnother = () => {
    allInputs.push({
      icon: FaGlobeAsia,
      placeholder: 'Other'
    });
    setAllInputs([...allInputs]);
  }
  return (
    <div>
      {
        allInputs.map((input) => <Input inputIcon={<input.icon />} onChange={formik.handleChange} placeholder={input.placeholder} />)
      }
      <Button onClick={addAnother} fullWidth type="flat">
        Add Another
      </Button>
    </div>
  );
}

export default SocialForm;
