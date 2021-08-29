import React from "react";
import './ObjectUserScreen.css';
import SlidebarUserComponent from "Components/UserComponent/SlidebarUserComponent/SlidebarUserComponent";
import ReactStars from 'react-stars';
import ReviewObjectUserComponent from "../../../Components/UserComponent/ReviewObjectUserComponent/ReviewObjectUserComponent";
import FontAwesome from'react-fontawesome';
import ContentCityUserComponent from "../../../Components/UserComponent/ContentCityUserComponent/ContentCityUserComponent";
import MapUserComponent from "../../../Components/UserComponent/MapUserComponent/MapUserComponent";
import ParagraphShowComponent from "../../../Components/UserComponent/ParagraphShowComponent/ParagraphShowComponent";
import Modal from "react-modal";
import AddReviewUserLayout from "../../../Layouts/UserLayout/AddReviewUserLayout/AddReviewUserLayout";
import {IoMdClose} from"react-icons/io";
import { useState,useEffect } from "react";
import { loadObjectDetails } from "../../../Redux/UserRedux/ActionsUser/ObjectActionUser";
import LoadingModal from "react-loading-bubbles";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from "react-router-dom";
import { loadObject } from "../../../Redux/UserRedux/ActionsUser/ObjectActionUser";
import { loadReviewOfObject } from "../../../Redux/UserRedux/ActionsUser/ReviewActionUser";
import LoginUserLayout from "../../../Layouts/UserLayout/LoginUserLayout/LoginUserLayout";
import {reactLocalStorage} from 'reactjs-localstorage';
import { toast } from 'react-toastify';

function ObjectUserScreen() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenCheckLogin, setmodalIsOpenCheckLogin] = useState(false);
  const [user, setUser] = useState(reactLocalStorage.getObject("user"));
  function openModalCheckLogin() {
    setmodalIsOpenCheckLogin(true);
  }
  function closeModalCheckLogin() {
    setmodalIsOpenCheckLogin(false);
  }
  const checkloginstate = useSelector((state) => state.ckecklogin.data);
  useEffect(()=>{ 
    closeModalCheckLogin();
    setUser(reactLocalStorage.getObject("user"));
  },[checkloginstate!=null])

  useEffect(()=>{ 
    setUser(reactLocalStorage.getObject("user"));
  },[checkloginstate==null])

 const checklogin = () => {
    setUser(reactLocalStorage.getObject("user"));
   console.log(user);
   if(user!=null&&!(Object.entries(user).length === 0))
    {
      openModal();
    }
    else
    {
      toast.warning("Bạn chưa đăng nhập!")
      openModalCheckLogin();
    }
 }
  const match = useRouteMatch();
  console.log(match);
  const dispatch = useDispatch();
  const objectdetails = useSelector((state) => state.objectdetails.data);
  
  const requesting = useSelector((state) => state.objectdetails.requesting);
  useEffect(() => {
    dispatch(loadObjectDetails(match.params.idObject));
  }, [match.params.idObject]);

  const dispatchOtherObject = useDispatch();
  const object = useSelector((state) => state.object.data);
  const requestingOtherObject = useSelector((state) => state.object.requesting);
  useEffect(() => {
    dispatchOtherObject(loadObject(4));
  }, [dispatchOtherObject]);

  if(!requesting && objectdetails != null){
    var arrreviewid = [];
    objectdetails.reviews.map((object)=>{
      arrreviewid.push(object.id)
    })
  }

  const dispatchreview = useDispatch();
  const reviewdetails = useSelector((state) => state.allreviewofobject.data);
  const requestingreview = useSelector((state) => state.allreviewofobject.requesting);

  useEffect(() => {
    dispatchreview(loadReviewOfObject(arrreviewid));
  }, [arrreviewid==undefined]);

