import React from "react";
import ContentCityUserComponent from "../../../Components/UserComponent/ContentCityUserComponent/ContentCityUserComponent"
function DiscoverBodyObjectUserLayout(props) {
  const discoverobjects = props.arrdiscover;
  var discoverobject = []
  const state = props.state;
  if(state ==="noall"){
    for(let i=0; i<=3;i++){
      discoverobject.push(discoverobjects[i])
        }
  }
  else if(state ==="all")
  discoverobject=discoverobjects
  return(
    <div className="div-object-city-user-detail-content">
      {discoverobject.map((discover) =>(
        <ContentCityUserComponent idcity={props.id} id={discover.id} iduser={discover.users_permissions_user.id} dataNameObject={discover.name} dataImgObject={discover.imgobjects} dataImgUser={discover.users_permissions_user.img} dataStarObject={discover.star} dataNameUser={discover.users_permissions_user.username} dataCategory={discover.categories.name}/>
      ))}
    </div>
  );
}
export default DiscoverBodyObjectUserLayout;