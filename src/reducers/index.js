import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, SMURF_ADD, ERROR } from '../actions/index';

export const initialState = {
    smurf: [{
        id: "",
        name: '',
        position: '',
        nickname: '',
        description: ''
    }],
    isLoading: false,
    error: ''

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_START):
            return ({
                ...state,
                smurf: [],
                isLoading: true,
                error: ''
            })
        case (FETCH_SUCCESS):
            return ({
                ...state,
                smurf: action.payload,
                isLoading: false,
                errors: '',
            })
        case (FETCH_FAIL):
            return ({
                ...state,
                smurf: [],
                isLoading: false,
                error: action.payload,
            })
        case (SMURF_ADD):
            return ({
                ...state,
                smurf: [...state.smurf, action.payload.data]
            })
        case (ERROR):
            return ({
                ...state,
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