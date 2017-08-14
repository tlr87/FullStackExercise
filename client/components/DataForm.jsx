import React from 'react'
import {connect} from 'react-redux'
import {getGreetings} from '../actions/greetings'
import {postData} from '../actions/greetings'


class DataForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  AddToData(evt) {
    var data = this.state.data
    data[evt.target.name] = evt.target.value
    this.setState({data: data})
  }

  submitData(evt) {
    evt.preventDefault()
    console.log({evt})
    console.log(this.state.data);
    this.props.dispatch(postData(this.state.data))
    //dispatch your data to some kind of postData request
  }
  render() {
    return (
      <form onSubmit={this.submitData.bind(this)}>
        <input name="text" placeholder="text" type="text" onChange={(evt) => this.AddToData(evt)}/>
        <input type="submit"/>
      </form>
    )
  }

}
export default connect()(DataForm)
