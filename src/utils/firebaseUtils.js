import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export const signup = async (email, password) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw new Error(error.message);
  }
};
