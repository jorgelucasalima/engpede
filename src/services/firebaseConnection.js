import firebase from 'firebase/compat/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCfHNVK7UZNKznBBgLkaynSErc2Vz2sS20",
  authDomain: "engpede.firebaseapp.com",
  projectId: "engpede",
  storageBucket: "engpede.appspot.com",
  messagingSenderId: "932265153916",
  appId: "1:932265153916:web:552e8c5be1051889f740f9",
  measurementId: "G-ZKHNFFMS7Y"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
  

export default firebase;