// import { getAuth,signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { collection, writeBatch} from 'firebase/firestore'


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const provider = new GoogleAuthProvider();
// provider.setCustomParameters
// ({prompt:'select_account'})


// export const auth= getAuth();

// export const signinwithGoogle =()=>signInWithPopup(auth,provider);

// export const signupwithemailandpassword =async(email,password)=> 
//   createUserWithEmailAndPassword(auth,email, password)

// export const loginwithemailandpassword =async(email,password)=> 
// signInWithEmailAndPassword(auth,email, password)

// export const db = getFirestore();

// export const  createUserDoc = async (userAuth, otherinfo)=>{

//    const userDocRef=   doc(db,'users', userAuth.uid )

//   console.log("in firebase",userDocRef)

//  const userSnapshot = await getDoc(userDocRef)
  
//    console.log("in firebase",userSnapshot)
//   console.log(userSnapshot.exists())

//   if(!userSnapshot.exists()){
//   const {displayName,email,}= userAuth;
//   const createdat = new Date();

//   try{
//     await setDoc(userDocRef, {displayName,email, ...otherinfo} )
//   }
//   catch(error){
//  console.log("error in creating", error.message);

//   }

// } 
// return userDocRef;

// }
// export async function addcollectionanddocuments(collectionkey, objectstoadd)
// {
//   const collectionRef =  collection(db, collectionkey);  
//   const batch = writeBatch(db);

//   objectstoadd.forEach((object) => {
//     const docRef = doc(collectionRef, object.name.toLowerCase()); 
//     batch.set(docRef, object); 
//   })

//   await batch.commit(); 
//   console.log("transaction is successful"); 
// }


import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch
} from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(
  "Firebase API key loaded:",
  Boolean(firebaseConfig.apiKey)
);

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth(app);

export const signinwithGoogle = () =>
  signInWithPopup(auth, provider);

export const signupwithemailandpassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginwithemailandpassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const db = getFirestore(app);

export const createUserDoc = async (userAuth, otherinfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("in firebase", userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log("in firebase", userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        ...otherinfo
      });
    } catch (error) {
      console.log("error in creating", error.message);
    }
  }

  return userDocRef;
};

export async function addcollectionanddocuments(collectionkey, objectstoadd) {
  const collectionRef = collection(db, collectionkey);
  const batch = writeBatch(db);

  objectstoadd.forEach((object) => {
    const docRef = doc(collectionRef, object.name.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();

  console.log("transaction is successful");
}

















    

