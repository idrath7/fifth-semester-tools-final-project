import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDLvPimVru9_r9O0Q7FFxbnEApBDdF87c",
  authDomain: "arcadehub-700ef.firebaseapp.com",
  projectId: "arcadehub-700ef",
  storageBucket: "arcadehub-700ef.firebasestorage.app",
  messagingSenderId: "1020076445291",
  appId: "1:1020076445291:web:b9cf86103372ace1306b2e",
  measurementId: "G-5DQJKNPGNF",
};

export const configured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId &&
  firebaseConfig.appId,
);

export const app = configured ? initializeApp(firebaseConfig) : null;
export const analytics = app ? getAnalytics(app) : null;
export const auth = app ? getAuth(app) : null;
export const googleProvider = app ? new GoogleAuthProvider() : null;
export const githubProvider = app ? new GithubAuthProvider() : null;
