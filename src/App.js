import { useContext } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import AuthContext from "./components/context/auth-context"
import LoginForm from "./components/LoginForm/LoginForm"
import Layout from "./components/Layout/Layout"


export default function App() {
	const ctx = useContext(AuthContext)
	console.log(ctx.isLoggedIn)

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						path="users"
						element={ctx.isLoggedIn ? <p>users</p> : <Navigate to="/" />}
					/>
					<Route
						path="admin"
						element={ctx.isLoggedIn ? <p>admin</p> : <Navigate to="/" />}
					/>
					<Route path="auth" element={<LoginForm />} />
					<Route index element={<h2>Welcome</h2>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
