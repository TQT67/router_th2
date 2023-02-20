import React from "react";
import ProtectedGroup from "./ProtectedGroup";
import PrivateGroup from "./PrivateGroup";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/private-group",
    element: (
      <ProtectedGroup isMember={false}>
        <Route path="/private-group" component={PrivateGroup} />
      </ProtectedGroup>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
