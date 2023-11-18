import AuthColumns from "components/layout/AuthColumns.tsx";
import Navigation from "components/layout/Navigation.tsx";
import ClientPortalNavigation from "components/layout/dashboard/client/ClientPortalNavigation";
import "index.css";
import ConfirmationWaiting from "pages/AccountConfirmationStatus";
import Home from "pages/Home.tsx";
import Login from "pages/Login.tsx";
import SignUp from "pages/SignUp.tsx";
import ClientPortalHome from "pages/dashboard/client/ClientPortalHome";
import ClientSignup from "pages/signup/ClientSignup";
import LawyerSignup from "pages/signup/LawyerSignup";
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
              <Route path="lawyer" element={<LawyerSignup />} />
            </Route>
          </Route>
        </Route>
        <Route element={<Navigation hideFooter={true} />}>
          <Route path="account-confirmation-status" element={<ConfirmationWaiting />} />
        </Route>
        <Route path="/client-portal" element={<ClientPortalNavigation />}>
          <Route index element={<ClientPortalHome />} />
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
