import http from "../HTTPAxios";

const getCities = (is_getAll = false,_limit = 1, _start = 0, _sort = "name:ASC") => {
  var using_params = {}
  if (!is_getAll){
    using_params = {
      _limit: _limit,
      _start: _start,
    }
  }
  return http.get("/citis", 
  {
    params: {
      ...using_params,
      _sort: _sort,
    }
  });
};

const getCityDetails = (id) =>{
  return http.get("/citis/"+id);
};

// const getCityHome = () =>{
//   return http.get("/application::citis.citis");
// };
const CityServicesUser ={getCities, getCityDetails};

export default CityServicesUser;
