import React from "react";
import './ReviewUserScreen.css';
import ReactStars from 'react-stars';
import ReviewObjectUserComponent from "Components/UserComponent/ReviewObjectUserComponent/ReviewObjectUserComponent";
import MapUserComponent from "../../../Components/UserComponent/MapUserComponent/MapUserComponent";
import CommentReviewUserLayout from "../../../Layouts/UserLayout/CommentReviewUserLayout/CommentReviewUserLayout";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingModal from "react-loading-bubbles";
import {loadReviewDetails, loadReview} from "../../../Redux/UserRedux/ActionsUser/ReviewActionUser";
import {loadObjectDetails} from "../../../Redux/UserRedux/ActionsUser/ObjectActionUser";
import {loadCommentOfReview} from "../../../Redux/UserRedux/ActionsUser/CommentActionUser";
import { useEffect } from "react";

function ReviewUserScreen() {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const reviewdetails = useSelector((state) => state.reviewdetails.data);
  const requesting = useSelector((state) => state.reviewdetails.requesting);
  const dispatchcomment = useDispatch();
  const comment = useSelector((state) => state.allcommentofreview.data);
  const requestingcomment = useSelector((state) => state.allcommentofreview.requesting);
  const postcomment = useSelector((state) => state.postcomment.data);
  const objectdetails = useSelector((state) => state.objectdetails.data);
  const requestingobject = useSelector((state) => state.objectdetails.requesting);
  useEffect(() => {
    dispatch(loadObjectDetails(match.params.idObject));
  }, [match.params.idObject]);

  if(!requestingobject && objectdetails != null){
    var categoryobject = objectdetails.categories.name;
    var category;
    if(categoryobject==='Khách sạn') 
    category = "hotel"
    else if(categoryobject==="Ẩm thực")
    category = "food";
    else if(categoryobject==="Khám phá")
    category = "discover";
  }
  
  useEffect(() => {
    dispatch(loadReviewDetails(match.params.idReview));
  }, [match.params.idReview]);

  useEffect(() => {
    dispatchcomment(loadCommentOfReview(match.params.idReview));
  }, [match.params.idReview|postcomment==null]);

  const dispatchOtherReview = useDispatch();
  const otherreview = useSelector((state) => state.review.data);
  const requestingOtherReview = useSelector((state) => state.review.requesting);
  useEffect(() => {
    dispatchOtherReview(loadReview(4));
  }, [dispatchOtherReview]);
  return(
    <div className="review-user-screen">
      {
        (requesting|requestingobject|requestingcomment|requestingOtherReview) ?
        <LoadingModal size={128} color="#23D3D3" />
        :
        <div>
          {
            ((reviewdetails!=null)&&(objectdetails!=null)) ?
            <div className="review-user">
            <div className="review-user-content">
              <div className="review-user-content-details">
              <div className="left-review-user-content">
                <div className="left-review-user-title-object">
                  <div>
                    <Link to={`/vivu/city/${objectdetails.citi.id}`} className="title-review-object-user-city-and-category title-review-city-object-user">{objectdetails.citi.name}</Link>
                    <span className="title-review-object-user-city-and-category">{objectdetails.categories.name}</span>
                  </div>
                  <Link to={`/vivu/city/${objectdetails.citi.id}/${category}/${objectdetails.id}`} className="h1-title-review-object-user">{objectdetails.name}</Link>
                </div>
                <div className="review-user-and-start">
                  <div className="div-review-user-and-start">
                    <Link to = {`/vivu/user/${reviewdetails.users_permissions_user.id}`} className="a-review-user-and-start">
                      <img className="img-review-user-and-start" src={reviewdetails.users_permissions_user.img} alt={reviewdetails.users_permissions_user.username}/>
                    </Link>
                    <Link to = {`/vivu/user/${reviewdetails.users_permissions_user.id}`} className="name-review-user-and-start">{reviewdetails.users_permissions_user.username}</Link>
                  </div>
                  <div className="star-review-user">
                    <ReactStars
                    count={5} 
                    size={20} 
                    color2={'#ffd700'} 
                    value={reviewdetails.star}
                    />
                  </div>
                  </div>
                  <h3 className="h3-title-review-user">{reviewdetails.title}</h3>
                  <div className="describe-review-user">{reviewdetails.describe}</div>
                  {
                    <div className="comment-review-user">
                    <CommentReviewUserLayout dataCommentReview = {comment} idReview = {reviewdetails.id}/>
                  </div>
                  }
                  
              </div>
              <div className="right-object-user-content">
                  <div className="div-right-object-user-content-details">
                    <div className="div-right-object-user-content-item">
                      <div className="div-right-address-object"><label>{objectdetails.map}</label></div>
                      <div className="div-right-object-user-map">
                        <MapUserComponent dataMap={objectdetails.map}/>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
          : <div>Không tìm thấy review này.</div>
          }
          {
            (otherreview!=null) ?
            <div className="other-review-user">
              <div className="other-review-user-content">
                <div className="title-other-review-user ">
                  <h2 className="title-other-user">Cùng xem các bài review khác nhé!</h2>
                </div>
                <div className="list-other-review-user">
                  {otherreview.map((review)=>(
                    <ReviewObjectUserComponent id={review.object.id} idCity={review.object.citi} category={objectdetails.categories.name} iduser={review.users_permissions_user.id} idreview = {review.id} dataImgUserReview={review.users_permissions_user.img} dataNameUserReview={review.users_permissions_user.username} dataTitleReview={review.title} dataStarReview={review.star} dataImgReview={review.img}/>
                  ))}
                </div>
              </div>
            </div>
            : <div>Không tìm thấy các bài review khác.</div>
          }
        </div>
      }
    </div>
  );
}
export default ReviewUserScreen;