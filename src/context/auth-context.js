import React, { useContext } from "react";

const TokenContext = React.createContext();
const LoggedinContext = React.createContext();
const LoginContext = React.createContext();
const LogoutContext = React.createContext();

export const useToken = () => {
    return useContext(TokenContext)
}

export const useLoggedIn = () => {
    return useContext(LoggedinContext)
}

export const useLoginHandler = () => {
    return useContext(LoginContext)
}

export const useLogoutHandler = () => {
    return useContext(LogoutContext)
}

export const AuthProvider = (props) => {
    const [token, setToken] = React.useState(() => localStorage.getItem('token'))
    const loggedIn = !!token
    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
    }
    const loginHandler = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    }

    return (
        <TokenContext.Provider value={token}>
            <LoggedinContext.Provider value={loggedIn}>
                <LoginContext.Provider value={loginHandler}>
                    <LogoutContext.Provider value={logoutHandler}>
                        {props.children}
                    </LogoutContext.Provider>
                </LoginContext.Provider>
            </LoggedinContext.Provider>
        </TokenContext.Provider>
    )       
}

