import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const {signInWithGoogle } = useFirebase();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";
    const  history =  useHistory()
    // console.log(location.state?.from);

    const handleGoogleLogIn = () => {
        signInWithGoogle()
        .then((result) => {
            // The signed-in user info.
            history.push(redirect_uri)
            
            
        })
    }
    return (
        <div>
            <h2>register page</h2>
         
            <button onClick={handleGoogleLogIn} className="btn btn-warning">Google Sign In</button>
            
        </div>
    );
};

export default Register;