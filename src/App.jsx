import AuthenticateApp from "./authenticate";
import UnauthenticateApp from "./unanthenticate";
import { useAuth } from "./context/auth-context";
function App() {
  const { user } = useAuth();

  return <>{user ? <AuthenticateApp /> : <UnauthenticateApp />}</>;
}

export default App;
