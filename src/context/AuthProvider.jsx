import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, reauthenticateWithCredential, signInWithEmailAndPassword } from 'firebase/auth';
import { EmailAuthProvider } from 'firebase/auth/web-extension';

const AuthProvider = ({ children }) => {

    const[user,setUser]= useState(null)
    // signup User on firebase
    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //  signIn user 
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //  delete user from firebase
  const deleteUser = () => {
  const user = auth.currentUser;

  if (!user) {
    return Promise.reject(new Error("No user is currently signed in."));
  }

  const email = user.email;
  const password = prompt("Please enter your password to confirm delete:");

  const credential = EmailAuthProvider.credential(email, password);

  return reauthenticateWithCredential(user, credential)
    .then(() => {
      return user.delete();
    });
};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log('User logged in:', currentUser);
        setUser(currentUser);
      } 
    });

    // 🧹 Cleanup to avoid memory leaks
    return () => unsubscribe();
  }, []);

    const userInfo = {
        signUpUser,
        signInUser,
        deleteUser,
        user
    }

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;