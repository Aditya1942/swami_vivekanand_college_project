import { createContext, useContext, useEffect, useState } from "react";
import { Redirect, Route, useHistory, useRouteMatch } from "react-router";

export const authContext = createContext({});

export function ProvideAuth({ children }) {
  const [auth, setAuth] = useState({ loading: true, data: null });
  const setAuthData = (data, cb) => {
    setAuth({ data: data });
    cb();
  };

  useEffect(() => {
    setAuth({
      loading: false,
      data: JSON.parse(window.localStorage.getItem("token")),
    });
  }, []);
  //2. if object with key 'authData' exists in localStorage, we are putting its value in auth.data and we set loading to false.
  //This function will be executed every time component is mounted (every time the user refresh the page);

  useEffect(() => {
    window.localStorage.setItem("token", JSON.stringify(auth.data));
  }, [auth.data]);
  // 1. when **auth.data** changes we are setting **auth.data** in localStorage with the key 'authData'.

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export function PrivateRoute({ children, ...rest }) {
  let { path, url } = useRouteMatch();
  const { auth } = useContext(authContext);
  const { loading } = auth;
  if (loading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <p>Loading...</p>;
        }}
      />
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.data ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `${path}/signin`,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
