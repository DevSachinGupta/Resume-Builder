// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
// import { makeUpdateEditorState } from 'containers/Builder/selectors';

function updateCanvas(sectionId, operation, payload, editorState) {
  console.log('Inside Canvas');
  switch (operation) {
    case 'ADD':
      getJsonFromData(sectionId, payload, editorState);
      return '';
    default:
      return null;
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
