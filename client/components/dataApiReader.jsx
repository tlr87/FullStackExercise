import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {postData, getData, getDataId, editData, delData} from '../actions/DataActions'

import {weather,weatherData} from '../actions/weatherActions'

import DataFormAdd from './DataFormAdd'

class ApiDataReader extends React.Component{


componentDidMount(){
  this.props.dispatch(getData())
  this.props.dispatch(weatherData())
}

deleteItem(item) {
  this.props.dispatch(delData(item.id))
}
editItem(item) {
  this.props.dispatch(editData(item))
  this.props.dispatch(getData())
}
componentWillReceiveProps(props) {
  console.log(props.weather);
}
  render(){
    return(
      <div>
        <ul>
          <h1>DataTable</h1>
          {this.props.weather &&
          <h3>Wellington Temp:{this.props.weather.main.temp}</h3>
        }

          {this.props.data.map((item,key)=>{
            return <li key={key}> <Link to={`/item/${item.id}`} >{item.text}</Link></li>
          })}
        </ul>
        <DataFormAdd/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log({state});
  return {data: state.data,weather:state.weather }

}

export default connect(mapStateToProps)(ApiDataReader)
