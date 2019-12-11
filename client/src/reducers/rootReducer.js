import { combineReducers } from 'redux'

import frozenReducer from './frozenReducer';

const rootReducer = combineReducers({
  frozen: frozenReducer,
})

export default rootReducer;