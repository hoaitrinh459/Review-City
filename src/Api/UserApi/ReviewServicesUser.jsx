import http from "../HTTPAxios";

const getReviews = (is_getAll = false,_limit = 1, _start = 0, _sort = "title:ASC") => {
  var using_params = {}
  if (!is_getAll){
    using_params = {
      _limit: _limit,
      _start: _start,
    }
  }

  return http.get("/reviews", 
  {
    params: {
      ...using_params,
      _sort: _sort,
    }
  });
};

const getReviewDetails = (id) =>{
  return http.get("/reviews/"+id);
};

const ReviewServicesUser ={getReviews, getReviewDetails};

export default ReviewServicesUser;
