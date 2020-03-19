import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { NavWrapper, NavLogo } from "./Styles/NavWrapper"
import NavList from "./Styles/NavList"

const NavBar = () => {
	const [isActive, setIsActive] = useState(0)
	const router = useRouter()

	useEffect(() => {
		setIsActive("/" + router.pathname.split("/")[1])
	}, [router])

	return (
		<>
			<NavWrapper>
				<Link href='/' as='/' passHref>
					<NavLogo>Logo</NavLogo>
				</Link>

				<NavList isActive={isActive} />
			</NavWrapper>
		</>
	)
}

export default NavBar
