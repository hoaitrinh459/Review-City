import React from "react";
import './CommentReviewUserLayout.css';
import {FaCommentDots} from "react-icons/fa";
import {FiSend} from "react-icons/fi";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginUserLayout from "../../../Layouts/UserLayout/LoginUserLayout/LoginUserLayout";
import {reactLocalStorage} from 'reactjs-localstorage';
import { toast } from 'react-toastify';
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import {postComment} from "../../../Redux/UserRedux/ActionsUser/CommentActionUser";
import {deleteStateCreateComment} from "../../../Redux/UserRedux/ActionsUser/CommentActionUser";
function CommentReviewUserLayout(props) {
  var listcomments = [];
  listcomments =  props.dataCommentReview;
  const dispatch = useDispatch();
  const [modalIsOpenCheckLogin, setmodalIsOpenCheckLogin] = useState(false);
  const [user, setUser] = useState(reactLocalStorage.getObject("user"));
  const checkloginstate = useSelector((state) => state.ckecklogin.data);
  const postcomment = useSelector((state) => state.postcomment.data);
  const requesting = useSelector((state) => state.postcomment.requesting)
  function openModalCheckLogin() {
    setmodalIsOpenCheckLogin(true);
  }
  function closeModalCheckLogin() {
    setmodalIsOpenCheckLogin(false);
  }
  useEffect(()=>{ 
    setUser(reactLocalStorage.getObject("user"));
  },[checkloginstate==null])

  useEffect(()=>{ 
    closeModalCheckLogin();
    setUser(reactLocalStorage.getObject("user"));
  },[checkloginstate!=null])

  var datas;
  const {
    register,
    handleSubmit,
} = useForm();
   const onSubmit = (data)=>{
     datas=data.content;
     console.log("data",data)
    checklogin();
  };
  const checklogin = () =>{
    setUser(reactLocalStorage.getObject("user"));
    if(user!=null&&!(Object.entries(user).length === 0))
     {
      var addcomment={
        content: datas,
        user: user.user.id,
        review: props.idReview,
        authorization: user.jwt,
       }
       dispatch(postComment(addcomment));
     }
     else
     {
       toast.warning("Bạn chưa đăng nhập!")
       openModalCheckLogin();
     }
   }
  const dispatchpostcommen = useDispatch();
  useEffect(() => {
    dispatchpostcommen(deleteStateCreateComment());
  }, [postcomment!=null]);
  // console.log("svdfvdfv",postcomment);
  return(
    <div className="comment-review-user-layout" >
      <Modal className="modal-login-user-log"
        isOpen={modalIsOpenCheckLogin}
        onRequestClose={closeModalCheckLogin}
      >
        <div>
          <LoginUserLayout/>
        </div>
      </Modal>
      <h3>Bình luận <FaCommentDots/></h3>
      <form className="form-comment-review-user-layout" onSubmit={handleSubmit(onSubmit)}>
        <input className="input-form-comment-review-user-layout" type="text"  placeholder="Viết bình luận..."{...register("content", { required: true })}/>
        <button className="btn-form-comment-review-user-layout"><FiSend/></button>
      </form>
      {
        (listcomments!=null) ?
        <div className="comment-review-user">
        {listcomments.map((comment)=>(
          <div className="user-comment-review">
            <Link to={`/vivu/user/${comment.users_permissions_user.id}`} className="a-user-comment-review">
              <img className="img-user-comment-review" src={comment.users_permissions_user.img} alt={comment.users_permissions_user.username}/>
            </Link>
            <div className="name-and-content-user-comment-review">
              <Link to={`/vivu/user/${comment.users_permissions_user.id}`} className="name-user-comment-review">{comment.users_permissions_user.username}</Link>
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
      : <div></div>
      }
      
    </div>
  );
}
export default CommentReviewUserLayout;
