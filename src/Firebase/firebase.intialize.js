import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";


const intializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
// const app = initializeApp(firebaseConfig);
export default intializeAuthentication;