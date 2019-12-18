import { combineReducers } from 'redux'
import userReducer from './loginReducer'

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer;