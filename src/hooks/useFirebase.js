import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebse.init";

initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [Isloading, setIsLoading] = useState(true);

    const auth = getAuth();



    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
            // .then((result) => {
            //     // The signed-in user info.
            //     setUser(result.user);

            //     // ...
            // })
            .finally(() => {
                setIsLoading(false);
            })
    };

    // user state observer 
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user);
                // ...
            } 
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribed; 
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            
        })
        .finally(() => {setIsLoading(false)})
    }
    return {
        user,
        signInWithGoogle,
        logOut,
        Isloading,
        setUser
    }
};

export default useFirebase;