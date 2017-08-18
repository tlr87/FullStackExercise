import {combineReducers} from 'redux'

import dataReducers from './dataReducers'
import dataToEdit from './dataToEdit'
import weather from './weatherReducers'


export default combineReducers({
  data:dataReducers,
  dataToEdit,
  weather

})

// this is the state
