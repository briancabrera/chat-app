import React from 'react'

export default function PeopleMessage({ lastMessage, message }) {
    const isUsersFirstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username

  return (
    <div className="message-row">
        {
            isUsersFirstMessage && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )
        }
        {
            message?.attachments?.length > 0
            ?
                <img src={message.attachments[0].file} alt="img" className="message-image" style={{ marginLeft: isUsersFirstMessage ? "4px" : "48px" }}/>
            : (
                <div className="message" style={{ float: "left", backgroundColor: "#CABCDC", marginLeft: isUsersFirstMessage ? "4px" : "48px"}}>
                    {message.text}
                </div>
            )
        }
    </div>
  )
}