console.log("reviewdetails",reviewdetails)
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return(
    <div className="object-user-screen">
      <Modal className="modal-login-user-log"
        isOpen={modalIsOpenCheckLogin}
        onRequestClose={closeModalCheckLogin}
      >
        <div>
          <LoginUserLayout/>
        </div>
      </Modal>
      {
        (requesting|requestingOtherObject|requestingreview) ?
        <LoadingModal size={128} color="#23D3D3" />
        :
        <div>
          {
            (objectdetails!=null) ?
            <div>
              <SlidebarUserComponent dataImgObject={objectdetails.imgobjects}/>
              <div className="object-user">
                <div className="object-user-content">
                  <div className="object-user-content-details">
                  <div className="left-object-user-content">
                    <div>
                      <div>
                        <Link to = {`/vivu/city/${objectdetails.citi.id}`} className="title-object-user-city-and-category title-city-object-user">{objectdetails.citi.name}</Link>
                        <span className="title-object-user-city-and-category">{objectdetails.categories.name}</span>
                      </div>
                      <h1 className="h1-title-object-user">{objectdetails.name}</h1>
                      <div className="star-object-user">
                        <ReactStars
                        count={5} 
                        size={22} 
                        color2={'#ffd700'} 
                        value={objectdetails.star}
                        />
                      </div>
                      <ParagraphShowComponent dataDescribeObject = {objectdetails.describe}/>
                    </div>
                    <div className="review-object-user">
                      <div className="add-review-user">
                      <h3 className="add-review-user-title">Review</h3>
                      <button onClick={checklogin} className="add-review-user-btn"><FontAwesome className="far fa-plus-circle"/> Thêm review</button>
                      </div>
                      {
                        (reviewdetails!=null) ?
                        <div className="grid-review-object-user">
                          {reviewdetails.map((review)=>(
                            <ReviewObjectUserComponent category={objectdetails.categories.name} idCity={review.id} id={review.object.id} idreview={review.id} iduser={review.users_permissions_user.id} dataImgUserReview={review.users_permissions_user.img} dataNameUserReview={review.users_permissions_user.username} dataTitleReview={review.title} dataStarReview={review.star} dataImgReview={review.img}/>
                          ))}
                        </div>
                        : <div>Không tìm thấy review nào.</div>
                      }
                    </div>
                  </div>
                  <div className="right-object-user-content">
                      <div className="div-right-object-user-content-details">
                        <div className="div-right-object-user-content-item">
                          <div className="div-right-a-review-object-user-add-component-content">
                            <Link to={`/vivu/user/${objectdetails.users_permissions_user.id}`} className="right-a-review-object-user-add-review-user-component-content">
                              <img className="right-img-review-object-user-add-riview-user-component-content" src={objectdetails.users_permissions_user.img} alt={objectdetails.users_permissions_user.username}/>
                            </Link>
                            <Link to={`/vivu/user/${objectdetails.users_permissions_user.id}`} className="right-a-review-object-title-user">{objectdetails.users_permissions_user.username}</Link>
                          </div>
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
              <Modal className="modal-user-add-new-object"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                // style ={customStyles}
              >
                <div className="modal-user-add-new-object-content-btn-close">
                <button onClick={closeModal} className="modal-user-btn-close"><IoMdClose/></button>
                </div>
                  <AddReviewUserLayout dataNameObject={objectdetails.name} dataMapObject={objectdetails.map} dataNameCity={objectdetails.citi.name} dataCategory={objectdetails.categories.name}/>
                  
              </Modal>
          </div>
           :<div>Không tìm thấy địa điểm này.</div>
          }
          <div className="other-object-user">
            <div className="other-object-user-content ">
              <div className="title-other-object-user">
                <h2 className="title-other-user">Cùng khám phá những nơi khác nhé!</h2>
              </div>
              {
                (object&&object.length>0) ?
                  <div className="list-object-other-user">
                    {object.map((otherObject) =>(
                       <ContentCityUserComponent idcity={otherObject.citi.id} id={otherObject.id} iduser={otherObject.users_permissions_user.id} dataNameObject={otherObject.name} dataImgObject={otherObject.imgobjects} dataImgUser={otherObject.users_permissions_user.img} dataStarObject={otherObject.star} dataNameUser={otherObject.users_permissions_user.username} dataCategory={otherObject.categories.name}/>
                    ))}
                  </div>
                  : <div style={{color: "#ffffff"}}>Không tìm thấy những địa điểm khác.</div>
              }
              
            </div>
          </div>
        </div>
      }  
    </div>
  );
}
export default ObjectUserScreen;