
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCU5TSb7btzJS2ZN5hXC5NCAqz4mG810Ws",
  authDomain: "kalki-packers-and-movers.firebaseapp.com",
  projectId: "kalki-packers-and-movers",
  storageBucket: "kalki-packers-and-movers.firebasestorage.app",
  messagingSenderId: "533372525302",
  appId: "1:533372525302:web:275b0018c1070da3d6ead7",
  measurementId: "G-4Q8VNHY1RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Analytics if in browser environment
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
