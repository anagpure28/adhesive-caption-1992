import axios from "axios"
import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../actionTypes"

export const signUp = (formData) => (dispatch) => {
    dispatch({type: SIGNIN_REQUEST})
    axios.post("https://63987374fe03352a94d1697f.mockapi.io/signup", formData).then((res) => {
        dispatch({type: SIGNIN_SUCCESS, payload: res.data})
        console.log(res.data)
    }).catch((err) => {
        dispatch({type: SIGNIN_FAILURE})
    })
}