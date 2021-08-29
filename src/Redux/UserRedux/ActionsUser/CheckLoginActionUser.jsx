import {CHECK_LOGIN_REQUEST,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR, 
  } from '../ConstantsUser/CheckLoginUser';
import CheckLoginServicesUser from "../../../Api/UserApi/CheckLoginServicesUser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {reactLocalStorage} from 'reactjs-localstorage';
export const loadCkeckLogin = (user) => async dispatch => {

  try {
    dispatch({ type: CHECK_LOGIN_REQUEST });
    const response = await CheckLoginServicesUser.checklogin(user);
    const responseBody = response.data;
    if(response!=null)
    {
      toast.success("Bạn đã đăng nhập thành công!")
      reactLocalStorage.setObject("user",responseBody);
    }

    dispatch({
      type: CHECK_LOGIN_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    toast.error("Tài khoản hoặc mật khẩu của bạn không đúng!")
      dispatch({
        type: CHECK_LOGIN_ERROR,
        message: error
      });
  }
}

export const resetuser = () => async dispatch => {
  try {
    dispatch({ type: CHECK_LOGIN_REQUEST });

    dispatch({
      type: CHECK_LOGIN_SUCCESS,
      data: null,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: CHECK_LOGIN_ERROR,
      message: error
    });
  }
}

export const signup = (user) => async dispatch => {
  try {
    dispatch({ type: SIGNUP_REQUEST });
    const response = await CheckLoginServicesUser.signup(user);
    const responseBody = response.data;
    if(response!=null)
    {
      toast.success("Bạn đã đăng ký thành công!")
    }
    dispatch({
      type: SIGNUP_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    toast.error("Tài khoản đã tồn tại!")
    dispatch({
      type: SIGNUP_ERROR,
      message: error
    });
  }
}

