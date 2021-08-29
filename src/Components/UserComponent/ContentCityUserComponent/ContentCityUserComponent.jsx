import React from "react";
import './ContentCityUserComponent.css';
import ReactStars from 'react-stars';
import {IoBed, IoFastFood} from "react-icons/io5";
import {FaBinoculars} from "react-icons/fa";
import {Link} from "react-router-dom";

function ContentCityUserComponent(props) {
  var urlcategory;
  var category;
  const categorys = props.dataCategory;
  if(categorys === 'Khách sạn'){
    urlcategory="hotel";
    category=<IoBed/>
  }
  else if(categorys === 'Ẩm thực'){
    urlcategory="food";
    category=<IoFastFood/>
  }
    else if(categorys === 'Khám phá'){
      urlcategory="discover";
      category=<FaBinoculars/>
    }
  return(
    <div className="object-city-user-component">
      <Link to={`/vivu/city/${props.idcity}/${urlcategory}/${props.id}`} className="a-icon-city-user-component">{category}</Link>
      <div className="object-city-user-component-content-img">
        <Link to={`/vivu/city/${props.idcity}/${urlcategory}/${props.id}`}>
          <img className="img-object-city-user-component-content" src={props.dataImgObject[0].url} alt={props.dataNameObject} />
        </Link>
      </div>
      <div className="div-object-city-user-component-content">
        <Link to={`/vivu/city/${props.idcity}/${urlcategory}/${props.id}`} className="object-city-user-component-content">{props.dataNameObject}</Link>
      </div>
      <div className="object-city-user-component-star-and-user">
        <div className="div-star-object-city-user-component">
          <ReactStars className="react-start"
          count={5} 
          size={20} 
          color2={'#ffd700'} 
          value={props.dataStarObject}
          edit={false}/>
        </div>
        <div className="div-a-object-user-add-city-user-component-content">
          <Link to={`/vivu/user/${props.iduser}`} className="a-object-user-add-city-user-component-content">
            <img className="img-sobject-user-add-city-user-component-content" src={props.dataImgUser} alt={props.dataNameUser} editing={false}/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContentCityUserComponent;