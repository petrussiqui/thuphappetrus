//phân quyền

import { Navigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { ACCESS_TOKEN_KEY, SCOPES_KEY } from '../settings/constants';
import ScopeValidate from '../components/ScopeValidate';

export const isLoggedIn = () => localStorage.getItem(ACCESS_TOKEN_KEY) !== null;

export const requiredAuth = (element, validScopes) => {
  const Page = element;
  const loggedIn = isLoggedIn();

  if (!loggedIn) return <Navigate to="/login" replace={false} />;
  return (
    <ScopeValidate validScopes={validScopes}>
      <Page />
    </ScopeValidate>
  );
};

export const checkLockedPage = (element) => {
  const Page = element;
  const loggedIn = isLoggedIn();
  if (loggedIn) return <Navigate to="/" replace={false} />;
  return <Page />;
};

// ------------------------------------------------------------------

export const logoutReturnTo = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(SCOPES_KEY);
  window.location.reload();
};

export const logout = (callback) => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  if (callback) {
    callback();
  } else window.location.reload();
};

export const setAccessToken = (accessToken) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, Encrypt(accessToken, ACCESS_TOKEN_KEY));
};

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) return null;
  return Decrypt(accessToken, ACCESS_TOKEN_KEY);
  // return window.localStorage.getItem("MEGA_ACCESS_TOKEN");
};

export const setScopes = (scopes) => {
  localStorage.setItem(SCOPES_KEY, Encrypt(JSON.stringify(scopes), SCOPES_KEY));
};

export const checkScope = (scope) => {
  const scopesData = localStorage.getItem(SCOPES_KEY);
  if (!scopesData) return null;
  const scopes = JSON.parse(Decrypt(scopesData, SCOPES_KEY));
  return scopes.indexOf(scope) >= 0;
};

export const Encrypt = (message, privateKey) => CryptoJS.AES.encrypt(message, privateKey).toString();

export const Decrypt = (ciphertext, privateKey) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, privateKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
