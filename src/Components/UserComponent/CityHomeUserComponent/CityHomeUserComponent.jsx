import React from "react";
import './CityHomeUserComponent.css';
import {Link} from "react-router-dom";
function CityHomeUserComponent(props) {
  return (
    <div className="city-home-user-content">
      <Link to={`/vivu/city/${props.id}`} className="name-city-home-user-content">{props.dataNameCity}</Link>
      <div className="city-home-user-content-img">
        <Link to={`/vivu/city/${props.id}`}>
          <img className="img-city-home-user-content" src={props.dataImgCity} alt={props.dataNameCity} />
        </Link>
      </div>
    </div>
  );
}

export default CityHomeUserComponent;