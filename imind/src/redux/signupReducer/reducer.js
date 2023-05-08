import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    signup: [],
}


export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case SIGNIN_REQUEST: 
            return {...state, isLoading: true}
        case SIGNIN_SUCCESS: 
            return {...state, isLoading: false, signup: payload}
        case SIGNIN_FAILURE: 
            return {...state, isLoading: false, isError: true}
        default: 
            return state;
    }
}