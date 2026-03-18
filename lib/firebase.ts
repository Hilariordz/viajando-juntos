import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAFPcV9IbySDQOmCLWqlk4dXWa1mFUtnds",
  authDomain: "viajandojuntos-538fb.firebaseapp.com",
  projectId: "viajandojuntos-538fb",
  storageBucket: "viajandojuntos-538fb.firebasestorage.app",
  messagingSenderId: "407870219557",
  appId: "1:407870219557:web:15efe7cd06f75e3912e6cc",
  measurementId: "G-BCH95QNPP5"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, analytics };
