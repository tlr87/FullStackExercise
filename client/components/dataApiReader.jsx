import React from 'react'
import {connect} from 'react-redux'

import {postData, getData, editData, delData} from '../actions/DataActions'


class ApiDataReader extends React.Component{


componentDidMount(){
  this.props.dispatch(getData())
}
deleteItem(item) {
  this.props.dispatch(delData(item.id))
}
editItem(item) {
  this.props.dispatch(editData(item))
}

  render(){
    return(
      <div>
        <ul>
          <h1>DataTable</h1>
          {this.props.data.map((item,key)=>{
            return <a key={key}>{item.text}:{item.numbers}</a>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {data: state.data}
}

export default connect(mapStateToProps)(ApiDataReader)
