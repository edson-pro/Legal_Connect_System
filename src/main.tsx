import AuthColumns from "components/layout/AuthColumns.tsx";
import Navigation from "components/layout/Navigation.tsx";
import "index.css";
import Home from "pages/Home.tsx";
import Login from "pages/Login.tsx";
import SignUp from "pages/SignUp.tsx";
import ClientSignup from "pages/signup/ClientSignup";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<Home />} />
        <Route element={<Navigation navbarVariant="transparent" hideFooter={true} />}>
          <Route element={<AuthColumns />}>
            <Route path="login" element={<Login />} />
            <Route path="signup">
              <Route index element={<SignUp />} />
              <Route path="client" element={<ClientSignup />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
