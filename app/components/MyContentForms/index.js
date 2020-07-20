import React from 'react';
import { get } from 'lodash';
import axios from 'axios';
import Button from '../Button';
import { AppUtils } from '../../utils/app';

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
    case 'shareOnline':
      ModalComponent = React.lazy(() =>
        import('./SecondaryForms/ShareOnlineForm'),
      );
      break;
    case 'contactUs':
      ModalComponent = React.lazy(() =>
        import('./SecondaryForms/ContactUsForm'),
      );
      break;
    case 'myThemes':
      ModalComponent = React.lazy(() =>
        import('../Dashboard/CreateNewProject'),
      );
      break;
    case 'feedback':
      ModalComponent = React.lazy(() =>
        import('./SecondaryForms/FeedbackForm'),
      );
      break;
    case 'publish':
      ModalComponent = React.lazy(() => import('./SecondaryForms/PublishForm'));
      break;
    case 'pricing':
      ModalComponent = React.lazy(() => import('../Pricing'));
      break;
    case 'customDomain':
      ModalComponent = React.lazy(() =>
        import('../SettingPage/CustomDomainInfo'),
      );
      break;
    default:
      ModalComponent = React.lazy(() => import('./EducationForm'));
      break;
  }
  return <ModalComponent />;
};
export const getModalFooter = (modelId, submitHandler) => {
  switch (modelId) {
    case 'personalDetails':
      return [
        <Button onClick={submitHandler} fullWidth type="primary">
          Save Details
        </Button>,
      ];
    case 'education':
      return [
        <Button onClick={submitHandler} fullWidth type="primary">
          Save Details
        </Button>,
      ];
    default:
      return [
        <Button onClick={submitHandler} fullWidth type="primary">
          Save Details
        </Button>,
      ];
  }
};
export const getModalHeader = modelId => {
  switch (modelId) {
    default:
      return (
        <div>
          {get(AppUtils.Constants, ['MyContent', modelId, 'title'], '')}
        </div>
      );
  }
};
