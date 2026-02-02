import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBofoKcZwdLknSVNMX79zslPwb6kmIVugU",
  authDomain: "birlaopuspaintsfranchise.firebaseapp.com",
  databaseURL: "https://birlaopuspaintsfranchise-default-rtdb.firebaseio.com",
  projectId: "birlaopuspaintsfranchise",
  storageBucket: "birlaopuspaintsfranchise.firebasestorage.app",
  messagingSenderId: "249113861249",
  appId: "1:249113861249:web:296b7a817983cb7f1bc180",
  measurementId: "G-2MSQNDTVJT",
  databaseURL: "https://birlaopuspaintsfranchise-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
