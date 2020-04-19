import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_DEFAULT_THEME,
  GET_THEME_CONTENT,
  UPDATE_CANVAS,
  UPDATE_RESUME_EVENT_HANDLER,
} from './constants';

export default function* builderSaga() {
  yield all([
    takeLatest(GET_DEFAULT_THEME, getThemeDetails),
    takeLatest(GET_THEME_CONTENT, getThemeContent),
    takeLatest(UPDATE_CANVAS, updateCanvas),
    takeLatest(UPDATE_RESUME_EVENT_HANDLER, updateResumeEventHandler),
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

export function* updateResumeEventHandler(params) {
  try {
    const storeData = yield select(state => state.builder.resume_json_state);
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
        if (mapping.componentType === 'attribute') {
          mapping.key.forEach((keyItem, idx) => {
            if (keyItem === 'class') {
              parseComponent.classes.push(payload[mapping.valueMap[idx]]);
            } else if (keyItem === 'style') {
              parseComponent.style[mapping.styleMap[idx]] =
                payload[mapping.valueMap[idx]];
            } else {
              parseComponent.attributes[keyItem] =
                payload[mapping.valueMap[idx]];
            }
          });
        } else {
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
      setLeafAttribute(temp, sectionId, index, payload[index], componentMap);
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

function setLeafAttribute(objt, sectionId, index, data, componentMap) {
  if (objt.attributes && objt.attributes.id) {
    const id = objt.attributes.id.replace(`${sectionId}_0_`, '');
    const mapping = componentMap[id];
    if (mapping) {
      if (
        mapping.RemoveHiddenClass &&
        mapping.RemoveHiddenClass[index] === true
      ) {
        objt.classes = objt.classes.filter(value => value.name !== 'd-none');
      }
      if (mapping.componentType === 'attribute') {
        mapping.key.forEach((keyItem, idx) => {
          if (keyItem === 'class') {
            objt.classes.push(data[mapping.valueMap[idx]]);
          } else if (keyItem === 'style') {
            // objt.style[mapping.styleMap[idx]] = data[mapping.valueMap[idx]];
          } else {
            objt.attributes[keyItem] = data[mapping.valueMap[idx]];
          }
        });
      } else {
        objt.content = data[mapping.valueMap];
      }
      objt.attributes.id = objt.attributes.id.replace('0', index);
    }
  }
  if (objt.components && objt.components.length !== 0) {
    objt.components.forEach(child =>
      setLeafAttribute(child, sectionId, index, data, componentMap),
    );
  }
}
