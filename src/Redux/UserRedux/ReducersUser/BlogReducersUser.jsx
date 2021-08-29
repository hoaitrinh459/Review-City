import {BLOG_REQUEST,
  BLOG_SUCCESS,
  BLOG_ERROR, 
  ALL_BLOG_REQUEST, 
  ALL_BLOG_SUCCESS, 
  ALL_BLOG_ERROR, 
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS, 
  BLOG_DETAILS_ERROR,} from '../ConstantsUser/BlogUser';

const initialState = {
requesting: false,
success: false,
message: null,
data: null
}

export function BlogReducers(state = initialState, payload) {
switch (payload.type) {
case BLOG_REQUEST:
    return {
        ...state,
        requesting: true
    };
case BLOG_SUCCESS:
    return {
        ...state,
        requesting: false,
        success: true,
        data: payload.data
    };
case BLOG_ERROR:
    return {
        ...state,
        requesting: false,
        message: payload.message
    };

default:
    return state;
}
}

export function AllBlogReducers(state = initialState, payload) {
switch (payload.type) {
  case ALL_BLOG_REQUEST:
      return {
          ...state,
          requesting: true
      };
  case ALL_BLOG_SUCCESS:
      return {
          ...state,
          requesting: false,
          success: true,
          data: payload.data
      };
  case ALL_BLOG_ERROR:
      return {
          ...state,
          requesting: false,
          message: payload.message
      };

  default:
      return state;
}
}

export function BlogDetailsReducers(state = initialState, payload) {
switch (payload.type) {
  case BLOG_DETAILS_REQUEST:
      return {
          ...state,
          requesting: true
      };
  case BLOG_DETAILS_SUCCESS:
      return {
          ...state,
          requesting: false,
          success: true,
          data: payload.data
      };
  case BLOG_DETAILS_ERROR:
      return {
          ...state,
          requesting: false,
          message: payload.message
      };

  default:
      return state;
}
}
