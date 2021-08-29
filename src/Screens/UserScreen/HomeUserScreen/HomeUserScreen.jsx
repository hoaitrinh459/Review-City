import React from "react";
import './HomeUserScreen.css';
import HomeUserLayout from "../../../Layouts/UserLayout/HomeUserLayout/HomeUserLayout";
import CityHomeUserComponent from "../../../Components/UserComponent/CityHomeUserComponent/CityHomeUserComponent";
import BlogHomeUserComponent from "../../../Components/UserComponent/BlogHomeUserComponent/BlogHomeUserComponent";
import Modal from "react-modal";
import AddBlogUserLayout from "Layouts/UserLayout/AddBlogUserLayout/AddBlogUserLayout";
import {useState, useEffect} from "react";
import {IoMdClose} from"react-icons/io";
import {GoPlus} from 'react-icons/go';
import { loadCity } from "../../../Redux/UserRedux/ActionsUser/CityActionUser";
import { loadBlog } from "../../../Redux/UserRedux/ActionsUser/BlogActionUser";
import LoadingModal from "react-loading-bubbles";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import LoginUserLayout from "../../../Layouts/UserLayout/LoginUserLayout/LoginUserLayout";
import {reactLocalStorage} from 'reactjs-localstorage';
import { toast } from 'react-toastify';

function HomeUserScreen() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenCheckLogin, setmodalIsOpenCheckLogin] = useState(false);
  const [user, setUser] = useState(reactLocalStorage.getObject("user"));
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city.data);
  const requesting = useSelector((state) => state.city.requesting);
  useEffect(() => {
    dispatch(loadCity(8));
  }, [dispatch]);

  const dispatchBlog = useDispatch();
  const blog = useSelector((state) => state.blog.data);
  const requestingBlog = useSelector((state) => state.blog.requesting);
  useEffect(() => {
    dispatchBlog(loadBlog(6));
  }, [dispatchBlog]);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

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
  return (
    <div className="home-user">
      <Modal className="modal-login-user-log"
        isOpen={modalIsOpenCheckLogin}
        onRequestClose={closeModalCheckLogin}
      >
        <div>
          <LoginUserLayout/>
        </div>
      </Modal>
      <div>
      <HomeUserLayout />
      {
        (requesting|requestingBlog) ?
        <LoadingModal size={128} color="#23D3D3" />
        :(
        <div>
        <div className="home-body">
        <div className="home-body-container">
          <div className="home-body-user">
            <div className="title-home-body-user">
              <h1><Link className="h1-title-city-home-user" to={`/vivu/city`}>Thành phố</Link></h1>
            </div>
            {(city && city.length > 0)?
            <div className="home-flex-city">
              {city.map((city) => (
                <CityHomeUserComponent dataNameCity={city.name} dataImgCity={city.img} id={city.id}/>
              ))}
            </div>
              
            : <div>Không tìm thấy thành phố nào.</div>
            }
          </div>
          <div className="home-body-user">
            <div className="title-home-body-user blog-title-home-body-user"> 
              <h1><Link className="h1-title-city-home-user" to={`/vivu/blog`}>Blog</Link></h1>
              <div className="add-new-blog-user">
                <button onClick={checklogin} className="map-city-user-content"><GoPlus/>Thêm blog</button>
              </div>
            </div>
            {(blog && blog.length > 0)?
            <div className="home-flex-blog">
              {blog.map((blog) => (
              <BlogHomeUserComponent dataTitleBlog={blog.title} dataImgBlog={blog.img} id={blog.id}/>
              ))}
            </div>
            : <div>Không tìm thấy blog nào.</div>
          }
          </div>
        </div>
      </div>
      <Modal className="modal-user-add-new-object"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}

      >
        <div className="modal-user-add-new-object-content-btn-close">
        <button onClick={closeModal} className="modal-user-btn-close"><IoMdClose/></button>
        </div>
        <AddBlogUserLayout/>
      </Modal>
    </div>
        )}
      </div>
    </div>
  );
}

export default HomeUserScreen;
