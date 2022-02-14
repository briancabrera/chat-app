import { useState, React } from 'react'
import axios from "axios"

export default function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    const URL = "https://api.chatengine.io/chats"

    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObj = {
            "Project-ID": "ad7f4307-be78-4342-8852-409aef2c8823",
            "User-Name": username,
            "User-Secret": password
        }

        try {
            await axios.get(URL, { headers: authObj })

            localStorage.setItem("username", username)
            localStorage.setItem("password", password)

            window.location.reload()
        } catch (err) {
            setError("Incorrect credentials")
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Just-a-chat</h1>
                <form onSubmit={handleSubmit}>
                    <input className="input" placeholder="Username" required type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input className="input" placeholder="Password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
