import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homepage";
import PokeDetail from "./pages/pokedetail";
import ProfilePage from "./pages/profile-page";
import FavoritesPage from "./pages/favorites-page";
import Footer from "./components/footer";
import styled from "@emotion/styled";

const Main = styled.main`
  margin: auto;
  background: linear-gradient(to top, #beafc2, #695e93, #8155ba, #281c2d);
`;

function AuthenticateApp() {
  return (
    <Main>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/pokedex" />} />
          <Route path="pokedex" element={<HomePage />} />
          <Route path="pokedex/:id" element={<PokeDetail />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/pokedex" replace={true} />} />
        </Route>
      </Routes>
      <Footer />
    </Main>
  );
}

export default AuthenticateApp;
