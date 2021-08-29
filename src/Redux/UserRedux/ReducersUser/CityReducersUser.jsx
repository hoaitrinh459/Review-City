import {CITY_REQUEST, 
        CITY_SUCCESS, 
        CITY_ERROR, 
        ALL_CITY_REQUEST, 
        ALL_CITY_SUCCESS, 
        ALL_CITY_ERROR,
        CITY_DETAILS_REQUEST,
        CITY_DETAILS_SUCCESS, 
        CITY_DETAILS_ERROR,} from '../ConstantsUser/CityUser';

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null
}

export function CityReducers(state = initialState, payload) {
  switch (payload.type) {
      case CITY_REQUEST:
          return {
              ...state,
              requesting: true
          };
      case CITY_SUCCESS:
          return {
              ...state,
              requesting: false,
              success: true,
              data: payload.data
          };
      case CITY_ERROR:
          return {
              ...state,
              requesting: false,
              message: payload.message
          };

      default:
          return state;
  }
}

 export function AllCityReducers(state = initialState, payload) {
    switch (payload.type) {
        case ALL_CITY_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case ALL_CITY_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data
            };
        case ALL_CITY_ERROR:
            return {
                ...state,
                requesting: false,
                message: payload.message
            };
  
        default:
            return state;
    }
  }

  export function CityDetailsReducers(state = initialState, payload) {
    switch (payload.type) {
        case CITY_DETAILS_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case CITY_DETAILS_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data
            };
        case CITY_DETAILS_ERROR:
            return {
                ...state,
                requesting: false,
                message: payload.message
            };
  
        default:
            return state;
    }
  }
  