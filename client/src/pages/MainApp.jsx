import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { useDataLayerValue } from '../DataLayer';
import { db } from '../firebase';

// Styled components
import StyledMainApp from './StyledMainApp';

// React components
import Sidebar from '../components/Sidebar/Sidebar';
import MainChat from '../components/MainChat/MainChat';
import Login from './Login/Login';

const MainApp = ({ messages }) => {
    const [{ user }, dispatch] = useDataLayerValue();

    useEffect(() => {
        (async () => {
            if (user?.uid) {
                const memberDoc = await db.collection('members').doc(user?.uid).get();

                if (!memberDoc.exists) {
                    db.collection('members').doc(`${user?.uid}`).set(
                        {
                            name: user?.name,
                            phoneNumber: user?.phoneNumber,
                            email: user?.email,
                            email_is_verified: user?.email_is_verified,
                            photoURL: user?.photoURL,
                        },
                        { merge: true }
                    );

                    console.log(`New member(${user?.name}: ${user?.email}) added to the DB`);
                }
            }
        })();
    }, []);

    return (
        <StyledMainApp>
            {user ? (
                <div className='mainApp'>
                    <Router>
                        <Sidebar />
                        <Route exact path='/chats/:chatId' component={MainChat} />
                    </Router>
                </div>
            ) : (
                <Login />
            )}
        </StyledMainApp>
    );
};

export default MainApp;
