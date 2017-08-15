//evt is long for event aka e
import React from 'react'

export default class Add extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        Add:{}
      }
    }

  AddToObject(evt){
    var Add = this.state.Add
    Add[evt.target.name] = evt.target.value
    this.setState({Add:Add})
  }

  submitAdd(evt){
    evt.preventDefault()
    console.log({evt});
    console.log("Add form is Working the result is:", this.state.Add);
  }

  render(){
    return (
     <button onclick="ShowHide()">Click Me</button>
        <div className="edit-box">
          <form onSubmit={this.submitAdd.bind(this)}>
            <input name="text" placeholder="text" type="text" onChange={(evt) => this.AddToObject(evt)}/>
            <input name="number" placeholder="123" type="number"onChange={(evt) => this.AddToObject(evt)}/>
            <input type="submit"/>
          </form>
        </div>
        )
      }
    }
