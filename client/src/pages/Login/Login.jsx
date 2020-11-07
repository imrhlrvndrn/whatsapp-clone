import React from 'react';
import { auth, db, provider } from '../../firebase';
import { useDataLayerValue } from '../../DataLayer';

// styled-components
import StyledLogin from './StyledLogin';

// images
import WhatsAppLogo from '../../React icons/whatsapp_logo.webp';

const Login = () => {
    const [{ user }, dispatch] = useDataLayerValue();

    const handleLogin = () => {
        auth.signInWithPopup(provider)
            .then((data) => {
                console.log('Google Auth user: ', data.user);

                dispatch({
                    type: 'SET_USER',
                    user: {
                        uid: data?.user?.uid,
                        name: data?.user?.displayName,
                        phoneNumber: data?.user?.phoneNumber,
                        email: data?.user?.email,
                        photoURL: data?.user?.photoURL,
                    },
                });
            })
            .then(() => {
                db.collection('members')
                    .where('uid', '==', `${user?.uid}`)
                    .get()
                    .then((response) => {
                        console.log('DB response', response);

                        db.collection('members').add({
                            uid: user?.uid,
                            name: user?.displayName,
                            phoneNumber: user?.phoneNumber,
                            email: user?.email,
                            photoURL: user?.photoURL,
                        });
                    });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <StyledLogin>
            <div className='loginContainer'>
                <img src={WhatsAppLogo} alt='WhatsApp logo' className='logo' />
                <button onClick={handleLogin}>Signin with Google</button>
            </div>
        </StyledLogin>
    );
};

export default Login;
