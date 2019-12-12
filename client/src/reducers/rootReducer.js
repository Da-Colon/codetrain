import { combineReducers } from 'redux'

import frozenReducer from './frozenReducer';
import userReducer from './loginReducer'

const rootReducer = combineReducers({
  frozen: frozenReducer,
  user: userReducer,
})

export default rootReducer;