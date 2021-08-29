import {CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  ALL_COMMENT_OF_REVIEW_REQUEST, 
  ALL_COMMENT_OF_REVIEW_SUCCESS, 
  ALL_COMMENT_OF_REVIEW_ERROR,} from '../ConstantsUser/CommentUser';
import CommentServicesUser from "../../../Api/UserApi/CommentServicesUser";

export const loadCommentOfReview = (idReview) => async dispatch => {
  try {
    dispatch({ type: ALL_COMMENT_OF_REVIEW_REQUEST });
    const response = await CommentServicesUser.getCommentDetails(idReview);
    const responseBody = response.data;
    dispatch({
      type: ALL_COMMENT_OF_REVIEW_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: ALL_COMMENT_OF_REVIEW_ERROR,
      message: error
    });
  }
}

export const deleteStateCreateComment = (comment) => async dispatch => {
  try {
    dispatch({ type: CREATE_COMMENT_REQUEST });
    dispatch({
      type: CREATE_COMMENT_SUCCESS,
      data: null
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: CREATE_COMMENT_ERROR,
      message: error
    });
  }
}

export const postComment = (comment) => async dispatch => {
  try {
      dispatch({ type: CREATE_COMMENT_REQUEST });
      const response = await CommentServicesUser.postComment(comment);
      const responseBody = response.data;
      dispatch({
          type: CREATE_COMMENT_SUCCESS,
          data: responseBody
      });
  } catch (error) {
      console.error(error);
      dispatch({
          type: CREATE_COMMENT_ERROR,
          message: error
      });
  }
}
