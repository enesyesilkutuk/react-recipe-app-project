import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {

  JSON.parse(sessionStorage.getItem());

  return user ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRouter;