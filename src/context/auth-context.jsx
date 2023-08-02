import { createContext, useContext, useEffect, useState } from "react";

import { getUser, createUser, updateUser } from "../services/user-services";
import * as auth from "../services/session-services";
import { tokenKey } from "../config";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);

  function login(credentials) {
    auth.login(credentials).then(setUser).catch(console.log);
  }

  function logout() {
    auth.logout().then(setUser(null));
  }

  function signup(userData) {
    createUser(userData).then(setUser).catch(console.log);
  }

  function editProfile(userData) {
    updateUser(userData).then(setUser).catch(console.log);
  }

  const value = {
    user,
    login,
    logout,
    signup,
    editProfile,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
