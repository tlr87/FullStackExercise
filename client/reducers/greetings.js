function greetings (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_GREETINGS':
      return [...action.greetings]
    case 'ADD_DATA':
      return [...state, action.data] 
    default:
      return state
  }
}

export default greetings
