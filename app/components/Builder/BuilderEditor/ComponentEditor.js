// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
// import { makeUpdateEditorState } from 'containers/Builder/selectors';

function updateCanvas(sectionId, operation, payload, editorState) {
  console.log('Inside Canvas');
  console.log(
    'Section :- ',
    sectionId,
    'Operation :-',
    operation,
    'Value :-',
    payload,
    'E state ;- ',
    editorState,
  );
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
  const pcomponent = editor.DomComponents.componentsById[id];
  // const index = 1;
  // parentComponent.components(' ');
  console.log('pcomponent', parentComponent.components);
  await parentComponent.components().forEach(i => {
    i.remove();
  });
  console.log('pcomponent', parentComponent);
  // console.log("parent component : -", JSON.stringify(parentComponent, null, 2));
  // editor.DomComponents.componentsById[id].remove();
  // parentComponent.components("");
  payload.forEach((data, index) => {
    const tempComp = JSON.parse(newComponent);
    setLeaf(tempComp, sectionId, index, payload[index]);
    tempComp.attributes.id = `${sectionId}_${index}`;
    parentComponent.append(tempComp);
  });
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
// const mapStateToProps = () =>
//   createStructuredSelector({
//     editorState: makeUpdateEditorState(),
//   });

// const mapDispatchToProps = null;
// const withConnect = connect(mapStateToProps, null);
// export default compose(withConnect)(updateCanvas);
export default updateCanvas;
