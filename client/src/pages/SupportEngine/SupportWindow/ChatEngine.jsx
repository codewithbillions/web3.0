import React, { useEffect, useState } from "react";

import { ChatEngineWrapper, Socket } from "react-chat-engine";

const ChatEngine = props => {
    const [showChat, setShowChat] = useState(false)

    useEffect(() => {
        if (props.visible) {
            setTimeout(() => {
                setShowChat(true)
            }, 500)
        }
    })

    return (
        <div
            className='transition-5'
            style={
               
               { 
                    height: props.visible ? '100%' : '0px',
                    zIndex: props.visible ? '100' : '0',
                    width:"100%",
                    backgroundColor: "white",
                }
            }
        >
            {
                showChat &&
                <ChatEngineWrapper>
                    <Socket 
                        projectID="ca564003-df3b-4928-90c5-3a0da89f6cd2"
                        userName={props.user.email}
                        userSecret={props.user.email}
                    />
                    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                </ChatEngineWrapper>
            }
        </div>
    )
}

export default ChatEngine;

const styles = {
    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    }
}
