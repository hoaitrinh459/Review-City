import {BLOG_REQUEST,
  BLOG_SUCCESS,
  BLOG_ERROR, 
  ALL_BLOG_REQUEST, 
  ALL_BLOG_SUCCESS, 
  ALL_BLOG_ERROR, 
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS, 
  BLOG_DETAILS_ERROR,} from '../ConstantsUser/BlogUser';
import BlogServicesUser from "../../../Api/UserApi/BlogServicesUser";

export const loadAllBlog = () => async dispatch => {
  try {
    dispatch({ type: ALL_BLOG_REQUEST });
    const response = await BlogServicesUser.getBlogs(true);
    const responseBody = response.data;
    dispatch({
      type: ALL_BLOG_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: ALL_BLOG_ERROR,
      message: error
    });
  }
}

export const loadBlog = (numberOfCity) => async dispatch => {
  try {
    var response;
    dispatch({ type: BLOG_REQUEST });
    if((typeof numberOfCity)==='number'){
      response = await BlogServicesUser.getBlogs(false, numberOfCity);
    }
    else response = await BlogServicesUser.getBlogs(true);
    const responseBody = response.data;
    dispatch({
      type: BLOG_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: BLOG_ERROR,
      message: error
    });
  }
}

export const loadBlogDetails = (id) => async dispatch => {
  try {
    dispatch({ type: BLOG_DETAILS_REQUEST });
    const response = await BlogServicesUser.getBlogDetails(id);
    const responseBody = response.data;
    dispatch({
      type: BLOG_DETAILS_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: BLOG_DETAILS_ERROR,
      message: error
    });
  }
}