import React from 'react';
/**
 *
 * MyContentForms
 *
 */

export const getModalContent = modelId => {
  let ModalComponent = null;
  switch (modelId) {
    case 'personalDetails':
      ModalComponent = React.lazy(() => import('./PersonalDetails'));
      break;
    case 'education':
      ModalComponent = React.lazy(() => import('./EducationForm'));
      break;
    case 'employmentDetails':
      ModalComponent = React.lazy(() => import('./EmploymentForm'));
      break;
    case 'projects':
      ModalComponent = React.lazy(() => import('./ProjectsForm'));
      break;
    case 'skills':
      ModalComponent = React.lazy(() => import('./SkillsForms'));
      break;
    case 'affilication':
      ModalComponent = React.lazy(() => import('./AffiliationsForm'));
      break;
    case 'social':
      ModalComponent = React.lazy(() => import('./SocialForm'));
      break;
    case 'hobbies':
      ModalComponent = React.lazy(() => import('./HobbiesForm'));
      break;
    case 'publication':
      ModalComponent = React.lazy(() => import('./PublicationForm'));
      break;
    case 'accomplishments':
      ModalComponent = React.lazy(() => import('./AccomplishmentForm'));
      break;
    default:
      ModalComponent = React.lazy(() => import('./EducationForm'));
      break;
  }
  return <ModalComponent />;
};
export const getModalFooter = modelId => {
  switch (modelId) {
    default:
      break;
  }
};
export const getModalHeader = modelId => {
  switch (modelId) {
    default:
      return <div>I AM HEADER</div>;
  }
};
