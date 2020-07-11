import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import apiClient from '../../utils/app/API';
import {
  GET_DEFAULT_THEME,
  GET_THEME_CONTENT,
  UPDATE_CANVAS,
  UPDATE_RESUME_EVENT_HANDLER,
  UPDATE_RESUME_KEY_VALUE_DB,
} from './constants';

console.log('api call', apiClient);

export default function* builderSaga() {
  yield all([
    takeLatest(GET_DEFAULT_THEME, getThemeDetails),
    takeLatest(GET_THEME_CONTENT, getThemeContent),
    takeLatest(UPDATE_CANVAS, updateCanvas),
    takeLatest(UPDATE_RESUME_EVENT_HANDLER, updateResumeEventHandler),
    takeLatest(UPDATE_RESUME_KEY_VALUE_DB, updateResumeKeyValue),
  ]);
}

function* getThemeDetails() {
  console.log('HELLO WORLD');
}

function* getThemeContent(params) {
  try {
    const response = yield call(
      axios.get,
      `https://resumebuilder.s3.ap-south-1.amazonaws.com/templates/template_1/index-${
        params.themeId
      }.html`,
    );
    yield put({ type: `${GET_THEME_CONTENT}_SUCCESS`, data: response.data });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

// export const updateResumeKey = (resumeKey, data) => {
//   console.log('calling api');
//   return apiClient
//     .post('builder/updateResumeJSON', {
//       resumeKey,
//       data,
//     })
//     .then(response => response)
//     .catch(error => {
//       console.log('updateResumeKey error: ', error);
//     });
// };

function* updateResumeKeyValue(params) {
  try {
    const response = yield call(apiClient.post, 'builder/updateResumeJSON', {
      resumeKey: params.key,
      data: params.data,
    });
    console.log('update resume: ', response);
    if (response.status === 200) {
      params.addToast('Save successfully!', { appearance: 'info' });
      console.log('succesfully submit your request.', response);
    } else {
      params.addToast('Issue while saving! Please try later.', {
        appearance: 'error',
      });
      console.log('Something went wrong while submitting: ', response);
    }
  } catch (e) {
    params.addToast('Issue while saving! Please try later.', {
      appearance: 'error',
    });
    console.log(e);
  }
}

export function* updateResumeEventHandler(params) {
  console.log('inside updateResumeEventHandler: ');
  try {
    const storeData = yield select(state => state.builder.resume_json_state);
    if (params.sectionId === 'personal') {
      if (
        storeData &&
        storeData[`${params.sectionId}`] &&
        storeData[`${params.sectionId}`].history[`${params.fieldId}`]
      ) {
        storeData[`${params.sectionId}`].history[`${params.fieldId}`] =
          params.content;
        yield put({ type: `${UPDATE_CANVAS}_COUNT` });
        const updateCanvasCount = yield select(
          state => state.builder.updateCanvasCount,
        );
        console.log('updateCanvasCount values: ', updateCanvasCount);
        if (updateCanvasCount === 0) {
          const response = yield call(
            apiClient.post,
            'builder/updateResumeJSON',
            {
              resumeKey: 'all',
              data: storeData,
            },
          );
          if (response.status === 200) {
            params.addToast('Save successfully!', { appearance: 'info' });
            console.log('succesfully submit your request.', response);
          } else {
            params.addToast('Issue while saving! Please try later.', {
              appearance: 'error',
            });
            console.log('Something went wrong while submitting: ', response);
          }
        }
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (
        storeData &&
        storeData[`${params.sectionId}`] &&
        storeData[`${params.sectionId}`].history[`${params.fieldIndex}`] &&
        storeData[`${params.sectionId}`].history[`${params.fieldIndex}`][
          `${params.fieldId}`
        ]
      ) {
        storeData[`${params.sectionId}`].history[`${params.fieldIndex}`][
          `${params.fieldId}`
        ] = params.content;
        yield put({ type: `${UPDATE_CANVAS}_COUNT` });
        const updateCanvasCount = yield select(
          state => state.builder.updateCanvasCount,
        );
        console.log('updateCanvasCount values: ', updateCanvasCount);
        if (updateCanvasCount === 0) {
          const response = yield call(
            apiClient.post,
            'builder/updateResumeJSON',
            {
              resumeKey: 'all',
              data: storeData,
            },
          );
          if (response.status === 200) {
            params.addToast('Save successfully!', { appearance: 'info' });
            console.log('succesfully submit your request.', response);
          } else {
            params.addToast('Issue while saving! Please try later.', {
              appearance: 'error',
            });
            console.log('Something went wrong while submitting: ', response);
          }
        }
      }
    }
  } catch (error) {
    console.log('error from updateResumeEventHandler saga: ', error);
  }
}

export function* updateCanvas(params) {
  try {
    const editorState = yield select(state => state.builder.editor_state);
    yield call(
      updateCanvasFunction,
      params.sectionId,
      params.operation,
      params.payload,
      editorState,
      params.componentMap,
    );
  } catch (error) {
    console.log('error from updateCanvas saga: ', error);
  }
}

export const updateCanvasFunction = (
  sectionId,
  operation,
  payload,
  editorState,
  componentMap,
) => {
  switch (sectionId) {
    case 'personal':
      getJsonFromDataClassBased(sectionId, payload, editorState, componentMap);
      break;
    default:
      getJsonFromDataIdBased(sectionId, payload, editorState, componentMap);
  }
};

async function getJsonFromDataClassBased(
  sectionId,
  payload,
  editor,
  componentMap,
) {
  Object.keys(payload).forEach(item => {
    const filterComponent = editor.getWrapper().find(`.${sectionId}_${item}`);
    filterComponent.forEach(component => {
      const parseComponent = JSON.parse(JSON.stringify(component));
      const mapping = componentMap[item];
      if (mapping) {
        if (mapping.addHiddenClass && mapping.addHiddenClass === true) {
          // objt.classes = objt.classes.filter(value => value.name !== 'd-none');
          const filterAddHidden = editor.getWrapper().find(`.${item}Section`);
          filterAddHidden.forEach(componentHidden => {
            componentHidden.addClass('d-none');
          });
        } else {
          const filterAddHidden = editor.getWrapper().find(`.${item}Section`);
          filterAddHidden.forEach(componentHidden => {
            componentHidden.removeClass('d-none');
          });
        }
        if (mapping.componentType === 'attribute') {
          mapping.key.forEach((keyItem, idx) => {
            if (keyItem === 'class') {
              parseComponent.classes.push(payload[mapping.valueMap[idx]]);
            } else if (keyItem === 'style') {
              // parseComponent.style[mapping.styleMap[idx]] =
              //   payload[mapping.valueMap[idx]];
              const tempStyle = JSON.parse(JSON.stringify(editor.getStyle()));
              const styleProp = {};
              styleProp[mapping.styleMap[idx]] = payload[mapping.valueMap[idx]];
              tempStyle.push({
                selectors: [
                  {
                    name: `${sectionId}_${item}`,
                    label: `${sectionId}_${item}`,
                    type: 1,
                    active: true,
                    private: false,
                    protected: false,
                  },
                ],
                style: styleProp,
              });
              // console.log("styleProp:", styleProp, tempStyle);
              editor.setStyle(tempStyle);
            } else {
              parseComponent.attributes[keyItem] =
                payload[mapping.valueMap[idx]];
            }
          });
        } else {
          if (parseComponent.components) {
            delete parseComponent.components;
          }
          parseComponent.content = payload[mapping.valueMap];
        }
      }
      component.replaceWith(parseComponent);
    });
  });
}

async function getJsonFromDataIdBased(
  sectionId,
  payload,
  editor,
  componentMap,
) {
  const id = `${sectionId}_0`;
  const component = editor.DomComponents.componentsById[id];
  if (payload.length > 0) {
    editor.DomComponents.componentsById[`${sectionId}Section`].removeClass(
      'd-none',
    );
    // console.log("component:", JSON.parse(JSON.stringify(component)) )
    const parentComponent = editor.DomComponents.componentsById[id].parent();
    const parseParentComponent = JSON.parse(JSON.stringify(parentComponent));
    const tempComponent = [];

    payload.forEach((data, index) => {
      const temp = JSON.parse(JSON.stringify(component));
      setLeafAttribute(
        temp,
        sectionId,
        index,
        payload[index],
        componentMap,
        editor,
      );
      temp.attributes.id = `${sectionId}_${index}`;
      tempComponent.push(temp);
    });
    parseParentComponent.components = tempComponent;
    parentComponent.replaceWith(parseParentComponent);
  } else {
    editor.DomComponents.componentsById[`${sectionId}Section`].addClass(
      'd-none',
    );
  }
}

function setLeafAttribute(objt, sectionId, index, data, componentMap, editor) {
  if (objt.attributes && objt.attributes.id) {
    const id = objt.attributes.id.replace(`${sectionId}_0_`, '');
    const mapping = componentMap[id];
    if (mapping) {
      if (mapping.addHiddenClass && mapping.addHiddenClass[index] === true) {
        // objt.classes = objt.classes.filter(value => value.name !== 'd-none');
        objt.classes.push('d-none');
        console.log('inside add d-none');
      } else {
        objt.classes = objt.classes.filter(value => value.name !== 'd-none');
        console.log('inside remov d-none');
      }
      objt.attributes.id = objt.attributes.id.replace('0', index);
      if (mapping.componentType === 'attribute') {
        mapping.key.forEach((keyItem, idx) => {
          if (keyItem === 'class') {
            objt.classes.push(data[mapping.valueMap[idx]]);
          } else if (keyItem === 'style') {
            objt.classes.push(objt.attributes.id);
            const tempStyle = JSON.parse(JSON.stringify(editor.getStyle()));
            const styleProp = {};
            styleProp[mapping.styleMap[idx]] = data[mapping.valueMap[idx]];
            tempStyle.push({
              selectors: [
                {
                  name: objt.attributes.id,
                  label: objt.attributes.id,
                  type: 1,
                  active: true,
                  private: false,
                  protected: false,
                },
              ],
              style: styleProp,
            });
            // console.log("styleProp:", styleProp, tempStyle);
            editor.setStyle(tempStyle);
          } else {
            objt.attributes[keyItem] = data[mapping.valueMap[idx]];
          }
        });
      } else {
        if (objt.components) {
          delete objt.components;
        }
        objt.content = data[mapping.valueMap];
      }
    }
  }
  if (objt.components && objt.components.length !== 0) {
    objt.components.forEach(child =>
      setLeafAttribute(child, sectionId, index, data, componentMap, editor),
    );
  }
}
