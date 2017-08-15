function dataReducers (state =[], action){
  console.log(action);
  switch (action.type) {
    case 'ADD_DATA':
      return [...state, action.data]
    case 'RECEIVE_DATA':
      return [...action.data]
      default:
      return state

  }
}

export default dataReducers
