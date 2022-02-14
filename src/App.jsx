import React from 'react'
import { ChatEngine } from "react-chat-engine"
import "./App.scss";

import { ChatFeed, LoginForm } from "./Components"

export default function App() {
  if (!localStorage.getItem("username")) return <LoginForm />

  const handleClick = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <>
    <ChatEngine 
        height="100vh"
        projectID="ad7f4307-be78-4342-8852-409aef2c8823"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
    <div align="center" style={{ position: "absolute" }}>
        <button type="submit" className="button" onClick={handleClick}>
            <span>Logout</span>
        </button>
    </div>
    </>
  )
}
