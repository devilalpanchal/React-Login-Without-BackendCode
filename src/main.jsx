import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-r10wcysyf2f1xguj.us.auth0.com"
    clientId="XXR5M8in75tjspYbG7noB7Nx65bz8YEi"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
