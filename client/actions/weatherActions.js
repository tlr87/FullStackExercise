var request = require('superagent')

export function weather() {
  request
    .get('/v1/weather')
    .query({q: 'Wellington,nz', appid: "b1b15e88fa797225412429c1c50c122a1"})
    .end((err, res) => {
      console.log(res.body)
    })
}



// Get
export const receiveWeather = (weather) => {
  return {
    type:  'WEATHER_DATA',
    weather
  }
}

export function weatherData(){
  return(dispatch) => {
    request
    .get('/v1/weather')
    .query({q: 'Wellington,nz', appid: "b1b15e88fa797225412429c1c50c122a1"})
    .end((err, res)=> {
      console.log(res.body)
      if (err){
        console.log(err.message)
        return
      }
      dispatch(receiveWeather(res.body))
    })
  }
}
