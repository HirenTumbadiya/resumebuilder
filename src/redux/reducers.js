// src/redux/reducers.js

import { combineReducers } from 'redux';
import resumeReducer from './reducers/resumeReducers';

const rootReducer = combineReducers({
  resume: resumeReducer,
});

export default rootReducer;
