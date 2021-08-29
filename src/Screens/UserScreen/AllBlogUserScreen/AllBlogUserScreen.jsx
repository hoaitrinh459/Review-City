import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadAllBlog } from "../../../Redux/UserRedux/ActionsUser/BlogActionUser";
import './AllBlogUserScreen.css';
import BlogHomeUserComponent from "../../../Components/UserComponent/BlogHomeUserComponent/BlogHomeUserComponent";
import LoadingModal from "react-loading-bubbles";
function AllBlogUserScreen() {
  const dispatch = useDispatch();
  const allblog = useSelector((state) => state.allblog.data);
  const requesting = useSelector((state) => state.allblog.requesting);
  useEffect(() => {
    dispatch(loadAllBlog());
  }, [dispatch]);

  return(
    <div className="all-city-user-screen">
      <div className="all-city-user">
        <div className="all-city-user-content">
          <h1 className="h1-title-all-city-and-blog">Blog</h1>
            {
              requesting ?
              <LoadingModal size={128} color="#23D3D3" />
              :
                (allblog && allblog.length > 0)?
                <div className="all-blog-user-content-detail">
                {allblog.map((blog) => (
                  <BlogHomeUserComponent dataTitleBlog={blog.title} dataImgBlog={blog.img} id={blog.id}/>
                ))}
                </div>
                : <div>Không tìm thấy blog nào.</div>
            } 
        </div>
      </div>
    </div>
  );
}
export default AllBlogUserScreen;