import {SEARCH_CITY_REQUEST,
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_ERROR,
  SEARCH_OBJECT_REQUEST,
  SEARCH_OBJECT_SUCCESS,
  SEARCH_OBJECT_ERROR,
  SEARCH_BLOG_REQUEST,
  SEARCH_BLOG_SUCCESS,
  SEARCH_BLOG_ERROR,} from '../ConstantsUser/SearchUser';

const initialState = {
requesting: false,
success: false,
message: null,
data: null
}

export function SearchCityReducers(state = initialState, payload) {
  switch (payload.type) {
  case SEARCH_CITY_REQUEST:
      return {
          ...state,
          requesting: true
      };
  case SEARCH_CITY_SUCCESS:
      return {
          ...state,
          requesting: false,
          success: true,
          data: payload.data
      };
  case SEARCH_CITY_ERROR:
      return {
          ...state,
          requesting: false,
          message: payload.message
      };

  default:
      return state;
  }
}

export function SearchObjectReducers(state = initialState, payload) {
  switch (payload.type) {
  case SEARCH_OBJECT_REQUEST:
      return {
          ...state,
          requesting: true
      };
  case SEARCH_OBJECT_SUCCESS:
      return {
          ...state,
          requesting: false,
          success: true,
          data: payload.data
      };
  case SEARCH_OBJECT_ERROR:
      return {
          ...state,
          requesting: false,
          message: payload.message
      };

  default:
      return state;
  }
}

export function SearchBlogReducers(state = initialState, payload) {
  switch (payload.type) {
  case SEARCH_BLOG_REQUEST:
      return {
          ...state,
          requesting: true
      };
  case SEARCH_BLOG_SUCCESS:
      return {
          ...state,
          requesting: false,
          success: true,
          data: payload.data
      };
  case SEARCH_BLOG_ERROR:
      return {
          ...state,
          requesting: false,
          message: payload.message
      };

  default:
      return state;
  }
}
