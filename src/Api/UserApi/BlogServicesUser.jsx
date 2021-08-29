import http from "../HTTPAxios";

const getBlogs = (is_getAll = false,_limit = 1, _start = 0, _sort = "title:ASC") => {
  var using_params = {}
  if (!is_getAll){
    using_params = {
      _limit: _limit,
      _start: _start,
    }
  }
  return http.get("/blogs", 
  {
    params: {
      ...using_params,
      _sort: _sort,
    }
  });
};

const getBlogDetails = (id) =>{
  return http.get("/blogs/"+id);
};

const BlogServicesUser ={getBlogs, getBlogDetails};

export default BlogServicesUser;
