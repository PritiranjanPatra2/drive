import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider ,onAuthStateChanged, setPersistence, browserLocalPersistence} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIiXUa2i4g0XeyOx4AtDJ5aYfCe_9sEEw",
    authDomain: "drive-clone-acaaa.firebaseapp.com",
    projectId: "drive-clone-acaaa",
    storageBucket: "drive-clone-acaaa.appspot.com",
    messagingSenderId: "913170082798",
    appId: "1:913170082798:web:f86d348e2fd906f624bcff",
    measurementId: "G-088FPQXKK0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
setPersistence(auth, browserLocalPersistence);

export { app, db, storage, auth, provider, serverTimestamp, ref, uploadBytes, getDownloadURL ,onAuthStateChanged};
