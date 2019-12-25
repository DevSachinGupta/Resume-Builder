
const EditorReducer = (state = "", action) => {
    console.log("calling state")
    switch(action.type) {
      case 'UPDATED_EDITOR':
        state=action.editor; 
        console.log(state,"insude state") 
        return action.editor;
      default:
        return state;
    }
  }
  
export default EditorReducer;