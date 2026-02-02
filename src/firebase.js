import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyASwVIYZRz3q0bFa3_hCJr5aAuX6LqfZxY",
  authDomain: "opuspaintsfranchise-dd3e3.firebaseapp.com",
  projectId: "opuspaintsfranchise-dd3e3",
  storageBucket: "opuspaintsfranchise-dd3e3.firebasestorage.app",
  messagingSenderId: "1025380636445",
  appId: "1:1025380636445:web:76d7b8f47bbecd317ff3f4",
  measurementId: "G-RCPH51DTYW",
  databaseURL: "https://opuspaintsfranchise-dd3e3-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
