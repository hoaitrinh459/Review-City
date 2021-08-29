import {CHECK_LOGIN_REQUEST,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  } from '../ConstantsUser/CheckLoginUser';
const initialState = {
requesting: false,
success: false,
message: null,
data: null
}

export function CheckLoginReducers(state = initialState, payload) {
switch (payload.type) {
case CHECK_LOGIN_REQUEST:
    return {
        ...state,
        requesting: true
    };
case CHECK_LOGIN_SUCCESS:
    return {
        ...state,
        requesting: false,
        success: true,
        data: payload.data
    };
case CHECK_LOGIN_ERROR:
    return {
        ...state,
        requesting: false,
        message: payload.message
    };

default:
    return state;
}
}

export function SignupReducers(state = initialState, payload) {
    switch (payload.type) {
    case SIGNUP_REQUEST:
        return {
            ...state,
            requesting: true
        };
    case SIGNUP_SUCCESS:
        return {
            ...state,
            requesting: false,
            success: true,
            data: payload.data
        };
    case SIGNUP_ERROR:
        return {
            ...state,
            requesting: false,
            message: payload.message
        };
    
    default:
        return state;
    }
    }