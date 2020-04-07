// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
// import { makeUpdateEditorState } from 'containers/Builder/selectors';

function updateCanvas(
  sectionId,
  operation,
  payload,
  editorState,
  componentMap,
) {
  console.log('Inside Canvas');
  switch (operation) {
    case 'ADD':
      // getJsonFromData(sectionId, payload, editorState);
      // getJsonFromDataClassBased(sectionId, payload, editorState);
      getJsonFromDataClassBasedAttribute(
        sectionId,
        payload,
        editorState,
        componentMap,
      );
      return '';
    default:
      return null;
  }
}

async function getJsonFromDataClassBased(sectionId, payload, editor) {
  Object.keys(payload).forEach(item => {
    const filterComponent = editor.getWrapper().find(`.personal_${item}`);
    filterComponent.forEach(component => {
      const parseComponent = JSON.parse(JSON.stringify(component));
      // console.log("fetched Component",parseComponent.classes , JSON.stringify(component))
      parseComponent.content = payload[item];
      component.replaceWith(parseComponent);
    });
  });
}

// Social testing
async function getJsonFromDataClassBasedAttribute(
  sectionId,
  payload,
  editor,
  componentMap,
) {
  const id = `${sectionId}_0`;
  const component = editor.DomComponents.componentsById[id];
  console.log("fetched component:", component, id)
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
}

function setLeafAttribute(objt, sectionId, index, data, componentMap) {
  if (objt.attributes.id) {
    const id = objt.attributes.id.replace(`${sectionId}_0_`, '');
    const mapping = componentMap[id];
    if (mapping) {
      if (mapping.componetType === 'attribute') {
        mapping.key.forEach((keyItem, idx) => {
          if (keyItem === 'class') {
            objt.classes.push(data[mapping.valueMap[idx]]);
          } else {
            objt.attributes[keyItem] = data[mapping.valueMap[idx]];
          }
        });
      } else {
        // componetType === 'content'
        objt.content = data[mapping.valueMap];
        // objt.content = data[id];
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

async function getJsonFromData(sectionId, payload, editor) {
  const id = `${sectionId}_0`;
  const component = editor.DomComponents.componentsById[id];
  const newComponent = JSON.stringify(component);
  const parentComponent = editor.DomComponents.componentsById[id].parent();

  const pcomponent = JSON.parse(JSON.stringify(parentComponent));
  const tempComponent = [];
  payload.forEach((data, index) => {
    const tempComp = JSON.parse(newComponent);
    setLeaf(tempComp, sectionId, index, payload[index]);
    tempComp.attributes.id = `${sectionId}_${index}`;
    tempComponent.push(tempComp);
  });
  pcomponent.components = tempComponent;
  // console.log("com: ", pcomponent)
  parentComponent.replaceWith(pcomponent);
}
function setLeaf(objt, sectionId, index, data) {
  if (objt.components.length === 0) {
    if (objt.attributes.id) {
      const id = objt.attributes.id.replace(`${sectionId}_0_`, '');
      objt.content = data[id];
      objt.attributes.id = objt.attributes.id.replace('0', index);
    }
  } else {
    objt.components.forEach(child => setLeaf(child, sectionId, index, data));
  }
}

export default updateCanvas;
