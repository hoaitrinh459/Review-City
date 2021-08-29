import React from "react";
import {Link} from "react-router-dom";
import './BlogHomeUserComponent.css';
function BlogHomeUserComponent(props) {
  return (
    <div className="blog-home-user">
      <div className="blog-home-user-content">
        <Link to={`/vivu/blog/${props.id}`} className="a-blog-home-user-content">
          <img className="img-blog-home-user-content" src={props.dataImgBlog} alt={props.dataTitleBlog} /></Link>
      </div>
      <div className="div-name-blog-home-user-content">
        <Link to={`/vivu/blog/${props.id}`} className="name-blog-home-user-content">{props.dataTitleBlog}</Link>
      </div>
    </div>
  );
}

export default BlogHomeUserComponent;