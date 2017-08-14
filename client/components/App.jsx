import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'
import Add from './Add'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <Add/> Hello!
    </div>
  </Router>
)

export default App
