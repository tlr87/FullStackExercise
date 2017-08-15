import React from 'react'
import {connect} from 'react-redux'

import {postData} from '../actions/DataActions'


const renderTite = (key) => (
  <h1 key={key}>DataTable</h1>
)





class ApiDataReader extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
  render(){
    return(
      <div>
        <ul>
          {this.state.data.map((item,key)=>{
            return <li key={key}>item</li>
          })}
        </ul>
      </div>
    )
  }
}
