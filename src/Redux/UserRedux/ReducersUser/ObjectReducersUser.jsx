import {OBJECT_REQUEST,
  OBJECT_SUCCESS,
  OBJECT_ERROR, 
  ALL_OBJECT_REQUEST, 
  ALL_OBJECT_SUCCESS, 
  ALL_OBJECT_ERROR, 
  OBJECT_DETAILS_REQUEST,
  OBJECT_DETAILS_SUCCESS, 
  OBJECT_DETAILS_ERROR,
  ALL_OBJECT_OF_CITY_REQUEST, 
  ALL_OBJECT_OF_CITY_SUCCESS, 
  ALL_OBJECT_OF_CITY_ERROR,
  ALL_OBJECT_OF_USER_REQUEST, 
  ALL_OBJECT_OF_USER_SUCCESS, 
  ALL_OBJECT_OF_USER_ERROR} from '../ConstantsUser/ObjectUser';

const initialState = {
requesting: false,
success: false,
message: null,
data: null
}

export function ObjectReducers(state = initialState, payload) {
switch (payload.type) {
case OBJECT_REQUEST:
    return {
        ...state,
        requesting: true
    };
case OBJECT_SUCCESS:
    return {
        ...state,
        requesting: false,
        success: true,
        data: payload.data
    };
case OBJECT_ERROR:
    return {
        ...state,
        requesting: false,
        message: payload.message
    };

default:
    return state;
}
}

export function AllObjectReducers(state = initialState, payload) {
switch (payload.type) {
  case ALL_OBJECT_REQUEST:
      return {
          ...state,
          requesting: true
      };
  case ALL_OBJECT_SUCCESS:
      return {
          ...state,
          requesting: false,
          success: true,
          data: payload.data
      };
  case ALL_OBJECT_ERROR:
      return {
          ...state,
          requesting: false,
          message: payload.message
      };

  default:
      return state;
}
}

export function ObjectDetailsReducers(state = initialState, payload) {
switch (payload.type) {
  case OBJECT_DETAILS_REQUEST:
      return {
          ...state,
          requesting: true
      };
  case OBJECT_DETAILS_SUCCESS:
      return {
          ...state,
          requesting: false,
          success: true,
          data: payload.data
      };
  case OBJECT_DETAILS_ERROR:
      return {
          ...state,
          requesting: false,
          message: payload.message
      };

  default:
      return state;
}
}

export function ObjectOfCityReducers(state = initialState, payload) {
    switch (payload.type) {
      case ALL_OBJECT_OF_CITY_REQUEST:
          return {
              ...state,
              requesting: true
          };
      case ALL_OBJECT_OF_CITY_SUCCESS:
          return {
              ...state,
              requesting: false,
              success: true,
              data: payload.data
          };
      case ALL_OBJECT_OF_CITY_ERROR:
          return {
              ...state,
              requesting: false,
              message: payload.message
          };
    
      default:
          return state;
}
}

export function ObjectOfUserReducers(state = initialState, payload) {
    switch (payload.type) {
      case ALL_OBJECT_OF_USER_REQUEST:
          return {
              ...state,
              requesting: true
          };
      case ALL_OBJECT_OF_USER_SUCCESS:
          return {
              ...state,
              requesting: false,
              success: true,
              data: payload.data
          };
      case ALL_OBJECT_OF_USER_ERROR:
          return {
              ...state,
              requesting: false,
              message: payload.message
          };
    
      default:
          return state;
}
}
