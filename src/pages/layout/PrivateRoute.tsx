import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hook/hooks";

const ProtectedRoutes = () => {
  const location = useLocation();
  const { user } = useAppSelector((state) => state.auth);
  // TODO: remove === null after done testing
  return user === null ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
