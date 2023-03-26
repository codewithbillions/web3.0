// import React, { useState } from "react"

import { styles } from "../styles";



const SupportWindow = props => {


    return (
        <div 
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
        >
         <h1> Hello </h1>
        </div>
    )
}

export default SupportWindow;







// import React, { useState } from "react"

// import { styles } from "../styles";

// import LoginForm from "./LoginForm";
// import ChatEngine from "./ChatEngine";

// const SupportWindow = props => {
//     const [user, setUser] = useState(null)
//     const [chat, setChat] = useState(null)

//     return (
//         <div 
//             className='transition-5'
//             style={{
//                 ...styles.supportWindow,
//                 ...{ opacity: props.visible ? '1' : '0' }
//             }}
//         >
//             <LoginForm 
//                 visible={user === null || chat === null}
//                 setUser={user => setUser(user)} 
//                 setChat={chat => setChat(chat)} 
//             />

//             <ChatEngine 
//                 visible={user !== null && chat !== null}
//                 user={user} 
//                 chat={chat} 
//             />
//         </div>
//     )
// }

// export default SupportWindow;
