import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import HomeAdmin from "../../Screens/AdminScreen/HomeAdmin"
function AdminRouter() {
  const match = useRouteMatch();
  return (
    <Route path={`${match}/home`}>
      <HomeAdmin />
    </Route>
  );
}

export default AdminRouter;
