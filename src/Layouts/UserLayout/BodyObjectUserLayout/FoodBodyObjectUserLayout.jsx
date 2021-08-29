import React from "react";
import ContentCityUserComponent from "../../../Components/UserComponent/ContentCityUserComponent/ContentCityUserComponent"
function FoodBodyObjectUserLayout(props) {
  const foodobjects = props.arrfood;
  var foodobject = []
  const state = props.state;
  if(state ==="noall"){
    if(foodobjects.length<4)
    foodobject = foodobjects;
    else if(foodobjects.length>=4){
      for(let i=0; i<=3;i++){
        foodobject.push(foodobjects[i]);
          }
        }
  }
  else if(state ==="all")
  foodobject=foodobjects
  return(
    <div className="div-object-city-user-detail-content">
      {foodobject.map((food) =>(
        <ContentCityUserComponent idcity={props.id} id={food.id} iduser={food.users_permissions_user.id} dataNameObject={food.name} dataImgObject={food.imgobjects} dataImgUser={food.users_permissions_user.img} dataStarObject={food.star} dataNameUser={food.users_permissions_user.username} dataCategory={food.categories.name}/>
      ))}
    </div>
  );
}
export default FoodBodyObjectUserLayout;