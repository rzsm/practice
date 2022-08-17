import React, { useContext, useEffect } from "react";

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

let logoutTimerId;

// Calculate remaing duration of token validity expiration 
const calcRemainingDuration = (expirationTime) => {
    const current = new Date().getTime();
    // expirationTime is in ISOString form so we use it as the Date parameter:
    const expirationTimeStamp = new Date(expirationTime).getTime();
    return expirationTimeStamp - current;
}

// Login automatically whenever the URL changes
// Login remains active only if token has not expired
const retrieveTokenData = () => {  
    const storedToken = localStorage.getItem('token')
    const expiration = localStorage.getItem('expirationTime')
    const remaingDuration = calcRemainingDuration(expiration);
     
    if (remaingDuration > 60000) {
        return (
            {
                token: storedToken,
                duration: remaingDuration
            }
        )

    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')
    return null
}
}

export const AuthProvider = (props) => {
    const tokenData = retrieveTokenData();
    const initializedToken = tokenData ? tokenData.token : null
    const [token, setToken] = React.useState(initializedToken)

    const loggedIn = !!token

    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')        
        localStorage.removeItem('expirationTime')
        clearTimeout(logoutTimerId)
    }
    
    const loginHandler = (token, expiration) => {
        setToken(token)         
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expiration); 
        logoutTimerId = setTimeout(logoutHandler, calcRemainingDuration(expiration));
    }

    // When an auto log-in occurs, start a timer until the token expires
    useEffect(() => {
        if (logoutTimerId) {
            clearTimeout(logoutTimerId)
        } 
        if (tokenData) {
            logoutTimerId = setTimeout(logoutHandler, tokenData.duration)
        }     
        
    },[tokenData])

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

