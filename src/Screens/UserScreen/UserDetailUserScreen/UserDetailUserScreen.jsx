import React from "react";
import './UserDetailUserScreen.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import {CgCalendarDates} from "react-icons/cg";
import ContentCityUserComponent from "../../../Components/UserComponent/ContentCityUserComponent/ContentCityUserComponent";
import {loadObjectOfUser} from "../../../Redux/UserRedux/ActionsUser/ObjectActionUser";
import LoadingModal from "react-loading-bubbles";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import ReviewObjectUserComponent from "../../../Components/UserComponent/ReviewObjectUserComponent/ReviewObjectUserComponent";
import {loadReviewOfUser} from "../../../Redux/UserRedux/ActionsUser/ReviewActionUser";
import BlogHomeUserComponent from "../../../Components/UserComponent/BlogHomeUserComponent/BlogHomeUserComponent";
function UserDetailUserScreen() {
  const user = reactLocalStorage.getObject("user", true);

  const userObject = user.user.objects;
  const userReview = user.user.reviews;
  const userBlog = user.user.blogs;
  var idObject = [];
  var idReview = [];

  for(let id of userObject){
    idObject.push(id.id);
  }
  for(let id of userReview){
    idReview.push(id.id);
  }

  const dispatch = useDispatch();
  const allobjectofuser = useSelector((state) => state.allobjectofuser.data);
  const requesting = useSelector((state) => state.allobjectofuser.requesting);

  useEffect(() => {
    dispatch(loadObjectOfUser(idObject));
  }, dispatch);

  const dispatchReview = useDispatch();
  const allreviewofreview = useSelector((state) => state.allreviewofreview.data);
  const requestingreview = useSelector((state) => state.allreviewofreview.requesting);
  console.log(allreviewofreview);
  useEffect(() => {
    dispatchReview(loadReviewOfUser(idReview));
  }, dispatchReview);

  return(
    <div className="user-detail-user-screen">
      <div className="user-detail">
        <div className="user-detail-content">
          <div className="user-detail-content-details">
            <div className="user-detail-name-and-avatar">
              <span className="a-buser-detail-name-and-avatar">
                <img className="img-user-detail-name-and-avatar" src={user.user.img} alt=""/>
              </span>
              <div className="name-user-detail-name-and-avatar-and-date-of-birth">
                <span className="name-user-detail-name-and-avatar">{user.user.username}</span>
                <span className="name-user-detail-name-and-avatar-date-of-birth"><CgCalendarDates/>{user.user.dateofbirth}</span>
              </div>
            </div>
            {
              (requesting|requestingreview) ?
              <LoadingModal size={128} color="#23D3D3" />
              :
              <div className="user-detail-manage">
              <div className="user-detail-manage-object">
                <h1 className="h1-title-all-city-and-blog">Địa điểm</h1>
                {
                  (allobjectofuser!=null) ?
                  <div className="list-object-other-user">
                    {allobjectofuser.map((object) =>(
                      <ContentCityUserComponent idcity={object.citi.id} id={object.id} iduser={object.users_permissions_user.id} dataNameObject={object.name} dataImgObject={object.imgobjects} dataImgUser={object.users_permissions_user.img} dataStarObject={object.star} dataNameUser={object.users_permissions_user.username} dataCategory={object.categories.name}/>
                    ))}
                  </div>
                  : <div>Không tìm thấy bài đăng nào!</div>
                }
              </div>
              <div className="user-detail-manage-object">
                <h1 className="h1-title-all-city-and-blog">Review</h1>
                {
                  (allreviewofreview!=null) ?
                  <div className="list-other-review-user">
                    {allreviewofreview.map((review)=>(
                      <ReviewObjectUserComponent id={review.object.id} idCity={review.object.citi} iduser={review.users_permissions_user.id} idreview = {review.id} dataImgUserReview={review.users_permissions_user.img} dataNameUserReview={review.users_permissions_user.username} dataTitleReview={review.title} dataStarReview={review.star} dataImgReview={review.img}/>
                    ))}
                  </div>
                  : <div>Không tìm thấy bài đăng nào!</div>
                }
              </div>
              <div className="user-detail-manage-object">
                <h1 className="h1-title-all-city-and-blog">Blog</h1>
                <div className="list-other-blog-user">
                  {userBlog.map((blog)=>(
                    <BlogHomeUserComponent dataImgBlog={blog.img} dataTitleBlog={blog.title} id={blog.id}/>
                  ))}
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}export default UserDetailUserScreen;