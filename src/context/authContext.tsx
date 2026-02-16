import React from "react";
import { authProvider } from "../scripts/auth";
import { Navigate, useLocation } from "react-router-dom";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

//Provider para manejar el estado del usuario y las funciones de inicio y cierre de sesion
export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(() => {
    return localStorage.getItem("user");
  });


  let signin = (newUser: string, callback: VoidFunction) => {
    return authProvider.signin(() => {
      localStorage.setItem("user", newUser);
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return authProvider.signout(() => {
      localStorage.removeItem("user");
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

//usar contexto para la sesion del usuario
export function useAuth() {
  return React.useContext(AuthContext);
}

//Envoltura para componentes de paginas que requieran sesion iniciada
export function RequireAuth({ children }: { children: React.JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

//Envoltura para componentes de paginas que requieran no tener sesion iniciada
export function RequireSignedOut({ children }: { children: React.JSX.Element }) {
  let auth = useAuth();

  if (auth.user) {
    //No guarda la ubicacion actual
    return <Navigate to="/user" replace />;
  }

  return children;
}