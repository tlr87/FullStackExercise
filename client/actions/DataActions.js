import request from 'superagent'


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
      .post('/api/greetings')
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
