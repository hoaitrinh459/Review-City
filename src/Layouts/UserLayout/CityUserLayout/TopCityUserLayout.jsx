
import ParagraphShowComponent from "Components/UserComponent/ParagraphShowComponent/ParagraphShowComponent";
import React from "react";
import './TopCityUserLayout.css'
function TopCityUserLayout(props) {
  return (
    <div className="top-city-user-layout">
      <div className="div-top-city-user-layout">
        <img className="img-top-city-user-layout" src={props.imgCity} alt={props.nameCity}></img>
        <h1 className="h1-top-city-user-layout">{props.nameCity}</h1>
      </div>
      <div className="describe-top-city-user-layout">
        <div className="describe-content-top-city-user-layout">
          <h1 className = "h1-top-city-describe-user-layout">Giới thiệu</h1>
          <ParagraphShowComponent dataDescribeObject = {props.describeCity}/>
        </div>
      </div>
    </div>
    );
}

export default TopCityUserLayout;