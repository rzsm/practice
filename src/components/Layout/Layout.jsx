import { Outlet } from "react-router-dom"
import MainNavigation from "../MainNavigation/MainNavigation"
import classes from "./Layout.module.css"

export default function Layout() {
	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
		</>
	)
}
