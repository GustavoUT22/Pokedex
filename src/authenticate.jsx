import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homepage";
import PokeDetail from "./pages/pokedetail";

function AuthenticateApp() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/pokedex" />} />
        <Route path="pokedex" element={<HomePage />} />
        <Route path="pokedex/:id" element={<PokeDetail />} />
        {/* <Route path="applications" element={<YourApplicationsPage />} />
        <Route path="jobs/:id/apply" element={<NewApplicationPage />} />
        <Route path="following" element={<FollowingPage />} />
        <Route path="following/:id" element={<CompanyFollowed />} />
        <Route path="profile" element={<ProfessionalProfile />} /> */}
        <Route path="*" element={<Navigate to="/pokedex" replace={true} />} />
      </Route>
    </Routes>
  );
}

export default AuthenticateApp;
