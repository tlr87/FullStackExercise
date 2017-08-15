import request from 'superagent'



export const receiveGreetings = (greetings) => {

  return {
    type: 'RECEIVE_GREETINGS',
    greetings
  }
}

export function getGreetings () {
  return (dispatch) => {
    request
      .get(`/api/greetings`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveGreetings(res.body))
      })
  }
}

//some kind of postDataRequest function, that does the superagent request, it will look similar to the getGreetings function

//when you get a response from the postDataRequest function, you will want to dispatch a postData Action

//and then you will need
