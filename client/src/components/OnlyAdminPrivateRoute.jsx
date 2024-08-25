import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function OnlyAdminPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);

  //Outlet in react-router-dom is used to access the childrens
  return currentUser?.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  );
}

export default OnlyAdminPrivateRoute;
