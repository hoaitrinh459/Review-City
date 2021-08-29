import http from "../HTTPAxios";

const getCommentDetails = (idReview, _sort="created_at:DESC") =>{
  console.log("sbdvhbsjvbksbvkbskvbs",idReview);
  var using_params = {
    review: idReview,
  }

  return http.get("/comments",
  {
    params: {
      ...using_params,
      _sort: _sort,
    }
  });
};

const postComment = (comment) => {
  return http.post("/comments",
  {
      content: comment.content,
      review: comment.review,
      users_permissions_user: comment.user
  }, 
  {
    headers: {
      "Authorization": `Bearer ${comment.authorization}`
    }
  }
  );
}

const CommentServicesUser ={getCommentDetails, postComment};

export default CommentServicesUser;
