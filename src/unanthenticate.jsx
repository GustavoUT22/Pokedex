import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/login-page";
import SignupPage from "./pages/signup-page";

function UnauthenticateApp() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        {/* <Route path="applications" element={<YourApplicationsPage />} />
        <Route path="jobs/:id/apply" element={<NewApplicationPage />} />
        <Route path="following" element={<FollowingPage />} />
        <Route path="following/:id" element={<CompanyFollowed />} />
        <Route path="profile" element={<ProfessionalProfile />} /> */}
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Route>
    </Routes>
  );
}

export default UnauthenticateApp;
