import {SEARCH_CITY_REQUEST,
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_ERROR,
  SEARCH_OBJECT_REQUEST,
  SEARCH_OBJECT_SUCCESS,
  SEARCH_OBJECT_ERROR,
  SEARCH_BLOG_REQUEST,
  SEARCH_BLOG_SUCCESS,
  SEARCH_BLOG_ERROR,} from '../ConstantsUser/SearchUser';
import SearchServicesUser from "../../../Api/UserApi/SearchServicesUser";

export const loadSearchCity = (search) => async dispatch => {
  try {
    dispatch({ type: SEARCH_CITY_REQUEST });
    const response = await SearchServicesUser.searchcity(search);
    const responseBody = response.data;
    dispatch({
      type: SEARCH_CITY_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: SEARCH_CITY_ERROR,
      message: error
    });
  }
}

export const loadSearchObject = (search) => async dispatch => {
  try {
    dispatch({ type: SEARCH_OBJECT_REQUEST });
    const response = await SearchServicesUser.searchobject(search);
    const responseBody = response.data;
    dispatch({
      type: SEARCH_OBJECT_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: SEARCH_OBJECT_ERROR,
      message: error
    });
  }
}

export const loadSearchBlog = (search) => async dispatch => {
  try {
    dispatch({ type: SEARCH_BLOG_REQUEST });
    const response = await SearchServicesUser.searchblog(search);
    const responseBody = response.data;
    dispatch({
      type: SEARCH_BLOG_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: SEARCH_BLOG_ERROR,
      message: error
    });
  }
}
