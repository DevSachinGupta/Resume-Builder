import React from 'react';
import EducationForm from './EducationForm';
/**
 *
 * MyContentForms
 *
 */

export const getModalContent = contentType => {
  switch (contentType) {
    case 'personalDetails':
      return <div>HELLO WORLD</div>;
    case 'education':
      return <EducationForm />;
    case 'employmentDetails':
      return <div>HELLO WORLD</div>;
    case 'projects':
      return <div>HELLO WORLD</div>;
    case 'skills':
      return <div>HELLO WORLD</div>;
    case 'affilication':
      return <div>HELLO WORLD</div>;
    case 'social':
      return <div>HELLO WORLD</div>;
    case 'hobbies':
      return <div>HELLO WORLD</div>;
    case 'publication':
      return <div>HELLO WORLD</div>;
    case 'accomplishments':
      return <div>HELLO WORLD</div>;
    default:
      return <div>I AM default</div>;
  }
};
