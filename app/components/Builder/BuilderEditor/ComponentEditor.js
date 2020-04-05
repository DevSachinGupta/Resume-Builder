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

  console.log((JSON.stringify(parentComponent)));
  const pcomponent = JSON.parse(JSON.stringify(parentComponent));
  // const index = 1;
  // parentComponent.components(' ');
  // console.log('pcomponent', JSON.stringify(pcomponent.components.length,null,2));
  let k=0;
  // pcomponent.components = [];
  // await pcomponent.components.forEach(i => {
  //   console.log(k)
  //   k=k+1;
  //   console.log('pcomponent', JSON.stringify(i,null,2));
  //   delete pcomponent.components[k];
  // });
  // parentComponent.replaceWith(pcomponent);
  // console.log('pcomponent', JSON.stringify(parentComponent,null,2));
  // console.log("parent component : -", JSON.stringify(parentComponent, null, 2));
  // editor.DomComponents.componentsById[id].remove();
  // parentComponent.components("");
  let tempComponent = [];
  payload.forEach((data, index) => {
    const tempComp = JSON.parse(newComponent);
    setLeaf(tempComp, sectionId, index, payload[index]);
    tempComp.attributes.id = `${sectionId}_${index}`;
    console.log("t comp:", tempComp)
    // parentComponent.append(tempComp);
    tempComponent.push(tempComp);
  });
  console.log("temp com: ", tempComponent)
  pcomponent.components = tempComponent;
  console.log("com: ", pcomponent)
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
// const mapStateToProps = () =>
//   createStructuredSelector({
//     editorState: makeUpdateEditorState(),
//   });

// const mapDispatchToProps = null;
// const withConnect = connect(mapStateToProps, null);
// export default compose(withConnect)(updateCanvas);
export default updateCanvas;
