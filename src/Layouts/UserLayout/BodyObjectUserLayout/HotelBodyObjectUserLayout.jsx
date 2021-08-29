import React from "react";
import ContentCityUserComponent from "../../../Components/UserComponent/ContentCityUserComponent/ContentCityUserComponent"
function BodyObjectUserLayout(props) {
  const hotelobjects = props.arrhotel;
  var hotelobject = []
  const state = props.state;
  if(state ==="noall"){
    if(hotelobjects.length<4)
    hotelobject = hotelobjects;
    else if(hotelobjects.length>=4){
      for(let i=0; i<=3;i++){
            hotelobject.push(hotelobjects[i])
          }
        }
  }
  else if(state ==="all")
  hotelobject=hotelobjects
  return(
    <div className="div-object-city-user-detail-content">
      {hotelobject.map((hotel) =>(
        <ContentCityUserComponent idcity={props.id} id={hotel.id} iduser={hotel.users_permissions_user.id} dataNameObject={hotel.name} dataImgObject={hotel.imgobjects} dataImgUser={hotel.users_permissions_user.img} dataStarObject={hotel.star} dataNameUser={hotel.users_permissions_user.username} dataCategory={hotel.categories.name}/>
      ))}
    </div>
  );
}
export default BodyObjectUserLayout;