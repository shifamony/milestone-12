import React, { createContext, useEffect,useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile} from "firebase/auth";
import  app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
//signup
const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email,password)

    }
//SIGNIN
const signIn = (email,password)=> {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}

//This function helps us to know whether users logged in or not
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Users state changed',currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    }

  },[]);
  //update profile
const updateUser = (userInfo) => {
  return updateProfile(user, userInfo)
}



//logout
const logout = () => {
    setLoading(true);
    return signOut(auth)
}

    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        logout,
        updateUser
    }


    return (
        <div>
           
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;