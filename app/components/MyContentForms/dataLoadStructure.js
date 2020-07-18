import { formatDateValue } from '../../utils/app/textFormating';

// Personal
export const componentMapPersonal = {
  firstName: { valueMap: 'firstName', componentType: 'content' },
  lastName: { valueMap: 'lastName', componentType: 'content' },
  fullName: { valueMap: 'fullName', componentType: 'content' },
  email: { valueMap: 'email', componentType: 'content' },
  phone: {
    valueMap: 'phone',
    componentType: 'content',
    addHiddenClass: false,
  },
  dateOfBirth: { valueMap: 'dateOfBirth', componentType: 'content' },
  gender: { valueMap: 'gender', componentType: 'content' },
  address1: { valueMap: 'address1', componentType: 'content' },
  address2: { valueMap: 'address2', componentType: 'content' },
  city: { valueMap: 'city', componentType: 'content' },
  state: { valueMap: 'state', componentType: 'content' },
  country: { valueMap: 'country', componentType: 'content' },
  pincode: { valueMap: 'pincode', componentType: 'content' },
  brief: { valueMap: 'brief', componentType: 'content' },
};
export const formatValuesPersonal = (values, componentMap) => {
  const tempValues = values;
  tempValues.fullName = `${tempValues.firstName} ${tempValues.lastName}`;
  tempValues.dateOfBirth = formatDateValue(tempValues.dateOfBirth);
  if (tempValues.phone === '') {
    componentMap.phone.addHiddenClass = true;
  } else {
    componentMap.phone.addHiddenClass = false;
  }
  return { tempValues, componentMap };
};

// Education
export const componentMapEducation = {
  title: { valueMap: 'title', componentType: 'content' },
  institution: { valueMap: 'institution', componentType: 'content' },
  fieldOfStudy: { valueMap: 'fieldOfStudy', componentType: 'content' },
  state: { valueMap: 'state', componentType: 'content' },
  country: { valueMap: 'country', componentType: 'content' },
  start: { valueMap: 'start', componentType: 'content' },
  end: { valueMap: 'end', componentType: 'content' },
  summary: { valueMap: 'summary', componentType: 'content' },
};

export const formatValuesEducation = values => {
  const tempValues = values;
  tempValues.forEach((value, index) => {
    tempValues[index].start = formatDateValue(tempValues[index].start);
    if (tempValues[index].tillDate === true) {
      tempValues[index].end = 'Present';
    } else {
      tempValues[index].end = formatDateValue(tempValues[index].end);
    }
  });
  return tempValues;
};

// Employement
export const componentMapEmployement = {
  position: { valueMap: 'position', componentType: 'content' },
  employer: { valueMap: 'employer', componentType: 'content' },
  state: { valueMap: 'state', componentType: 'content' },
  country: { valueMap: 'country', componentType: 'content' },
  start: { valueMap: 'start', componentType: 'content' },
  end: { valueMap: 'end', componentType: 'content' },
  summary: { valueMap: 'summary', componentType: 'content' },
};
export const formatValuesEmployement = values => {
  const tempValues = values;
  tempValues.forEach((value, index) => {
    tempValues[index].start = formatDateValue(tempValues[index].start);
    if (tempValues[index].tillDate === true) {
      tempValues[index].end = 'Present';
    } else {
      tempValues[index].end = formatDateValue(tempValues[index].end);
    }
  });
  return tempValues;
};

// Affiliation
export const componentMapAffiliation = {
  organization: { valueMap: 'organization', componentType: 'content' },
  role: { valueMap: 'role', componentType: 'content' },
  start: { valueMap: 'start', componentType: 'content' },
  end: { valueMap: 'end', componentType: 'content' },
  summary: { valueMap: 'summary', componentType: 'content' },
};
export const formatValuesAffiliation = values => {
  const tempValues = values;
  tempValues.forEach((value, index) => {
    tempValues[index].start = formatDateValue(tempValues[index].start);
    if (tempValues[index].tillDate === true) {
      tempValues[index].end = 'Present';
    } else {
      tempValues[index].end = formatDateValue(tempValues[index].end);
    }
  });
  return tempValues;
};

// Accomplishment
export const componentMapAccomplishment = {
  title: { valueMap: 'title', componentType: 'content' },
  date: { valueMap: 'date', componentType: 'content' },
  rank: { valueMap: 'rank', componentType: 'content' },
  summary: { valueMap: 'summary', componentType: 'content' },
};
export const formatValuesAccomplishment = values => {
  const tempValues = values;
  tempValues.forEach((value, index) => {
    tempValues[index].date = formatDateValue(tempValues[index].date);
  });
  return tempValues;
};

// Hobbies
export const componentMapHobbies = {
  url: {
    key: ['href', 'title'],
    valueMap: ['value', 'value'],
    componentType: 'attribute',
  },
  icon: {
    key: ['class'],
    valueMap: ['icon_temp'],
    componentType: 'attribute',
  },
};

// Project
export const componentMapProject = {
  title: { valueMap: 'title', componentType: 'content' },
  summary: { valueMap: 'summary', componentType: 'content' },
  keywords: { valueMap: 'keywords', componentType: 'content' },
  url: {
    key: ['href'],
    valueMap: ['url'],
    componentType: 'attribute',
    addHiddenClass: [],
  },
  start: { valueMap: 'start', componentType: 'content' },
  end: { valueMap: 'end', componentType: 'content' },
  description: { valueMap: 'description', componentType: 'content' },
};
export const formatValuesProject = (values, componentMap) => {
console.log("dataload project 1: ", componentMap)
  const tempValues = values;
  tempValues.forEach((value, index) => {
    tempValues[index].start = formatDateValue(tempValues[index].start);
    if (tempValues[index].tillDate === true) {
      tempValues[index].end = 'Present';
    } else {
      tempValues[index].end = formatDateValue(tempValues[index].end);
    }
    if (tempValues[index].url === '') {
      componentMap.url.addHiddenClass.push(true);
    } else {
      componentMap.url.addHiddenClass.push(false);
    }
  });
  console.log("dataload project 2: ", componentMap)
  return { tempValues, componentMap };
};

// Publication
export const componentMapPublication = {
  title: { valueMap: 'title', componentType: 'content' },
  summary: { valueMap: 'summary', componentType: 'content' },
  date: { valueMap: 'date', componentType: 'content' },
  url: { key: ['href'], valueMap: ['url'], componentType: 'attribute' },
  description: { valueMap: 'description', componentType: 'content' },
};
export const formatValuesPublication = values => {
  const tempValues = values;
  tempValues.forEach((value, index) => {
    tempValues[index].date = formatDateValue(tempValues[index].date);
  });
  return tempValues;
};

// Skills
export const componentMapSkills = {
  value: {
    valueMap: 'value',
    componentType: 'content',
  },
  progress: {
    key: ['style'],
    valueMap: ['rangeVal'],
    styleMap: { '0': 'width' },
    componentType: 'attribute',
  },
};
export const formatValuesSkills = values => {
  const tempValues = values;
  tempValues.forEach((value, index) => {
    tempValues[index].rangeVal = `${value.rangeVal * 10}%`;
  });
  return tempValues;
};

// Social
export const componentMapSocial = {
  url: { key: ['href'], valueMap: ['url'], componentType: 'attribute' },
  icon: {
    key: ['class'],
    valueMap: ['icon_temp'],
    componentType: 'attribute',
  },
};
export const formatValuesSocial = values => {
  let tempValues = values;
  tempValues = tempValues.filter(data => data.url !== '');
  return tempValues;
};
