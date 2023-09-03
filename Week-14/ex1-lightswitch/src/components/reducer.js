import { TOGGLE_LIGHT } from "./actionTypes";

const initialState = {
    isLightOn: false,
};

const reducer = (state = initialState, action) =>{

    switch (action.type){

        case TOGGLE_LIGHT: return{
            ...state,
            isLightOn: !state.isLightOn,
        };

        default: return state;

    }

};

export default reducer;