export default function (state=false, action) {
  switch(action.type) {
    case 'EDIT_DATA':
      return true

    case 'HIDE_FORM':
      return false
      
    default:
      return state
  }
}
