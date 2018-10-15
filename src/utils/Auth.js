// src/Auth/Auth.js

import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'react-workshop.auth0.com',
    clientID: 'VIihVYudbhQTk7AI8cATwNU1XhVqiaEA',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }

  handleAuth(cb) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        window.hash = "";
        cb();
      } else if (err) {
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    let tokens = {
      accessToken: authResult.accessToken,
      idToken: authResult.idToken,
      expiresAt: expiresAt
    };
    localStorage.setItem("tokens", JSON.stringify(tokens));
  }

  isAuthenticated() {
    let tokens = JSON.parse(localStorage.getItem("tokens"));

    return tokens && (tokens.expiresAt > (new Date()).getTime());
  }

  logout() {
    localStorage.removeItem("tokens");
  }
}