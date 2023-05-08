import axios from "axios"
import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../actionTypes"

export const signUp = (formData) => (dispatch) => {
    dispatch({type: SIGNIN_REQUEST})
    axios.post("https://thzv8b-8080.csb.app/signup", formData).then((res) => {
        dispatch({type: SIGNIN_SUCCESS, payload: res.data})
        console.log(res.data)
    }).catch((err) => {
        dispatch({type: SIGNIN_FAILURE})
    })
}