export const loadState = keyArray => {
  let persistedState = {};
  keyArray.forEach(key => {
    let value = localStorage.getItem(key);
    try {
      value = JSON.parse(value);
      if (!(value === null)) {
        persistedState = { ...persistedState, [key]: value };
      }
      
    } catch {
      console.log('auth persist failed load: ', key, value);
    }
  });
  console.log('auth final persist state: ', persistedState);
  return persistedState;
};

export const saveState = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.log('auth persist failed save: ', key, value);
  }
};
export const clearState = (key, value) => {
  try {
    localStorage.clear();
    console.log('Clear the state successfully');
  } catch {
    console.log('failed to clear the state');
  }
};
