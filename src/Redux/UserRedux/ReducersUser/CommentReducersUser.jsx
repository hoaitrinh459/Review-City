import {CREATE_COMMENT_REQUEST,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_ERROR,
  ALL_COMMENT_OF_REVIEW_REQUEST, 
  ALL_COMMENT_OF_REVIEW_SUCCESS, 
  ALL_COMMENT_OF_REVIEW_ERROR,} from '../ConstantsUser/CommentUser';

const initialState = {
requesting: false,
success: false,
message: null,
data: null
}

export function CommentOfReviewReducers(state = initialState, payload) {
  switch (payload.type) {
    case ALL_COMMENT_OF_REVIEW_REQUEST:
        return {
            ...state,
            requesting: true
        };
    case ALL_COMMENT_OF_REVIEW_SUCCESS:
        return {
            ...state,
            requesting: false,
            success: true,
            data: payload.data
        };
    case ALL_COMMENT_OF_REVIEW_ERROR:
        return {
            ...state,
            requesting: false,
            message: payload.message
        };
  
    default:
        return state;
  }
  }

  export function PostCommentReducers(state = initialState, payload) {
    switch (payload.type) {
      case CREATE_COMMENT_REQUEST:
          return {
              ...state,
              requesting: true
          };
      case CREATE_COMMENT_SUCCESS:
          return {
              ...state,
              requesting: false,
              success: true,
              data: payload.data
          };
      case CREATE_COMMENT_ERROR:
          return {
              ...state,
              requesting: false,
              message: payload.message
          };
    
      default:
          return state;
    }
    }