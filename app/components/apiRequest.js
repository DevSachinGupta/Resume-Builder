import axios from 'axios';

export const handlePublish = editorState => {
  const HTMLCode = editorState.getHtml();
  const CSSCode = editorState.getCss();
  const JSCode = '';
  // const JSCode = editorState.getCss();
  axios
    .post('http://localhost:2000/builder/publishWebsite', {
      HTMLCode,
      CSSCode,
      JSCode,
    })
    .then(response => {
      console.log('publishWebsite response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('publishWebsite error: ', error);
    });
};

export const handlePreview = () => {};

export const handleSave = editorState => {
  const HTMLCode = editorState.getHtml();
  const CSSCode = editorState.getCss();
  const JSCode = '';
  // const JSCode = editorState.getCss();

  axios
    .post('http://localhost:2000/builder/saveBuilderSession', {
      HTMLCode,
      CSSCode,
      JSCode,
    })
    .then(response => {
      console.log('saveBuilderSession response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('saveBuilderSession error: ', error);
    });
};

export const handleSubmitRating = (rating, message) => {
  axios
    .post('http://localhost:2000/feedback/addRating', {
      rating,
      message,
    })
    .then(response => {
      console.log('handleSubmitRating response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('handleSubmitRating error: ', error);
    });
};

export const handleSubmitContactUs = (name, subject, message) => {
  axios
    .post('http://localhost:2000/contactUs/addContactUs', {
      name,
      subject,
      message,
    })
    .then(response => {
      console.log('handleSubmitContactUs response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('handleSubmitContactUs error: ', error);
    });
};

export const handleUpdateProfile = (profileImageUrl, firstName, lastName) => {
  axios
    .post('http://localhost:2000/setting/updateProfile', {
      profileImageUrl,
      firstName,
      lastName,
    })
    .then(response => {
      console.log('handleUpdateProfile response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('handleUpdateProfile error: ', error);
    });
};
export const handleDeleteAccountRequest = () => {
  axios
    .post('http://localhost:2000/setting/deleteAccountRequest', {})
    .then(response => {
      console.log('handleDeleteAccountRequest response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('handleDeleteAccountRequest error: ', error);
    });
};
export const handleDeleteAccount = (token, password) => {
  axios
    .post('http://localhost:2000/setting/deleteAccount', {
      token,
      password,
    })
    .then(response => {
      console.log('handleDeleteAccount response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('handleDeleteAccount error: ', error);
    });
};
export const handleTransferDomainName = () => {
  axios
    .post('http://localhost:2000/setting/transferDomainName', {})
    .then(response => {
      console.log('handleTransferDomainName response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('handleTransferDomainName error: ', error);
    });
};

export const handleUpdateNotifications = (newFetures, newsletterAndBlogs) => {
  axios
    .post('http://localhost:2000/setting/updateNotifications', {
      newFetures,
      newsletterAndBlogs,
    })
    .then(response => {
      console.log('handleUpdateNotifications response: ', response);
      if (response.status === 200) {
        return response;
      }
      return response;
    })
    .catch(error => {
      console.log('handleUpdateNotifications error: ', error);
    });
};
