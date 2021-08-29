import React from "react";
import './ReviewObjectUserComponent.css';
import ReactStars from 'react-stars';
import {Link} from 'react-router-dom';

function ReviewObjectUserComponent(props) {
  var urlcategory;
  const categorys = props.category;
  if(categorys === 'Khách sạn'){
    urlcategory="hotel";
  }
  else if(categorys === 'Ẩm thực'){
    urlcategory="food";
  }
    else if(categorys === 'Khám phá'){
      urlcategory="discover";
    }
  return(
    <div className="review-object-user-component">
      <div className="review-object-user-component-star-and-user">
        <div className="div-a-review-object-user-add-component-content">
          <Link to = {`/vivu/user/${props.iduser}`} className="a-review-object-user-add-review-user-component-content">
            <img className="img-review-object-user-add-riview-user-component-content" src={props.dataImgUserReview} alt={props.dataNameUserReview}/>
          </Link>
          <Link to = {`/vivu/user/${props.iduser}`}  className="a-review-object-title-user">{props.dataNameUserReview}</Link>
        </div>
        <div className="review-object-user-star">
          <ReactStars
          count={5}
          color2={'#ffd700'} 
          value={props.dataStarReview}/>
        </div>
      </div>
      <div className="div-review-object-user-component-title">
        <Link to = {`/vivu/city/${props.idCity}/${urlcategory}/${props.id}/review/${props.idreview}`} className="review-object-user-component-title">{props.dataTitleReview}</Link>
      </div>
      <div className="review-object-user-component-content-img">
        <Link to = {`/vivu/city/${props.idCity}/${urlcategory}/${props.id}/review/${props.idreview}`}>
          <img className="img-review-object-user-component-content" src={props.dataImgReview} alt={props.dataTitleReview} />
        </Link>
      </div>
    </div>
  );
}
export default ReviewObjectUserComponent;