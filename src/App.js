import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './login';
import { Link } from 'react-router-dom';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = process.env.REACT_APP_AUTH0_REDIRECT_URI;

const App = () => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
    >
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<h1>Welcome to my app!</h1>} />
          </Routes>
        </div>
      </Router>
    </Auth0Provider>
  );
};

export default App;
