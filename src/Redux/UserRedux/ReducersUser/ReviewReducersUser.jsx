import {REVIEW_REQUEST,
  REVIEW_SUCCESS,
  REVIEW_ERROR, 
  ALL_REVIEW_REQUEST, 
  ALL_REVIEW_SUCCESS, 
  ALL_REVIEW_ERROR, 
  REVIEW_DETAILS_REQUEST,
  REVIEW_DETAILS_SUCCESS, 
  REVIEW_DETAILS_ERROR,
  ALL_REVIEW_OF_OBJECT_REQUEST, 
  ALL_REVIEW_OF_OBJECT_SUCCESS, 
  ALL_REVIEW_OF_OBJECT_ERROR,
  ALL_REVIEW_OF_USER_REQUEST, 
  ALL_REVIEW_OF_USER_SUCCESS, 
  ALL_REVIEW_OF_USER_ERROR,} from '../ConstantsUser/ReviewUser';

const initialState = {
requesting: false,
success: false,
message: null,
data: null
}

export function ReviewReducers(state = initialState, payload) {
switch (payload.type) {
case REVIEW_REQUEST:
    return {
        ...state,
        requesting: true
    };
case REVIEW_SUCCESS:
    return {
        ...state,
        requesting: false,
        success: true,
        data: payload.data
    };
case REVIEW_ERROR:
    return {
        ...state,
        requesting: false,
        message: payload.message
    };

default:
    return state;
}
}

export function AllReviewReducers(state = initialState, payload) {
switch (payload.type) {
  case ALL_REVIEW_REQUEST:
      return {
          ...state,
          requesting: true
      };
  case ALL_REVIEW_SUCCESS:
      return {
          ...state,
          requesting: false,
          success: true,
          data: payload.data
      };
  case ALL_REVIEW_ERROR:
      return {
          ...state,
          requesting: false,
          message: payload.message
      };

  default:
      return state;
}
}

export function ReviewDetailsReducers(state = initialState, payload) {
switch (payload.type) {
  case REVIEW_DETAILS_REQUEST:
      return {
          ...state,
          requesting: true
      };
  case REVIEW_DETAILS_SUCCESS:
      return {
          ...state,
          requesting: false,
          success: true,
          data: payload.data
      };
  case REVIEW_DETAILS_ERROR:
      return {
          ...state,
          requesting: false,
          message: payload.message
      };

  default:
      return state;
}
}

export function ReviewOfObjectReducers(state = initialState, payload) {
    switch (payload.type) {
      case ALL_REVIEW_OF_OBJECT_REQUEST:
          return {
              ...state,
              requesting: true
          };
      case ALL_REVIEW_OF_OBJECT_SUCCESS:
          return {
              ...state,
              requesting: false,
              success: true,
              data: payload.data
          };
      case ALL_REVIEW_OF_OBJECT_ERROR:
          return {
              ...state,
              requesting: false,
              message: payload.message
          };
    
      default:
          return state;
}
}

export function ReviewOfUserReducers(state = initialState, payload) {
    switch (payload.type) {
      case ALL_REVIEW_OF_USER_REQUEST:
          return {
              ...state,
              requesting: true
          };
      case ALL_REVIEW_OF_USER_SUCCESS:
          return {
              ...state,
              requesting: false,
              success: true,
              data: payload.data
          };
      case ALL_REVIEW_OF_USER_ERROR:
          return {
              ...state,
              requesting: false,
              message: payload.message
          };
    
      default:
          return state;
}
}