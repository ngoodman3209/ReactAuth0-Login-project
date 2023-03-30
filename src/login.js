import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [error, setError] = useState(null);

  const handleLogin = () => {
    loginWithRedirect()
      .catch((error) => {
        setError(error);
      });
  };

  if (isAuthenticated) {
    return <div>You are logged in!</div>;
  }

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default Login;
