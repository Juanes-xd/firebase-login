import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC4A7AwnQHdC2Zbq2LaTRQpFhriVao9kUc",
    authDomain: "prueba-6dcae.firebaseapp.com",
    projectId: "prueba-6dcae",
    storageBucket: "prueba-6dcae.appspot.com",
    messagingSenderId: "291716469992",
    appId: "1:291716469992:web:f13b87729899292ae0e55d",
    measurementId: "G-2S5ZFVBTV6"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth()

  export {auth}
 // const analytics = getAnalytics(app);