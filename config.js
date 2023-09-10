import firebase from "firebase";
require("@firebase/firestore");

// const firebaseConfig = {
//   apiKey: "AIzaSyAdTFPsEJoDDJOu8cxh1rK6z0pTe4QyB7o",
//   authDomain: "biblioteca-eletronica-27177.firebaseapp.com",
//   projectId: "biblioteca-eletronica-27177",
//   storageBucket: "biblioteca-eletronica-27177.appspot.com",
//   messagingSenderId: "601499718101",
//   appId: "1:601499718101:web:0fdd1cbe2ce9bead58ed5c",
//   measurementId: "G-NF498E9XMM"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBpYQlYvrJKWGAf36k-jCNLd1rFEbRomVY",
  authDomain: "bibliotecaeletronica2-b4224.firebaseapp.com",
  projectId: "bibliotecaeletronica2-b4224",
  storageBucket: "bibliotecaeletronica2-b4224.appspot.com",
  messagingSenderId: "872846751185",
  appId: "1:872846751185:web:59b0b3596fa2153f8f1cf0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
