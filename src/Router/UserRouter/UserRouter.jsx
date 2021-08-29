import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import CityUserScreen from "../../Screens/UserScreen/CityUserScreen/CityUserScreen";
import ObjectUserScreen from "../../Screens/UserScreen/ObjectUserScreen/ObjectUserScreen";
import ReviewUserScreen from "../../Screens/UserScreen/ReviewUserScreen/ReviewUserScreen";
import BlogUserScreen from "../../Screens/UserScreen/BlogUserScreen/BlogUserScreen";
import AllCityUserScreen from "../../Screens/UserScreen/AllCityUserScreen/AllCityUserScreen";
import AllBlogUserScreen from "../../Screens/UserScreen/AllBlogUserScreen/AllBlogUserScreen";
import UserDetailUserScreen from "../../Screens/UserScreen/UserDetailUserScreen/UserDetailUserScreen";
import HomeUserScreen from "../../Screens/UserScreen/HomeUserScreen/HomeUserScreen";
import SearchPageUserScreen from "../../Screens/UserScreen/SearchPageUserScreen/SearchPageUserScreen";

function UserRouter() {
  const match = useRouteMatch();
  return (
    <>
      <Route exact path={`${match.path}/city/:idCity`}>
        <CityUserScreen />
      </Route>
      <Route exact path={`${match.path}/city/:idCity/:category/:idObject`}>
        <ObjectUserScreen />
      </Route>
      <Route exact path={`${match.path}/city/:idCity/:category/:idObject/review/:idReview`}>
        <ReviewUserScreen/>
      </Route>
      <Route exact path={`${match.path}/blog/:idBlog`}>
        <BlogUserScreen/>
      </Route>
      <Route exact path={`${match.path}/city`}>
        <AllCityUserScreen />
      </Route>
      <Route exact path={`${match.path}/user/:username`}>
        <UserDetailUserScreen />
      </Route>
      <Route exact path={`${match.path}/blog`}>
        <AllBlogUserScreen />
      </Route>
      <Route exact path={`${match.path}/search/:value`}>
        <SearchPageUserScreen />
      </Route>
      <Route exact path={`${match.path}`}>
        <HomeUserScreen />
      </Route>
    </>
  );
}
export default UserRouter;
