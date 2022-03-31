// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5umih8_-xznA1Y1VIjsnmG3qWveV91Mg",
  authDomain: "ferreteria-clientside.firebaseapp.com",
  projectId: "ferreteria-clientside",
  storageBucket: "ferreteria-clientside.appspot.com",
  messagingSenderId: "825736326416",
  appId: "1:825736326416:web:31f483d42452d1007c4995"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp