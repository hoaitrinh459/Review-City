import React from "react";
import HeaderUserComponent from "../../../Components/UserComponent/HeaderUserComponent/HeaderUserComponent";
import FooterUserComponent from "../../../Components/UserComponent/FooterUserComponent/FooterUserComponent";
import { Route } from "react-router-dom";
import UserRouter from "../../../Router/UserRouter/UserRouter";
function PageUserScreen() { 
  return(
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <HeaderUserComponent/>
        <Route path="/vivu">
          <UserRouter />
        </Route>
      <FooterUserComponent />
    </div>
  );
}export default PageUserScreen;