import { INCREMENT, RESET } from "./actionTypes";

const initialState ={
    steps: 0,
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case 'INCREMENT' : return {
            ... state,
            steps : state.steps + 1,
        };

        case 'RESET' : return {
            ... state,
            steps : 0,
        };

        default: return state;
    }

};

export default reducer;