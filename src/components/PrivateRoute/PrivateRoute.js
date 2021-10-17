import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, Isloading} = useAuth()
    if(Isloading){
      return;
    }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/register",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;