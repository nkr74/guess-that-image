import { useState } from "react"

const Signup = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log({username, password})
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Signup</h3>

            <label>Username:</label>
            <input
                type="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button>Signup</button>
        </form>
    )

}

export default Signup