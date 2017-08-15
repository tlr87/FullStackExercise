import request from 'superagent'

// Get

export const receiveData = (data) => {
  return {
    type:  'GET_DATA',
    data
  }
}

export function getData(){
  return(dispatch) => {
    request
    .get('/v1/api')
    .end((err, res)=> {
      if (err){
        console.log(err.message)
        return
      }
      dispatch(receiveData(res.body))
    })
  }
}

// Post

export const addData = (data) => {
console.log('addData', data);
  return{
    type: "ADD_DATA",
    data
  }
}


export function postData(data){
  console.log("postData", data);
 return(dispatch) => {
   request
      .post('/v1/api')
      .send(data)
      .end((err, res)=>{
        if(err){
          console.log(err.message)
          return
        }
        dispatch(addData(data))
        // or it could be = dispatch(addData(res.body))
      })
    }
}
