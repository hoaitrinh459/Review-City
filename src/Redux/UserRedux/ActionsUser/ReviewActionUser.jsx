import {REVIEW_REQUEST,
  REVIEW_SUCCESS,
  REVIEW_ERROR,  
  REVIEW_DETAILS_REQUEST,
  REVIEW_DETAILS_SUCCESS, 
  REVIEW_DETAILS_ERROR,
  ALL_REVIEW_OF_OBJECT_REQUEST, 
  ALL_REVIEW_OF_OBJECT_SUCCESS, 
  ALL_REVIEW_OF_OBJECT_ERROR,
  ALL_REVIEW_OF_USER_REQUEST, 
  ALL_REVIEW_OF_USER_SUCCESS, 
  ALL_REVIEW_OF_USER_ERROR,} from '../ConstantsUser/ReviewUser';
import ReviewServicesUser from "../../../Api/UserApi/ReviewServicesUser";

export const loadReview = (numberOfReview) => async dispatch => {
  try {
    var response;
    dispatch({ type: REVIEW_REQUEST });
    if((typeof numberOfReview)==='number'){
      response = await ReviewServicesUser.getReviews(false, numberOfReview);
    }
    else response = await ReviewServicesUser.getReviews(true);
    const responseBody = response.data;
    dispatch({
      type: REVIEW_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: REVIEW_ERROR,
      message: error
    });
  }
}

export const loadReviewDetails = (id) => async dispatch => {
  try {
    dispatch({ type: REVIEW_DETAILS_REQUEST });
    const response = await ReviewServicesUser.getReviewDetails(id);
    const responseBody = response.data;
    dispatch({
      type: REVIEW_DETAILS_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: REVIEW_DETAILS_ERROR,
      message: error
    });
  }
}

export const loadReviewOfObject = (id) => async dispatch => {
  try {
    dispatch({ type: ALL_REVIEW_OF_OBJECT_REQUEST });
    var response;
    var responseBody;
    var allresponseBody = []
    if(id.length>0){
      for(const ids of id){
      response = await ReviewServicesUser.getReviewDetails(ids);
      responseBody = response.data;
      allresponseBody.push(responseBody)
      }
    }
    dispatch({
      type: ALL_REVIEW_OF_OBJECT_SUCCESS,
      data: allresponseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: ALL_REVIEW_OF_OBJECT_ERROR,
      message: error
    });
  }
}

export const loadReviewOfUser = (id) => async dispatch => {
  try {
    dispatch({ type: ALL_REVIEW_OF_USER_REQUEST });
    var response;
    var responseBody;
    var allresponseBody = []
    if(id.length>0){
      for(const ids of id){
      response = await ReviewServicesUser.getReviewDetails(ids);
      responseBody = response.data;
      allresponseBody.push(responseBody)
      }
    }
    dispatch({
      type: ALL_REVIEW_OF_USER_SUCCESS,
      data: allresponseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: ALL_REVIEW_OF_USER_ERROR,
      message: error
    });
  }
}