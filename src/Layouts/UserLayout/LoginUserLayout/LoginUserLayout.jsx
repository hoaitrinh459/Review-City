import  './LoginUserLayout.css';
import FontAwesome from 'react-fontawesome';
import React, {useState} from 'react';
import { loadCkeckLogin, signup } from "../../../Redux/UserRedux/ActionsUser/CheckLoginActionUser";
import LoadingModal from "react-loading-bubbles";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";

function LoginUserLayout(props) {
  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
  } = useForm();
   const onSubmit = (data)=>{
      dispatch(loadCkeckLogin(data));
  };
  
  const requesting = useSelector((state) => state.ckecklogin.requesting);
  const dispatchSignup = useDispatch();
  const requestingsignup = useSelector((state) => state.signup.requesting);
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
  } = useForm();

  const onSubmitSignup = (data)=>{
    dispatchSignup(signup(data));
};
  const [overlay, setOverlay] = useState("overlay-container-signin");

  const handleClickSignup = ()=>{
    setOverlay("overlay-container-signup");
  }

  const handleClickSignin = ()=>{
    setOverlay("overlay-container-signin");
  }
  
  return (
    <>
    {
      (requesting|requestingsignup) ?
      <LoadingModal size={128} color="#23D3D3" />
      :
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <div className="form-signin-signup">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="h1-signin-signup">Đăng nhập</h1>
            <div className="social-container">
              <button className="social">
              <FontAwesome className="fab fa-facebook" />
              </button>
              <button className="social">
              <FontAwesome className="fab fa-google-plus" />
              </button>
            </div>
            <input className="input-group" type="email" placeholder="Email" {...register("identifier", { required: true })}/>
            <input className="input-group" type="password" placeholder="Password" {...register("password", { required: true })}/>
            <button className="social style-button-user-group" >Bạn quên mật khẩu?</button>
            <button className="button-group">Đăng nhập</button>
          </form>
            <button className="social style-button-user-group" onClick={handleClickSignup}>
              Bạn chưa có tài khoản?
              <FontAwesome className="fal fa-arrow-right" id="icon-arrow-left"/>
            </button>
            </div>
        </div>
        <div className="form-container sign-up-container">
        <div className="form-signin-signup">
          <form onSubmit={handleSubmitSignup(onSubmitSignup)}>
              <h1 className="h1-signin-signup">Tạo tài khoản</h1>
              <div className="social-container">
                <button className="social">
                  <FontAwesome className="fab fa-facebook" />
                </button>
                <button className="social">
                  <FontAwesome className="fab fa-google-plus" />
                </button>
              </div>
              <input className="input-group" type="text" placeholder="Name" {...registerSignup("username", { required: true })}/>
              <input className="input-group" type="email" placeholder="Email" {...registerSignup("email", { required: true })}/>
              <input className="input-group" type="password" placeholder="Password" {...registerSignup("password", { required: true })}/>
              <button className="button-group">Đăng ký</button>
            </form>
            <button className="social style-button-user-group" onClick={handleClickSignin}>
              <FontAwesome className="fal fa-arrow-left" id="icon-arrow-right"/> 
              Bạn muốn đăng nhập?
            </button>
        </div>
      </div>
      <div className={overlay}>
        <img id="img-signin-signup" src="https://dulichkhamphahue.com/wp-content/uploads/2020/03/Song_Quay_Son_Cao_Bang_7.jpg" alt="Đi hết Việt Nam" />
      </div>
    </div>
  }

    </>
  );
}
export default LoginUserLayout;
