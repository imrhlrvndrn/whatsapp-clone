import React from 'react';
import { useDataLayerValue } from '../../DataLayer';
import { useHistory } from 'react-router-dom';
import CloseIcon from '../../React icons/CloseIcon';

// Styled components
import StyledChatInfo from './StyledChatInfo';

// Images
import WhatsAppDefault from '../../React icons/whatsapp_default.svg';
import EditIcon from '../../React icons/EditIcon';
import ChatInfoContentGroup from '../ChatInfoContentGroup/ChatInfoContentGroup';
import { db } from '../../firebase';

const ChatInfo = (props) => {
    const history = useHistory();
    const [{ user, chatInfo, chatDetails, chatInfoMember }, dispatch] = useDataLayerValue();

    const chatInfoDetails =
        chatDetails?.members?.length <= 2
            ? [
                  { title: '', content: `${chatInfoMember?.name}` },
                  { title: 'About', content: `${chatInfoMember?.bio}` },
                  { title: 'Email', content: `${chatInfoMember?.email}` },
              ]
            : [
                  { title: '', content: `${chatDetails?.name}` },
                  { title: 'Description', content: `${chatDetails?.description}` },
                  {
                      title: 'Participants',
                      content: [chatDetails?.members],
                  },
              ];
    // ! Write logic to avoid blocking the same person again and again
    const blockContact = async () => {
        // ! Update logic to actually remove the property without mutating the Object
        let rolesClone = Object.assign({}, chatDetails?.roles);
        console.log('original roles object: ', chatDetails?.roles);
        console.log('Roles object before deletion: ', rolesClone);
        delete rolesClone[`${chatInfoMember?.memberId}`];

        console.log('Roles object after deletion: ', rolesClone);

        db.collection('members')
            .doc(`${user?.uid}`)
            .set(
                {
                    blocked_contacts: [...user?.blocked_contacts, chatInfoMember?.memberId],
                },
                { merge: true }
            )
            .then(() => {
                db.collection('chats')
                    .doc(chatDetails?.id)
                    .set(
                        {
                            members: chatDetails?.members?.filter(
                                (member) => member !== chatInfoMember?.memberId
                            ),
                            roles: rolesClone,
                        },
                        { merge: true }
                    );
            });

        // db.collection('members').doc(chatInfoMember?.)
    };

    return (
        <StyledChatInfo chatInfo={chatInfo}>
            <div className='chat_info_header'>
                <CloseIcon
                    onClick={() => dispatch({ type: 'SET_CHAT_INFO', chatInfo: !chatInfo })}
                />
                <h2>{chatDetails?.members?.length <= 2 ? 'Chat info' : 'Group info'}</h2>
            </div>
            <div className='chat_info_body'>
                <img src={chatDetails?.photoURL || WhatsAppDefault} alt={chatDetails?.name} />
                {chatInfoDetails.map(({ title, content }) => (
                    <ChatInfoContentGroup title={title} content={content} />
                ))}
                {chatDetails?.members?.length <= 2 ? (
                    <ChatInfoContentGroup
                        content='Block'
                        color='239, 105, 122'
                        onClick={blockContact}
                    />
                ) : (
                    // ! Write more logic for this
                    <ChatInfoContentGroup
                        content='Exit Group'
                        color='239, 105, 122'
                        onClick={blockContact}
                    />
                )}
            </div>
        </StyledChatInfo>
    );
};

export default ChatInfo;
