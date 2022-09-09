import React, { useEffect, useState } from "react"

// tiny point: use dummy functions for onLogin and onLogout in initial State,
// helps Editors to propose options so good for development
const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogin: () => {},
	onLogout: () => {},
})

// Defining custom Auth Context Provider Upside: 
// We can use useState in it, and put all things about our app-wide state in same file
export function AuthContextProvider(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const preserevedLoggedIn = localStorage.getItem("isLoggedIn");        
        return preserevedLoggedIn === '1'

    })

    const loginHandler = () => {
        setIsLoggedIn(true)
        localStorage.setItem("isLoggedIn", '1')
    }

    const logoutHandler = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("isLoggedIn")        
    }

    return (
        <AuthContext.Provider 
            value={{
                isLoggedIn,
                onLogin: loginHandler,
                onLogout: logoutHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
