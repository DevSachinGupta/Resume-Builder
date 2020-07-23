import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import apiClient from '../../utils/app/API';
import {
  UPDATE_CANVAS,
  UPDATE_SESSION_ARRAY,
  UPDATE_RESUME_EVENT_HANDLER,
  UPDATE_RESUME_KEY_VALUE_DB,
  HANDLE_PROJECT_CLICK,
} from './constants';
import { TOGGLE_MODAL, UPDATE_IN_USERDATA } from '../App/constants';
import history from '../App/history';
import * as dataStructure from '../../components/MyContentForms/dataLoadStructure';

// console.log('api call', apiClient);

export default function* builderSaga() {
  yield all([
    takeLatest(UPDATE_CANVAS, updateCanvas),
    takeLatest(`${UPDATE_CANVAS}_ON_FIRST_LOAD`, updateCanvasOnFirstLoad),
    takeLatest(`${UPDATE_CANVAS}_SWITCH_TEMPLATE`, handleSwitchTemplate),
    takeLatest(UPDATE_RESUME_EVENT_HANDLER, updateResumeEventHandler),
    takeLatest(UPDATE_RESUME_KEY_VALUE_DB, updateResumeKeyValue),
    takeLatest(HANDLE_PROJECT_CLICK, handleMyProjectClick),
  ]);
}

