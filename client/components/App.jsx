import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import DataForm from './DataForm'
import DataReader from './dataApiReader'



const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Toms Simple Boilerplate!</h1>
        <DataReader/>
        <DataForm/>
    </div>
  </Router>
)

export default App
