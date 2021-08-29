import {OBJECT_REQUEST,
  OBJECT_SUCCESS,
  OBJECT_ERROR, 
  ALL_OBJECT_OF_USER_REQUEST, 
  ALL_OBJECT_OF_USER_SUCCESS, 
  ALL_OBJECT_OF_USER_ERROR, 
  OBJECT_DETAILS_REQUEST,
  OBJECT_DETAILS_SUCCESS, 
  OBJECT_DETAILS_ERROR,
  ALL_OBJECT_OF_CITY_REQUEST, 
  ALL_OBJECT_OF_CITY_SUCCESS, 
  ALL_OBJECT_OF_CITY_ERROR,} from '../ConstantsUser/ObjectUser';
import ObjectServicesUser from "../../../Api/UserApi/ObjectServicesUser";

// export const loadAllObject = () => async dispatch => {
//   try {
//     dispatch({ type: ALL_OBJECT_REQUEST });
//     const response = await ObjectServicesUser.getObjects(true);
//     const responseBody = response.data;
//     dispatch({
//       type: ALL_OBJECT_SUCCESS,
//       data: responseBody
//     });
//   } catch (error) {
//     console.error(error);
//     dispatch({
//       type: ALL_OBJECT_ERROR,
//       message: error
//     });
//   }
// }

export const loadObject = (numberOfObject) => async dispatch => {
  try {
    var response;
    dispatch({ type: OBJECT_REQUEST });
    if((typeof numberOfObject)==='number'){
      response = await ObjectServicesUser.getObjects(false, numberOfObject);
    }
    else response = await ObjectServicesUser.getObjects(true);
    const responseBody = response.data;
    dispatch({
      type: OBJECT_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: OBJECT_ERROR,
      message: error
    });
  }
}

export const loadObjectDetails = (id) => async dispatch => {
  try {
    dispatch({ type: OBJECT_DETAILS_REQUEST });
    const response = await ObjectServicesUser.getObjectDetails(id);
    const responseBody = response.data;
    dispatch({
      type: OBJECT_DETAILS_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: OBJECT_DETAILS_ERROR,
      message: error
    });
  }
}

export const loadObjectOfCity = (id) => async dispatch => {
  try {
    dispatch({ type: ALL_OBJECT_OF_CITY_REQUEST });
    var response;
    var responseBody;
    var allresponseBody = []
    if(id.length>0){
      for(const ids of id){
      response = await ObjectServicesUser.getObjectDetails(ids);
      responseBody = response.data;
      allresponseBody.push(responseBody)
      }
    }
    dispatch({
      type: ALL_OBJECT_OF_CITY_SUCCESS,
      data: allresponseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: ALL_OBJECT_OF_CITY_ERROR,
      message: error
    });
  }
}

export const loadObjectOfUser = (id) => async dispatch => {
  try {
    dispatch({ type: ALL_OBJECT_OF_USER_REQUEST });
    var response;
    var responseBody;
    var allresponseBody = []
    if(id.length>0){
      for(const ids of id){
      response = await ObjectServicesUser.getObjectDetails(ids);
      responseBody = response.data;
      allresponseBody.push(responseBody)
      }
    }
    dispatch({
      type: ALL_OBJECT_OF_USER_SUCCESS,
      data: allresponseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: ALL_OBJECT_OF_USER_ERROR,
      message: error
    });
  }
}