// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
// import { makeUpdateEditorState } from 'containers/Builder/selectors';

export const updateCanvas = (
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
        if (mapping.componetType === 'attribute') {
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
  if (objt.attributes.id) {
    const id = objt.attributes.id.replace(`${sectionId}_0_`, '');
    const mapping = componentMap[id];
    if (mapping) {
      if (
        mapping.RemoveHiddenClass &&
        mapping.RemoveHiddenClass[index] === true
      ) {
        objt.classes = objt.classes.filter(value => value.name !== 'd-none');
      }
      if (mapping.componetType === 'attribute') {
        mapping.key.forEach((keyItem, idx) => {
          if (keyItem === 'class') {
            objt.classes.push(data[mapping.valueMap[idx]]);
          } else if (keyItem === 'style') {
            objt.style[mapping.styleMap[idx]] = data[mapping.valueMap[idx]];
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
  if (objt.components.length !== 0) {
    objt.components.forEach(child =>
      setLeafAttribute(child, sectionId, index, data, componentMap),
    );
  }
}

export const updateRseumeJSONState = (attr, content, resumeJSONFieldList) => {
  console.log("inside updateResume")
  if (attr.id) {
    const sectionId = attr.id.split('_')[0];
    const fieldId = attr.id.split('_').slice(-1)[0];
    console.log('add updateResume ', sectionId, fieldId, content);
  }
};

// async function getJsonFromData(sectionId, payload, editor) {
//   const id = `${sectionId}_0`;
//   const component = editor.DomComponents.componentsById[id];
//   const newComponent = JSON.stringify(component);
//   const parentComponent = editor.DomComponents.componentsById[id].parent();

//   const pcomponent = JSON.parse(JSON.stringify(parentComponent));
//   const tempComponent = [];
//   payload.forEach((data, index) => {
//     const tempComp = JSON.parse(newComponent);
//     setLeaf(tempComp, sectionId, index, payload[index]);
//     tempComp.attributes.id = `${sectionId}_${index}`;
//     tempComponent.push(tempComp);
//   });
//   pcomponent.components = tempComponent;
//   parentComponent.replaceWith(pcomponent);
// }
// function setLeaf(objt, sectionId, index, data) {
//   if (objt.components.length === 0) {
//     if (objt.attributes.id) {
//       const id = objt.attributes.id.replace(`${sectionId}_0_`, '');
//       objt.content = data[id];
//       objt.attributes.id = objt.attributes.id.replace('0', index);
//     }
//   } else {
//     objt.components.forEach(child => setLeaf(child, sectionId, index, data));
//   }
// }

// export default updateCanvas;
