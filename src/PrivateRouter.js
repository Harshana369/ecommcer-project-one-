import { Navigate } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });

export { PrivateRoute };

function PrivateRoute({ children }) {

  const authUser = window.localStorage.getItem("userInfo");


  if (!authUser) {
    return <Navigate to="/login" state={{ from: history.location }} />;
  }

  return children;
}


