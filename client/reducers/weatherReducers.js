function weatherReducers (state = null, action){
  switch (action.type) {
    case 'WEATHER_DATA':
    console.log(action.weather);
      return {...action.weather}
      default:
      return state
  }
}

export default weatherReducers
