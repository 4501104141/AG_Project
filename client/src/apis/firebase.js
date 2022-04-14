import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCksN0BDvWPDflnopR1yIenMJ38PE3Zc3U",
    authDomain: "soffee-255ca.firebaseapp.com",
    projectId: "soffee-255ca",
    storageBucket: "soffee-255ca.appspot.com",
    messagingSenderId: "748439999919",
    appId: "1:748439999919:web:38f5647f724a8226aecb5a",
    measurementId: "G-QXKS9BYMH0"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
