import styled from "styled-components"
import Link from "next/link"

const StyledNavLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	text-decoration: none;
	color: white;
`

const NavLink = props => {
	return (
		<Link href={props.route} as={props.route} passHref>
			<StyledNavLink href={props.route} isActive={props.active}>
				{props.title}
			</StyledNavLink>
		</Link>
	)
}

export default NavLink
