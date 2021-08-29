import './HeaderUserComponent.css';
import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllCity } from "../../../Redux/UserRedux/ActionsUser/CityActionUser";
import {IoCaretDown} from 'react-icons/io5'; 
import {Link} from "react-router-dom";
import { loadAllBlog } from "../../../Redux/UserRedux/ActionsUser/BlogActionUser";
import {reactLocalStorage} from 'reactjs-localstorage';
import {ImProfile} from "react-icons/im";
import {FiLogOut} from "react-icons/fi"
import { useForm } from "react-hook-form";
import { Redirect} from 'react-router-dom';
import {resetuser} from "../../../Redux/UserRedux/ActionsUser/CheckLoginActionUser";
import Modal from "react-modal";
import LoginUserLayout from '../../../Layouts/UserLayout/LoginUserLayout/LoginUserLayout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HeaderUser() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [user, setUsers] = useState(reactLocalStorage.getObject("user"));
  const checklogin = useSelector((state) => state.ckecklogin.data);
  const signup = useSelector((state) => state.signup.data);
  useEffect(()=>{
    openModal();
  },[signup!=null])

  useEffect(()=>{ 
    closeModal();
    setUsers(reactLocalStorage.getObject("user"));
  },[checklogin!=null])
  const dispatchuser = useDispatch();
  const setUser = () => {
    dispatchuser(resetuser());
    reactLocalStorage.remove("user");
    setUsers(null);
    toast.dark("Bạn đã đăng xuất!")
  };

  const [input, setInput] = useState("input-header-user");
  const [btn, setBtn] = useState("btn-header-user");
  const handleSearch =() => {
    if(input==="input-header-user"){
      setInput("input-header-user active");
      setBtn("btn-header-user animate");
    }else{
      setInput("input-header-user");
      setBtn("btn-header-user");
    }
  };
  const dispatch = useDispatch();
  const city = useSelector((state) => state.allcity.data);
  useEffect(() => {
    dispatch(loadAllCity());
  }, [dispatch]);

  const dispatchallblog = useDispatch();
  const allblog = useSelector((state) => state.allblog.data);
  useEffect(() => {
    dispatchallblog(loadAllBlog());
  }, [dispatchallblog]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  }

  const [value, setValue] = useState();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data)=>{

    setValue(data);
  };
  if(value!==undefined)
      var valueSearch=value.search;
  return (
      <div className="header-user">
        <Modal className="modal-login-user-log"
          modalClassName="modal-dialog"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <div>
              <LoginUserLayout/>
            </div>
          </Modal>
        <div className="header-user-content">
          <div className="logo-header-user">
            <Link to={`/vivu`}>
              <img className="logo-img-header-user" src="https://vivuenglish.edu.vn/uploads/commons/images/vivu_final-01(1).png" alt="Vi vu" />
            </Link>
          </div>
          <div className="header-user-content-details">
            <div className="search-header-user">
              <input type="checkbox" id="show-menu" role="button"></input>
              <div className="wrapper-header-user">
                <form className="search-box-header-user" onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" placeholder="Tìm kiếm..." className={input} {...register("search", { required: true })}></input>
                    <div className={btn} onClick={handleSearch}>
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                </form>
                {
                  (valueSearch!==undefined)?
                  <Redirect to={`/vivu/search/${valueSearch}`}></Redirect>
                  :valueSearch===""
                }
              </div>
            </div>
            <div className="title-header-user">
              <div className="content-header-user">
                <ul className="ul-content-header-user">
                  <li className="li-content-header-user">
                    <Link className="a-content-header-user" to={`/vivu/city`}>Thành Phố<IoCaretDown/></Link>
                    <ul className="hidden-header-user">
                    {(city && city.length > 0)?
                      city.map((city) => (
                        <li className="li-header-item"><Link className="a-header-menu" to={`/vivu/city/${city.id}`}>{city.name}</Link></li>
                      ))
                      :<li className="li-header-item"><Link className="a-header-menu">Không có thành phố nào.</Link></li>
                    }
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="content-header-user">
              <ul className="ul-content-header-user">
              <li className="li-content-header-user">
                <Link to={`/vivu/blog`} className="a-content-header-user">Blog<IoCaretDown/></Link>
                <ul className="hidden-header-user">
                  {(allblog&&allblog.length>0)?
                  allblog.map((blog)=>(
                    <li className="li-header-item"><Link to={`/vivu/blog/${blog.id}`} className="a-header-menu">{blog.title}</Link></li>
                  ))
                  : <li className="li-header-item"><Link className="a-header-menu">Không có blog nào.</Link></li>
                  }
                </ul>
                </li>
                </ul>
              </div>
              <div className="content-header-user">
                <button className="style-button-user-group a-content-header-user" onClick={scrollToBottom}>About Us</button>
              </div>
              <div className="content-header-user">
                {
                (user!=null&&!Object.entries(user).length == 0)?
                  <ul className="ul-content-header-user">
                    
                  <li className="li-content-header-user">
                    <Link to={`/vivu/user/${user.user.username.replace(/\s+/g, '-').toLowerCase()}`}  className="a-content-header-user a-acount-content-header-user">
                      <span className="span-header-user">
                        <img className="img-header-user" src = {user.user.img} alt=""></img>
                      </span>
                      {user.user.username}
                    </Link>
                    <ul id="hidden-header-user-acount" className="hidden-header-user">
                      <li className="li-header-item">
                        <Link to={`/vivu/user/${user.user.username.replace(/\s+/g, '-').toLowerCase()}`} className="a-header-menu" id="a-header-menu-profile-and-logout">
                          <ImProfile/>Profile
                        </Link>
                      </li>
                      <li className="li-header-item">
                        <button onClick={setUser} to={`/vivu`} className="style-button-user-group a-header-menu" id="a-header-menu-profile-and-logout">
                            <FiLogOut/> Đăng xuất
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
                : <button onClick={openModal} className="style-button-user-group a-acount-content-header-user">
                <span className="span-header-user">
                  <img className="img-header-user" src="https://i.pinimg.com/originals/31/7c/87/317c87f5eec32d4ac39c328069bc9d19.png" alt="user"></img>
                </span>
                Đăng nhập
              </button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  }
export default HeaderUser;
