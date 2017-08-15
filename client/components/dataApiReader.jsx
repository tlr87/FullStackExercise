import React from 'react'
import {connect} from 'react-redux'

import {postData, getData,  delData} from '../actions/DataActions'


class ApiDataReader extends React.Component{


componentDidMount(){
  this.props.dispatch(getData())
}
deleteItem(item) {
  console.log(item)
  this.props.dispatch(delData(item.id))
}

  render(){
    return(
      <div>
        <ul>
          <h1>DataTable</h1>
          {this.props.data.map((item,key)=>{
            return <li key={key}>{item.text}:{item.numbers} <a onClick={(e)=> this.deleteItem(item)}>Del</a> </li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {data: state.data}
}

export default connect(mapStateToProps)(ApiDataReader)
