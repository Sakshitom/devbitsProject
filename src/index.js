import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Auth0Provider
  domain="dev-2tvdstu5t3xjg1kw.us.auth0.com"
  clientId="3AepImso3EWuIHQYNx3KlwWiQDTWIpFP"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
document.getElementById("root")
</BrowserRouter>
);

