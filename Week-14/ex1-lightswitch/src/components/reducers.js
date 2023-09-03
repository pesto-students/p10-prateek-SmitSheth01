import { combineReducers } from "redux";
import lightSwitchReducer from './reducer';

const rootReducer = combineReducers({
   lightSwitch: lightSwitchReducer,
});

export default rootReducer;