import http from "../HTTPAxios";

const searchcity = (name_contains="") => {
    var using_params = {
      name_contains: name_contains,
    }

  return http.get("/citis", 
  {
    params: {
      ...using_params,
    }
  });
};

const searchblog = (title_contains) => {
  var using_params = {
    title_contains: title_contains,
  }

  return http.get("/blogs", 
  {
    params: {
      ...using_params,
    }
  });
};

const searchobject = (name_contains) => {
  var using_params = {
    name_contains: name_contains,
  }

  return http.get("/objects", 
  {
    params: {
      ...using_params,
    }
  });
};

const SearchServicesUser ={searchcity, searchblog, searchobject};

export default SearchServicesUser;
