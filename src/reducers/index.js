import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILED, FETCH_ADD_NEW_SMURF, FETCH_ERROR_MESSAGE } from "../actions";
export const initialState = {
    smurfs: [],
    isLoading:false,
    error: ""
}

const reducer = (state, action)=>{
    switch(action.type){
        case (FETCH_SMURF_START):
            return ({
                ...state, 
                isLoading: true
            })
        case (FETCH_SMURF_SUCCESS):
            return ({
                ...state,
                smurfs: action.payload,
                isLoading: false
            })
        case (FETCH_SMURF_FAILED):
            return ({
                ...state,
                isLoading: false,
                error: action.payload
            })
        case (FETCH_ADD_NEW_SMURF):
            return ({
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isLoading: false
            })
        case (FETCH_ERROR_MESSAGE):
            return ({
                ...state,
                isLoading: true,
                error: action.payload
            })
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState: done
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function. done
//3. Add in a reducer case to accomidate the start of a smurf fetch. done
//4. Add in a reducer case to accomidate the successful smurf api fetch. done
//5. Add in a reducer cases to accomidate the failed smurf api fetch. done
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list. done
//7. Add in a reducer case that adds in a value to the error message. done