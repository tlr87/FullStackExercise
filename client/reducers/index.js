import {combineReducers} from 'redux'

import greetings from './greetings'
import dataReducers from './dataReducers'
import dataToEdit from './dataToEdit'
import showForm from './showForm'

export default combineReducers({
  greetings,
  data:dataReducers,
  dataToEdit,
  showForm
})
