import './App.css';
import intializeAuthentication from './Firebase/firebase.intialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useState } from 'react/cjs/react.development';

intializeAuthentication();


const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {

        const { displayName, email, photoURL } = result.user;
        const LoggedUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(LoggedUser)
      });
  };
  const handelGithubSurch = () => {
    signInWithPopup(auth, GithubProvider)
      .then((result) => {

        const { displayName, email, photoURL } = result.user;
        const LoggedUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        console.log(result.user)
        setUser(LoggedUser)
      });


  }
  // console.log(user)
  return (
    <div className="App">
      <button onClick={handleGoogleSingIn}>Google Sing in Here </button>
      <button onClick={handelGithubSurch}>GitHub Sing in Here </button>
      {
        user.photo && <div>
          <h1>wellcame {user.name}</h1>
          <p>Your email address is {user.email}</p>
          <img src={user.photo}></img>
        </div>
      }

    </div>
  );
}

export default App;
