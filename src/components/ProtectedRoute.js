// import React from "react";
// import { redirect, Route } from "react-router";

// const ProtectedRoute = (props) => {
//     return (
//         <Route>
//             {() => (props.loggedIn ? props.children : redirect("/sign-in"))}
//         </Route>
//     );
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

function ProtectedRouteElement({ component: Component, ...props }) {
  return props.isLogged ? <Component {...props} /> : <Navigate to="/sign-in" />;
}

export default ProtectedRouteElement;
