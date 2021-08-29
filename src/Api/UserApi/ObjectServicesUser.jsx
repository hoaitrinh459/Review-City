import http from "../HTTPAxios";

const getObjects = (is_getAll = false,_limit = 1, _start = 0, _sort = "name:ASC") => {
  var using_params = {}
  if (!is_getAll){
    using_params = {
      _limit: _limit,
      _start: _start,
    }
  }
  return http.get("/objects", 
  {
    params: {
      ...using_params,
      _sort: _sort,
    }
  });
};

const getObjectDetails = (id) =>{
  return http.get("/objects/"+id);
};

const ObjectServicesUser ={getObjects, getObjectDetails};

export default ObjectServicesUser;
