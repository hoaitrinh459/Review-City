import React from "react";
import './BlogUserScreen.css';
import BlogHomeUserComponent from "../../../Components/UserComponent/BlogHomeUserComponent/BlogHomeUserComponent"
import { loadBlogDetails, loadBlog } from "../../../Redux/UserRedux/ActionsUser/BlogActionUser";
import LoadingModal from "react-loading-bubbles";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";

function BlogUserScreen() {
  const dispatch = useDispatch();
  const blogdetails = useSelector((state) => state.blogdetails.data);
  console.log("blogdetails",blogdetails)
  const requesting = useSelector((state) => state.blogdetails.requesting);
  const match = useRouteMatch();
  useEffect(() => {
    dispatch(loadBlogDetails(match.params.idBlog));
  }, [match.params.idBlog]);

  const dispatchOtherblog = useDispatch();
  const otherblog = useSelector((state) => state.blog.data);
  console.log("otherblog", otherblog)
  const requestingOtherblog = useSelector((state) => state.blog.requesting);
  useEffect(() => {
    dispatchOtherblog(loadBlog(3));
  }, [dispatchOtherblog]);

  return(
    <div className="blog-user-screen">
      {
        requesting|requestingOtherblog?
        <LoadingModal size={128} color="#23D3D3" />
        :(blogdetails!==null)?
        <div>
      <div className="blog-user">
        <div className="blog-user-content">
          <div className="blog-user-content-details">
          <div className="blog-user-content">
            <div className="blog-user-name-and-avatar">
              <Link className="a-blog-user-name-and-avatar">
                <img className="img-blog-user-name-and-avatar" src={blogdetails.users_permissions_user.img} alt={blogdetails.title}/>
              </Link>
              <Link className="name-blog-user-name-and-avatar">{blogdetails.users_permissions_user.username}</Link>
            </div>
              <h2 className="h2-title-blog-user">{blogdetails.title}</h2>
              <div className="describe-blog-user">{blogdetails.describe}</div>
          </div>
          </div>
        </div>
      </div>
      <div className="other-blog-user">
        <div className="other-blog-user-content">
          <div className="title-other-blog-user">
            <h2 className="title-other-user">Cùng xem các bài blog khác nhé!</h2>
          </div>
          <div className="list-other-blog-user">
            {otherblog.map((blog)=>(
              <BlogHomeUserComponent dataImgBlog={blog.img} dataTitleBlog={blog.title} id={blog.id}/>
            ))}
          </div>
        </div>
      </div>
      </div>
      :<div>Không tìm thấy blog này.</div>
      }
    </div>
  );
}
export default BlogUserScreen;