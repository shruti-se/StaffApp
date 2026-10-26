
import { getAuth } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(auth.currentUser);
    }, [auth]);

    async function logout() {
        await auth.signOut();
        navigate('/');
    }

    return (
        <>
            <h1>
                {auth.currentUser
                    ? auth.currentUser.email
                    : "not logged in"}
            </h1>

            <button onClick={logout}>Logout</button>
        </>
    );
};

export default MyProfile;
