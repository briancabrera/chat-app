import React from 'react'

export default function UserMessage({ message }) {
    if (message?.attachments?.length > 0) {
        return (
            <img src={message.attachments[0].file} alt="img" className="message-image" style={{ float: "right" }}/>
        )
    }

    return (
        <div className="message" style={{ float: "right", marginRight: "18px", color: "white", backgroundColor: "#3B2A50"}}>
            {message.text}
        </div>
    )
}
