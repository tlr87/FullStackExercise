import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'
import DataForm from './DataForm'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <Greetings />
        <DataForm/> Hello!
    </div>
  </Router>
)

export default App
