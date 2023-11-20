import MatchedLawyerProfiles from "components/client-portal/onboarding-forms/MatchedLawyerProfiles";
import AuthColumns from "components/layout/AuthColumns.tsx";
import Navigation from "components/layout/Navigation.tsx";
import ClientPortalNavigation from "components/layout/clientPortal/ClientPortalNavigation";
import OnboardingSplitColumns from "components/layout/clientPortal/OnboardingSplitColumns";
import LawyerDashboardNavigation from "components/layout/lawyer-dashboard/LawyerDashboardNavigation";
import "index.css";
import ConfirmationWaiting from "pages/AccountConfirmationStatus";
import ClientPortalOnboarding from "pages/ClientPortalOnboarding";
import Home from "pages/Home.tsx";
import Login from "pages/Login.tsx";
import SignUp from "pages/SignUp.tsx";
import ClientPortalHome from "pages/client-portal/ClientPortalHome";
import LawyerProfile from "pages/client-portal/LawyerProfile";
import LawyerDashboardHome from "pages/lawyer-dashboard/LawyerDashboardHome";
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
        <Route path="client-portal">
          <Route element={<ClientPortalNavigation />}>
            <Route index element={<ClientPortalHome />} />
            <Route path="lawyers">
              <Route path=":id" element={<LawyerProfile />} />
            </Route>
          </Route>
          <Route path="onboarding">
            <Route element={<OnboardingSplitColumns />}>
              <Route index element={<ClientPortalOnboarding />} />
            </Route>
            <Route element={<ClientPortalNavigation />}>
              <Route path="matched-lawyers" element={<MatchedLawyerProfiles />} />
            </Route>
          </Route>
        </Route>
        <Route path="lawyer-dashboard" element={<LawyerDashboardNavigation />}>
          <Route index element={<LawyerDashboardHome />} />
          <Route path="cases" element={<LawyerDashboardHome />} />
          <Route path="connects" element={<LawyerDashboardHome />} />
          <Route path="finance" element={<LawyerDashboardHome />} />
          <Route path="profile" element={<LawyerDashboardHome />} />
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
