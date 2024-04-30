import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./auth/AuthContext";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className=" h-screen flex justify-center  items-center">
        <h1 className="text-3xl text-red-600 font-semibold">Loading...</h1>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Private;
