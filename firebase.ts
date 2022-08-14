// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCZwM5oitgMuVWeqk_GUZeY6yN_aY-qcYM',
  authDomain: 'enginner-books-app.firebaseapp.com',
  projectId: 'enginner-books-app',
  storageBucket: 'enginner-books-app.appspot.com',
  messagingSenderId: '571575368804',
  appId: '1:571575368804:web:fc293db439dd03117c3371',
  measurementId: 'G-59739036VH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
