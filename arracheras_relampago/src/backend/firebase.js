import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA2sjvmBO42BExtH8dzYgbbIgXVyplkzPM",
  authDomain: "mujeres-viajeras-11081.firebaseapp.com",
  projectId: "mujeres-viajeras-11081",
  storageBucket: "mujeres-viajeras-11081.appspot.com",
  messagingSenderId: "497388408605",
  appId: "1:497388408605:web:03648109791922d5791bf4"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const firestore = firebase.firestore()