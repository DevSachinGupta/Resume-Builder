import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
  FaGlobeAsia,
} from 'react-icons/fa';
import Button from '../../Button';
import Input from '../../FormComponents/Input';
import { isEmpty, isLink } from '../../../utils/validations/input';
function SocialForm() {
  return (
    <div>
      <Input inputIcon={<FaFacebook />} placeholder="https://facebook.com" />
      <Input inputIcon={<FaTwitter />} placeholder="https://twitter.com" />
      <Input inputIcon={<FaDribbble />} placeholder="https://dribbe.com" />
      <Input inputIcon={<FaLinkedin />} placeholder="https://linkedIn.com" />
      <Input inputIcon={<FaGlobeAsia />} placeholder="your website url" />
      <Button fullWidth type="flat">
        Add Another
      </Button>
    </div>
  );
}

export default SocialForm;
