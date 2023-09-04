import {combineReducers} from "redux";
import stepReducer from './reducer';

const rootReducer = combineReducers({
    counterStep: stepReducer,
});

export default rootReducer;