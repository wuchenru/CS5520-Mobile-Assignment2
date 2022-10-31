import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId} from "@env";

const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
  };

let myApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(myApp);
