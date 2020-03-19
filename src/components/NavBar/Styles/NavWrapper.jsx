import styled from "styled-components"

export const NavWrapper = styled.nav`
	box-sizing: border-box;
	background-color: ${props => props.theme.color.primary};
	padding-left: 20px;
	width: 100vw;
	top: 0;
	left: 0;
	height: 10vh;
	box-shadow: 0 5px 20px 1px black;
	position: sticky;
	z-index: 99;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const NavLogo = styled.div`
	font-size: 42px;
`