function* updateResumeKeyValue(params) {
  console.log('update resume update: ', params.data);
  try {
    const response = yield call(apiClient.post, 'builder/updateResumeJSON', {
      resumeKey: params.key,
      data: params.data,
    });

    if (response.status === 200) {
      params.addToast('Save successfully!', { appearance: 'info' });
      // yield put({
      //   type: `${UPDATE_IN_USERDATA}_RESUME_JSON`,
      //   sectionKey: params.key,
      //   resumeJsonState: { history: params.data },
      // });
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

function* handleSwitchTemplate(params) {
  console.log('called handleswitchTemplate saga', params);
  try {
    const projectId = yield select(state => state.builder.projectId);
    // TODO : Intead of insert, delete selete session in local and update projectMeta data in DB
    const response = yield call(
      apiClient.post,
      'builder/handleSwitchTemplate',
      {
        projectId,
        TemplateId: params.data.id,
        TemplateURL: params.data.url,
      },
    );

    if (response.status === 200) {
      // params.addToast('Save successfully!', { appearance: 'info' });
      yield put({
        type: `${UPDATE_SESSION_ARRAY}_DELETE`,
        projectId,
      });
      console.log('succesfully submit your request.', response);
      yield put({
        type: TOGGLE_MODAL,
      });
      history.go(0);
      // window.location.reload();
      // history.push(`/builder/${projectId}`);
    } else {
      params.addToast('Issue while saving! Please try later.', {
        appearance: 'error',
      });
      console.log('Something went wrong while submitting: ', response);
    }
    // yield put({
    //   type: `${UPDATE_SESSION_ARRAY}_INSERT`,
    //   projectId,
    //   projectSession: {
    //     templateCSS: `{}`,
    //     templateHTML: '<h1>hello world</h1>',
    //     templateJS: {},
    //     CSSLink: `https://resumebuilder.s3.ap-south-1.amazonaws.com/css/style_002.css`,
    //     // templateCSS: params.templateCSS,
    //     // templateHTML: params.templateHTML,
    //     // templateJS: {},
    //     // CSSLink: params.CSSLink,
    //     autoLoadFlag: true,
    //   },
    // });
    // history.push(`/builder/${projectId}`);
    // yield put({
    //   type: TOGGLE_MODAL,
    // });
  } catch (error) {
    console.log('error handleswitchTemplate:', error);
  }
}

function* handleMyProjectClick(params) {
  console.log('called handleMyProjectClick');
  // TODO: save builder session and open projectpage using history
  try {
    const editorState = yield select(state => state.builder.editorState);
    yield put({
      type: `${UPDATE_SESSION_ARRAY}_INSERT`,
      projectId: params.projectId,
      projectSession: {
        templateCSS: editorState.getCss(),
        templateHTML: editorState.getHtml(),
        templateJS: '{}',
        autoLoadFlag: false,
      },
    });
    history.push('/dashboard');
  } catch (error) {
    console.log('error handleMyProjectClick:', error);
  }
}

function* updateCanvasOnFirstLoad(params) {
  console.log('handling updateCanvasOnFirstLoad');
  let updateAnyFlag = false;
  try {
    // const storeData = yield select(state => state.builder.resume_json_state);
    const storeData = yield select(
      state => state.global.userData.resumeDataStore,
    );
    console.log('storeData State: ', storeData);
    // Personal
    if (storeData.personal.history.length > 0) {
      const formatObject = dataStructure.formatValuesPersonal(
        JSON.parse(JSON.stringify(storeData.personal.history)),
        dataStructure.componentMapPersonal,
      );
      const updatedPer = formatObject.tempValues;
      yield put({
        type: UPDATE_CANVAS,
        sectionId: 'personal',
        operation: 'ADD',
        payload: updatedPer,
        componentMap: formatObject.componentMap,
      });
      updateAnyFlag = true;
    } else {
      console.log('leng < 0 personal');
    }

    // Education
    if (storeData.education.history.length > 0) {
      const updatedEdu = dataStructure.formatValuesEducation(
        JSON.parse(JSON.stringify(storeData.education.history)),
      );
      yield put({
        type: UPDATE_CANVAS,
        sectionId: 'education',
        operation: 'ADD',
        payload: updatedEdu,
        componentMap: dataStructure.componentMapEducation,
      });
      updateAnyFlag = true;
    } else {
      console.log('leng < 0 education');
    }

    // TODO: Dispatch to sessionArray and update AutoloadData Flag
    if (updateAnyFlag === true) {
      const editorState = yield select(state => state.builder.editorState);
      yield put({
        type: `${UPDATE_SESSION_ARRAY}_INSERT`,
        projectId: params.projectId,
        projectSession: {
          templateCSS: editorState.getCss(),
          templateHTML: editorState.getHtml(),
          templateJS: {},
          autoLoadFlag: false,
        },
      });
    }
  } catch (e) {
    // params.addToast('Issue while saving! Please try later.', {
    //   appearance: 'error',
    // });
    console.log(e);
  }
}

export function* updateResumeEventHandler(params) {
  try {
    const storeData = yield select(
      state => state.global.userData.resumeDataStore,
    );
    if (params.sectionId === 'personal') {
      if (
        storeData &&
        storeData[`${params.sectionId}`] &&
        storeData[`${params.sectionId}`].history[`${params.fieldId}`]
      ) {
        storeData[`${params.sectionId}`].history[`${params.fieldId}`] =
          params.content;
        // TODO: put content on resumeJson in userdata !important
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
            // TODO: put resume Json in store and also save session
            const editorState = yield select(
              state => state.builder.editorState,
            );
            yield put({
              type: `${UPDATE_SESSION_ARRAY}_INSERT`,
              projectId: params.projectId,
              projectSession: {
                templateCSS: editorState.getCss(),
                templateHTML: editorState.getHtml(),
                templateJS: {},
                autoLoadFlag: false,
              },
            });
            yield put({
              type: `${UPDATE_IN_USERDATA}_RESUME_JSON_ALL`,
              resumeDataStoreAll: storeData,
            });
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
        console.log('updateCanvasCouunt values: ', updateCanvasCount);
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
            // TODO: put resume Json in store and also save session
            const editorState = yield select(
              state => state.builder.editorState,
            );
            yield put({
              type: `${UPDATE_SESSION_ARRAY}_INSERT`,
              projectId: params.projectId,
              projectSession: {
                templateCSS: editorState.getCss(),
                templateHTML: editorState.getHtml(),
                templateJS: {},
                autoLoadFlag: false,
              },
            });
            yield put({
              type: `${UPDATE_IN_USERDATA}_RESUME_JSON_ALL`,
              resumeDataStoreAll: storeData,
            });
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
    const editorState = yield select(state => state.builder.editorState);
    // const storeDataWhole = yield select(state => state);
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
    console.log(
      'component error:',
      editor.DomComponents.componentsById[id],
      id,
    );
    editor.DomComponents.componentsById[`${sectionId}Section`].removeClass(
      'd-none',
    );
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
