import {CITY_REQUEST,
        CITY_SUCCESS,
        CITY_ERROR, 
        ALL_CITY_REQUEST, 
        ALL_CITY_SUCCESS, 
        ALL_CITY_ERROR, 
        CITY_DETAILS_REQUEST,
        CITY_DETAILS_SUCCESS, 
        CITY_DETAILS_ERROR,} from '../ConstantsUser/CityUser';
import CityServicesUser from "../../../Api/UserApi/CityServicesUser";

export const loadAllCity = () => async dispatch => {
  try {
      dispatch({ type: ALL_CITY_REQUEST });
      const response = await CityServicesUser.getCities(true);
      const responseBody = response.data;
      dispatch({
          type: ALL_CITY_SUCCESS,
          data: responseBody
      });
  } catch (error) {
      console.error(error);
      dispatch({
          type: ALL_CITY_ERROR,
          message: error
      });
  }
}

export const loadCity = (numberOfCity) => async dispatch => {
  try {
      var response;
      dispatch({ type: CITY_REQUEST });
      if((typeof numberOfCity)==='number'){
      response = await CityServicesUser.getCities(false, numberOfCity);
      }
      else response = await CityServicesUser.getCities(true);
      const responseBody = response.data;
      dispatch({
          type: CITY_SUCCESS,
          data: responseBody
      });
  } catch (error) {
      console.error(error);
      dispatch({
          type: CITY_ERROR,
          message: error
      });
  }
}

export const loadCityDetails = (id) => async dispatch => {
    try {
        dispatch({ type: CITY_DETAILS_REQUEST });
        const response = await CityServicesUser.getCityDetails(id);
        const responseBody = response.data;
        dispatch({
            type: CITY_DETAILS_SUCCESS,
            data: responseBody
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: CITY_DETAILS_ERROR,
            message: error
        });
    }
  }