import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import {apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId} from "react-native-dotenv"
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: apiKey,
//   authDomain: authDomain,
//   projectId: projectId,
//   storageBucket: storageBucket,
//   messagingSenderId: messagingSenderId,
//   appId: appId,
// };
const firebaseConfig = {
    apiKey: "AIzaSyDmk6q5FrM5kKOY6Qdt49iJQXzoUdKUgjc",
    authDomain: "cs5520-mobile-expensetracker.firebaseapp.com",
    projectId: "cs5520-mobile-expensetracker",
    storageBucket: "cs5520-mobile-expensetracker.appspot.com",
    messagingSenderId: "557280458235",
    appId: "1:557280458235:web:6e41f790352cfe4f68075e",
    measurementId: "G-MX721Q4CZ4"
  };

let myApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(myApp);
console.log(module.exports);
