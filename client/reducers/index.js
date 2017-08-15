import {combineReducers} from 'redux'

import greetings from './greetings'
import dataReducers from './dataReducers'


export default combineReducers({
  greetings,
  data:dataReducers
})
