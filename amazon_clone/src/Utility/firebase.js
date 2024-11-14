// we're importing the core Firebase library, as well as the
// functions for authentication and the Firestore database
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration for the Firebase project you created in the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyAwH3yACKIXiZn0Z69JlgWBk-r0Lapj4cU",
  authDomain: "clone-6e676.firebaseapp.com",
  projectId: "clone-6e676",
  storageBucket: "clone-6e676.firebasestorage.app",
  messagingSenderId: "34276935022",
  appId: "1:34276935022:web:cb8e8d66bf7d09fcf42d7f"
};

// Initialize the Firebase app. This creates a new instance of the Firebase app, which is the entry point for all  Firebase functionality
const app = firebase.initializeApp(firebaseConfig);

// Get the authentication service for signing in and out of your app
export const auth = getAuth(app);

// Get the Firestore database for storing and retrieving data
export const db = app.firestore();

