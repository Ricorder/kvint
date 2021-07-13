import {combineReducers} from 'redux'
import callsSlice from './callsSlice'

const rootReducer = combineReducers({
  calls: callsSlice,
})

export default rootReducer
