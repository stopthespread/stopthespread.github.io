import styled from "styled-components"
import NavLink from "./NavLink"

const StyledNavList = styled.ul`
	margin: 0;
	position: relative;
	height: 100%;
	width: 42%;
	padding: 0;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`

const NavLinkListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	background-color: ${({ isActive }) =>
		isActive ? "rgba(0, 0, 0, 0.5)" : "none"};
	transition: background-color 0.3s ease;
	:hover {
		background-color: rgba(0, 0, 0, 0.5);
	}
`

const NavLinks = [
	{
		route: "/projects",
		title: "Projects"
	},
	{
		route: "/petitions",
		title: "Petitions"
	},
	{
		route: "/unsung-heroes",
		title: "Unsung Heroes"
	},
	{
		route: "/other",
		title: "Other"
	}
]

const NavList = ({ isActive, isMobile }) => {
	const checkIfActive = ({ route }) => (isActive === route ? true : false)
	return (
		<StyledNavList isMobile={isMobile}>
			{NavLinks.map(NavItem => (
				<NavLinkListItem
					active={checkIfActive({ route: NavItem.route })}
				>
					<NavLink
						active={checkIfActive({ route: NavItem.route })}
						route={NavItem.route}
						title={NavItem.title}
					/>
				</NavLinkListItem>
			))}
		</StyledNavList>
	)
}

export default NavList
