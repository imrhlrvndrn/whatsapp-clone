import React from 'react';
import { auth, provider } from '../../firebase';
import { useDataLayerValue } from '../../DataLayer';

// styled-components
import StyledLogin from './StyledLogin';

// images
import WhatsAppLogo from '../../React icons/whatsapp_logo.webp';

const Login = () => {
    const [{ user }, dispatch] = useDataLayerValue();

    const handleLogin = () => {
        auth.signInWithPopup(provider)
            .then((user) => {
                console.log(user.user);
                dispatch({ type: 'SET_USER', user: user.user });
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
